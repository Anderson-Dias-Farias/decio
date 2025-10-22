"use client";

import type React from "react";

import { useAutosave } from "@/components/hooks/use-autosave";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { usePosts } from "../hooks/use-posts";

const formSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  excerpt: z.string().optional(),
  content: z.string().min(1, "Conteúdo é obrigatório"),
  coverImage: z.any().optional(),
  isPublished: z.boolean(),
  publishedAt: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function CreatePostForm({
  setTab,
}: {
  setTab: (tab: "list" | "create") => void;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [savedPostId, setSavedPostId] = useState<string | undefined>(undefined);

  const { refetch } = usePosts();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      isPublished: false,
      publishedAt: "",
    },
  });

  // Hook de autosave
  const { isSaving, hasUnsavedChanges, navigationDialog } = useAutosave({
    itemId: savedPostId,
    watch: form.watch,
    requiredFields: ["title", "content"],
    onSaveSuccess: (data) => {
      console.log("🎉 onSaveSuccess chamado:", { data, savedPostId });

      // Armazenar o ID do post salvo para próximas atualizações
      if (data.post?.id && !savedPostId) {
        setSavedPostId(data.post.id);
        console.log("✅ Post salvo automaticamente com ID:", data.post.id);

        // Apenas notificar que foi salvo, sem redirecionar
        toast.success("Rascunho salvo automaticamente!", {
          description:
            "Agora você pode continuar editando ou finalizar a postagem.",
        });
      } else if (data.post?.id && savedPostId) {
        console.log("🔄 Post atualizado automaticamente:", data.post.id);
      }
    },
    onSaveError: (error) => {
      console.error("Erro no autosave:", error);
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("coverImage", file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeImage = () => {
    form.setValue("coverImage", null);
    setPreviewUrl(null);
  };

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("excerpt", values.excerpt || "");
      formData.append("isPublished", String(values.isPublished));
      if (values.publishedAt) {
        formData.append("publishedAt", values.publishedAt);
      }

      if (values.coverImage) {
        formData.append("coverImage", values.coverImage);
      }

      // Se já existe um post salvo automaticamente, fazer PUT para atualizar
      if (savedPostId) {
        formData.append("id", savedPostId);
      }

      const response = await fetch("/api/posts", {
        method: savedPostId ? "PUT" : "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("[CreatePostForm] Error response:", {
          status: response.status,
          statusText: response.statusText,
          error: errorData,
        });
        throw new Error(errorData || "Erro ao criar postagem");
      }

      const data = await response.json();

      toast.success(
        savedPostId
          ? "Postagem finalizada com sucesso!"
          : "Postagem criada com sucesso!"
      );

      setPreviewUrl(null);

      await form.reset();
      router.refresh();
      refetch();
      setTab("list");
    } catch (error) {
      console.error("[CreatePostForm] Error:", error);
      toast.error(
        savedPostId ? "Erro ao atualizar postagem" : "Erro ao criar postagem",
        {
          description:
            error instanceof Error
              ? error.message
              : "Ocorreu um erro ao processar a postagem. Tente novamente.",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between items-center gap-4 md:flex-row flex-col">
            <div>
              <h2 className="text-2xl font-bold">
                {savedPostId ? "Editar Postagem" : "Nova Postagem"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {savedPostId
                  ? "Continue editando sua postagem. Clique em finalizar quando terminar."
                  : "Crie uma nova postagem para o blog. Clique em salvar quando terminar."}
              </p>
            </div>
            {/* Indicador de status do autosave */}
            <div className="flex items-center gap-2 text-sm">
              {isSaving && (
                <span className="text-blue-600">
                  💾 Salvando automaticamente...
                </span>
              )}
              {hasUnsavedChanges && !isSaving && (
                <span className="text-amber-600">⚠️ Alterações não salvas</span>
              )}
              {!hasUnsavedChanges && !isSaving && (
                <span className="text-green-600">✅ Tudo salvo</span>
              )}
            </div>
          </div>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o título da postagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resumo</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite um breve resumo da postagem"
                    className="min-h-[60px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conteúdo</FormLabel>
                <FormControl>
                  <RichTextEditor
                    content={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coverImage"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Imagem de Capa</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="cursor-pointer"
                        {...field}
                      />
                    </div>
                    {previewUrl && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={removeImage}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </FormControl>
                {previewUrl && (
                  <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-lg border">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="object-cover"
                    />
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isPublished"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      if (checked) {
                        // Quando marcar como publicado, define a data atual
                        const today = new Date().toISOString().split("T")[0];
                        form.setValue("publishedAt", today);
                      }
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Publicar imediatamente</FormLabel>
                  <FormDescription>
                    Se marcado, a postagem será publicada assim que for criada.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="publishedAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agendar Publicação</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    disabled={form.watch("isPublished")}
                  />
                </FormControl>
                <FormDescription>
                  Selecione a data e hora para agendar a publicação. Deixe em
                  branco para publicar imediatamente.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading || isSaving}>
              {isLoading
                ? savedPostId
                  ? "Atualizando..."
                  : "Criando..."
                : savedPostId
                ? "Finalizar Postagem"
                : "Criar Postagem"}
            </Button>
          </div>
        </form>
      </Form>

      {/* Dialog de confirmação para navegação */}
      <ConfirmDialog
        open={navigationDialog.isOpen}
        onOpenChange={() => {}} // Controlado pelo hook
        title={navigationDialog.title}
        description={navigationDialog.description}
        confirmText="Sair mesmo assim"
        cancelText="Continuar editando"
        onConfirm={navigationDialog.onConfirm}
        onCancel={navigationDialog.onCancel}
      />
    </>
  );
}
