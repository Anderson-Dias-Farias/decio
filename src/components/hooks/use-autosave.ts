"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { UseFormWatch } from "react-hook-form";
import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface AutosaveConfig {
  // ID do item (post ou newsletter) - undefined para criação, string para edição
  itemId?: string;
  // Função watch do react-hook-form
  watch: UseFormWatch<any>;
  // Campos obrigatórios que devem existir antes de salvar
  requiredFields?: string[];
  // Delay em ms para debounce (padrão: 2000ms)
  delay?: number;
  // Callback chamado após salvar com sucesso
  onSaveSuccess?: (data: any) => void;
  // Callback chamado em caso de erro
  onSaveError?: (error: Error) => void;
}

interface NavigationState {
  isDialogOpen: boolean;
  pendingNavigation: (() => void) | null;
  dialogTitle: string;
  dialogDescription: string;
}

export function useAutosave({
  itemId,
  watch,
  requiredFields = ["title", "content"],
  delay = 50000,
  onSaveSuccess,
  onSaveError,
}: AutosaveConfig) {
  console.log("🔧 useAutosave inicializado:", { itemId, hasItemId: !!itemId });
  const lastSavedRef = useRef<string>("");
  const isInitialLoadRef = useRef(true);
  const isSavingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Estado para controlar o dialog de confirmação
  const [navigationState, setNavigationState] = useState<NavigationState>({
    isDialogOpen: false,
    pendingNavigation: null,
    dialogTitle: "",
    dialogDescription: "",
  });

  // Estado para forçar re-render quando necessário
  const [, forceUpdate] = useState({});

  // Observar mudanças nos campos do formulário
  const formData = watch();

  // Função para verificar se os campos obrigatórios estão preenchidos
  const hasRequiredFields = useCallback(() => {
    return requiredFields.every((field) => {
      const value = formData[field];
      return value && typeof value === "string" && value.trim().length > 0;
    });
  }, [formData, requiredFields]);

  // Função para verificar se há mudanças não salvas
  const hasUnsavedChanges = useCallback(() => {
    return JSON.stringify(formData) !== lastSavedRef.current;
  }, [formData]);

  // Função para salvar no banco
  const saveToDatabase = useCallback(
    async (data: any) => {
      if (isSavingRef.current) return;

      try {
        isSavingRef.current = true;

        console.log("🔄 Iniciando autosave...", {
          data,
          hasRequired: hasRequiredFields(),
          itemId,
          hasItemId: !!itemId,
        });

        const formDataToSend = new FormData();

        // Adicionar campos comuns
        Object.keys(data).forEach((key) => {
          if (data[key] !== undefined && data[key] !== null) {
            if (key === "coverImage" && data[key] instanceof File) {
              formDataToSend.append(key, data[key]);
            } else if (typeof data[key] === "boolean") {
              formDataToSend.append(key, String(data[key]));
            } else if (
              typeof data[key] === "string" ||
              typeof data[key] === "number"
            ) {
              formDataToSend.append(key, String(data[key]));
            }
          }
        });

        // Adicionar ID se for edição
        if (itemId) {
          formDataToSend.append("id", itemId);
        }

        // Determinar endpoint e método
        const endpoint = "/api/posts";
        const method = itemId ? "PUT" : "POST";
        const url = endpoint; // Sempre usar a mesma URL, o ID vai no FormData

        console.log("📡 Enviando requisição:", {
          url,
          method,
          itemId,
          hasItemId: !!itemId,
        });

        const response = await fetch(url, {
          method,
          body: formDataToSend,
        });

        if (!response.ok) {
          throw new Error(`Erro ao salvar: ${response.statusText}`);
        }

        const result = await response.json();

        console.log("✅ Autosave concluído:", result);

        // Atualizar referência do último salvamento
        lastSavedRef.current = JSON.stringify(data);

        // Forçar re-render para atualizar o status
        forceUpdate({});

        // Callback de sucesso
        if (onSaveSuccess) {
          onSaveSuccess(result);
        }

        // Toast discreto para não incomodar o usuário
        if (!itemId) {
          toast.success(`Artigo salvo automaticamente`);
        } else {
          console.log("✅ Artigo atualizado automaticamente");
        }

        return result;
      } catch (error) {
        console.error("❌ Erro no autosave:", error);

        if (onSaveError) {
          onSaveError(error as Error);
        }

        // Toast de erro mais discreto
        toast.error("Erro ao salvar automaticamente", {
          description:
            "Suas alterações podem ser perdidas. Tente salvar manualmente.",
        });

        throw error;
      } finally {
        isSavingRef.current = false;
        // Forçar re-render para atualizar o status
        forceUpdate({});
      }
    },
    [itemId, onSaveSuccess, onSaveError, hasRequiredFields]
  );

  // Efeito principal que monitora mudanças no formulário
  useEffect(() => {
    // Pular na carga inicial
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      lastSavedRef.current = JSON.stringify(formData);
      console.log("🔄 Autosave inicializado");
      return;
    }

    // Verificar se há mudanças reais
    const currentData = JSON.stringify(formData);
    if (currentData === lastSavedRef.current) {
      console.log("⏭️ Sem mudanças detectadas");
      return;
    }

    // Verificar se tem os campos obrigatórios
    if (!hasRequiredFields()) {
      console.log("⚠️ Campos obrigatórios não preenchidos:", requiredFields);
      return;
    }

    console.log("⏰ Mudanças detectadas, iniciando contador de debounce...");

    // Limpar timeout anterior se existir
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Criar novo timeout para debounce
    timeoutRef.current = setTimeout(() => {
      console.log("🚀 Disparando autosave após debounce...");

      // Verificar novamente se ainda há mudanças (pode ter sido salvo manualmente)
      const latestData = JSON.stringify(formData);
      if (latestData !== lastSavedRef.current) {
        saveToDatabase(formData).catch(() => {
          // Erro já tratado na função saveToDatabase
        });
      }
    }, delay);

    // Cleanup do timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [formData, hasRequiredFields, saveToDatabase, requiredFields, delay]);

  // Função para confirmar saída com Dialog
  const confirmExit = useCallback(
    (
      title: string = "Alterações não salvas",
      description: string = "Você tem alterações não salvas. Tem certeza que deseja sair desta página?",
      onConfirm: () => void
    ) => {
      if (hasUnsavedChanges() && hasRequiredFields()) {
        setNavigationState({
          isDialogOpen: true,
          pendingNavigation: onConfirm,
          dialogTitle: title,
          dialogDescription: description,
        });
        return false; // Bloquear navegação por enquanto
      }
      return true; // Permitir navegação
    },
    [hasUnsavedChanges, hasRequiredFields]
  );

  // Função para lidar com confirmação do dialog
  const handleConfirmNavigation = useCallback(() => {
    if (navigationState.pendingNavigation) {
      navigationState.pendingNavigation();
    }
    setNavigationState({
      isDialogOpen: false,
      pendingNavigation: null,
      dialogTitle: "",
      dialogDescription: "",
    });
  }, [navigationState.pendingNavigation]);

  // Função para cancelar navegação
  const handleCancelNavigation = useCallback(() => {
    setNavigationState({
      isDialogOpen: false,
      pendingNavigation: null,
      dialogTitle: "",
      dialogDescription: "",
    });
  }, []);

  // Efeito para proteção contra perda de dados
  useEffect(() => {
    console.log("🔧 Configurando proteção contra perda de dados...");

    // 1. Interceptar fechamento da aba/navegador (OBRIGATÓRIO - limitação do navegador)
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      console.log("🚨 beforeunload disparado");
      console.log("🔍 hasUnsavedChanges:", hasUnsavedChanges());
      console.log("🔍 hasRequiredFields:", hasRequiredFields());

      if (hasUnsavedChanges() && hasRequiredFields()) {
        console.log("⚠️ Bloqueando saída - há mudanças não salvas");

        // Método mais confiável para navegadores modernos
        event.preventDefault();

        // Chrome exige que returnValue seja definido
        const message =
          "Você tem alterações não salvas. Tem certeza que deseja sair?";
        event.returnValue = message;

        return message;
      }

      console.log("✅ Permitindo saída - sem mudanças não salvas");
    };

    // 2. Interceptar cliques em links
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href) {
        // Verificar se é um link interno (mesmo domínio) ou externo
        const isExternal =
          link.href.startsWith("http") &&
          !link.href.includes(window.location.hostname);
        const isAnchor = link.href.includes("#");

        console.log("🔗 Clique em link detectado:", {
          href: link.href,
          isExternal,
          isAnchor,
          hasUnsaved: hasUnsavedChanges(),
          hasRequired: hasRequiredFields(),
        });

        if (!isAnchor && hasUnsavedChanges() && hasRequiredFields()) {
          console.log("⚠️ Interceptando clique em link");
          event.preventDefault();

          const shouldConfirm = confirmExit(
            "Sair da página",
            "Você tem alterações não salvas. Tem certeza que deseja sair desta página?",
            () => {
              console.log("✅ Usuário confirmou saída, navegando...");
              // Permitir navegação
              if (isExternal) {
                window.open(link.href, link.target || "_self");
              } else {
                window.location.href = link.href;
              }
            }
          );

          if (shouldConfirm) {
            // Navegar imediatamente se não há mudanças
            if (isExternal) {
              window.open(link.href, link.target || "_self");
            } else {
              window.location.href = link.href;
            }
          }
        }
      }
    };

    // 3. Interceptar botão voltar/avançar do navegador - VERSÃO COM DIALOG
    const handlePopState = (event: PopStateEvent) => {
      console.log("🔙 popstate disparado");

      if (hasUnsavedChanges() && hasRequiredFields()) {
        console.log("⚠️ Interceptando navegação do histórico");

        // Bloquear a navegação primeiro
        window.history.pushState(null, "", window.location.href);

        // Usar o Dialog personalizado
        const shouldConfirm = confirmExit(
          "Voltar na página",
          "Você tem alterações não salvas. Tem certeza que deseja voltar?",
          () => {
            console.log("✅ Usuário confirmou, permitindo navegação");
            // Permitir a navegação
            window.history.back();
          }
        );

        if (shouldConfirm) {
          console.log("✅ Usuário confirmou saída");
          window.history.back();
        }
      }
    };

    // 4. Interceptar tentativas de refresh da página - VERSÃO COM DIALOG
    const handleKeyDown = (event: KeyboardEvent) => {
      // Interceptar F5, Ctrl+R, Ctrl+F5
      if (
        event.key === "F5" ||
        (event.ctrlKey && event.key === "r") ||
        (event.ctrlKey && event.key === "R") ||
        (event.ctrlKey && event.shiftKey && event.key === "R")
      ) {
        console.log("🔄 Tentativa de refresh detectada");

        if (hasUnsavedChanges() && hasRequiredFields()) {
          console.log("⚠️ Interceptando refresh");
          event.preventDefault();
          event.stopPropagation();

          // Usar o Dialog personalizado
          const shouldConfirm = confirmExit(
            "Atualizar página",
            "Você tem alterações não salvas. Tem certeza que deseja atualizar a página?",
            () => {
              console.log("✅ Usuário confirmou refresh");
              window.location.reload();
            }
          );

          if (shouldConfirm) {
            console.log("✅ Usuário confirmou refresh");
            window.location.reload();
          }

          return false;
        }
      }
    };

    // 5. Interceptar mudanças diretas na URL
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      console.log("🔄 pushState interceptado");

      if (hasUnsavedChanges() && hasRequiredFields()) {
        console.log("⚠️ Interceptando pushState");

        const shouldConfirm = confirmExit(
          "Navegar para outra página",
          "Você tem alterações não salvas. Tem certeza que deseja navegar?",
          () => {
            console.log("✅ Usuário confirmou pushState");
            originalPushState.apply(window.history, args);
          }
        );

        if (shouldConfirm) {
          return originalPushState.apply(this, args);
        }
        return;
      }

      return originalPushState.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      console.log("🔄 replaceState interceptado");

      if (hasUnsavedChanges() && hasRequiredFields()) {
        console.log("⚠️ Interceptando replaceState");

        const shouldConfirm = confirmExit(
          "Navegar para outra página",
          "Você tem alterações não salvas. Tem certeza que deseja navegar?",
          () => {
            console.log("✅ Usuário confirmou replaceState");
            originalReplaceState.apply(window.history, args);
          }
        );

        if (shouldConfirm) {
          return originalReplaceState.apply(this, args);
        }
        return;
      }

      return originalReplaceState.apply(this, args);
    };

    // 6. Interceptar tentativas de mudança de URL direta na barra de endereços
    const isNavigating = false;
    const handleVisibilityChange = () => {
      if (
        document.hidden &&
        hasUnsavedChanges() &&
        hasRequiredFields() &&
        !isNavigating
      ) {
        console.log("🔄 Possível mudança de URL detectada");
        // Não podemos bloquear aqui, mas podemos tentar salvar
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            "/api/autosave",
            JSON.stringify({
              data: formData,
              itemId,
            })
          );
        }
      }
    };

    // Adicionar listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleClick, true); // useCapture = true
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("keydown", handleKeyDown, true); // useCapture = true
    document.addEventListener("visibilitychange", handleVisibilityChange);

    console.log("🔧 Todos os listeners adicionados (máximo Dialog possível)");

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      // Restaurar métodos originais
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;

      console.log("🧹 Todos os listeners removidos");
    };
  }, [hasUnsavedChanges, hasRequiredFields, confirmExit, formData, itemId]);

  // Função para salvar manualmente
  const saveManually = useCallback(async () => {
    if (!hasRequiredFields()) {
      toast.error("Preencha os campos obrigatórios antes de salvar");
      return null;
    }

    try {
      const result = await saveToDatabase(formData);
      toast.success("Salvo com sucesso!");
      return result;
    } catch (error) {
      toast.error("Erro ao salvar");
      throw error;
    }
  }, [formData, hasRequiredFields, saveToDatabase]);

  return {
    saveManually,
    isSaving: isSavingRef.current,
    hasUnsavedChanges: hasUnsavedChanges(),
    // Propriedades do dialog
    navigationDialog: {
      isOpen: navigationState.isDialogOpen,
      title: navigationState.dialogTitle,
      description: navigationState.dialogDescription,
      onConfirm: handleConfirmNavigation,
      onCancel: handleCancelNavigation,
    },
  };
}
