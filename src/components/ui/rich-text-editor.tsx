"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Type,
  Underline,
  Undo,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  createEditor,
  Descendant,
  Editor,
  Node,
  Operation,
  Element as SlateElement,
  Transforms,
} from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";

type CustomElement = {
  type:
    | "paragraph"
    | "block-quote"
    | "bulleted-list"
    | "numbered-list"
    | "list-item";
  children: CustomText[];
  align?: "left" | "center" | "right" | "justify";
};

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  fontSize?: number;
  url?: string;
} & {
  [key: string]: boolean | number | string | undefined;
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

interface RichTextEditorProps {
  content: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [savedSelection, setSavedSelection] = useState<Selection | null>(null);

  const [value, setValue] = useState<Descendant[]>(() => {
    try {
      return content ? JSON.parse(content) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      setValue(content ? JSON.parse(content) : initialValue);
    } catch {
      setValue(initialValue);
    }
  }, [content]);

  const renderElement = useCallback((props: RenderElementProps) => {
    const { attributes, children, element } = props;

    const style = { textAlign: element.align };

    switch (element.type) {
      case "block-quote":
        return (
          <blockquote
            className="border-l-4 border-muted-foreground pl-4 italic"
            {...attributes}
            style={style}
          >
            {children}
          </blockquote>
        );
      case "list-item":
        return (
          <li {...attributes} style={style}>
            {children}
          </li>
        );
      case "numbered-list":
        return (
          <ol className="list-decimal pl-10" {...attributes} style={style}>
            {children}
          </ol>
        );
      case "bulleted-list":
        return (
          <ul className="list-disc pl-10" {...attributes} style={style}>
            {children}
          </ul>
        );
      default:
        return (
          <p {...attributes} style={style}>
            {children}
          </p>
        );
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    const { attributes, children, leaf } = props;
    let element = children;

    if (leaf.bold) {
      element = <strong>{element}</strong>;
    }

    if (leaf.italic) {
      element = <em>{element}</em>;
    }

    if (leaf.underline) {
      element = <u>{element}</u>;
    }

    // @ts-expect-error - Custom leaf property
    if (leaf.strikethrough) {
      element = <del>{element}</del>;
    }

    // @ts-expect-error - Custom leaf property
    if (leaf.fontSize) {
      element = (
        // @ts-expect-error - Custom leaf property
        <span style={{ fontSize: `${leaf.fontSize}px` }}>{element}</span>
      );
    }

    // @ts-expect-error - Custom leaf property
    if (leaf.url) {
      element = (
        <a
          // @ts-expect-error - Custom leaf property
          href={leaf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {element}
        </a>
      );
    }

    return <span {...attributes}>{element}</span>;
  }, []);

  const toggleMark = (format: keyof Omit<CustomText, "text">) => {
    const isActive = isMarkActive(format);

    if (isActive) {
      // @ts-expect-error - Slate editor API
      editor.removeMark(format);
    } else {
      // @ts-expect-error - Slate editor API
      editor.addMark(format, true);
    }
  };

  const isMarkActive = (format: keyof Omit<CustomText, "text">) => {
    const marks = Editor.marks(editor);
    // @ts-expect-error - Slate editor API
    return marks ? marks[format] === true : false;
  };

  const toggleLink = () => {
    const { selection } = editor;
    if (!selection) return;

    const linkActive = isLinkActive();

    if (linkActive) {
      editor.removeMark("url");
    } else {
      // Salva a seleção atual antes de abrir o dialog
      setSavedSelection(selection as unknown as Selection);
      setLinkDialogOpen(true);
    }
  };

  const handleLinkSubmit = () => {
    if (linkUrl.trim() && savedSelection) {
      // Restaura a seleção salva
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Transforms.select(editor, savedSelection as any);
      editor.addMark("url", linkUrl.trim());
      // Força uma atualização
      editor.onChange();
    }
    setLinkUrl("");
    setLinkDialogOpen(false);
    setSavedSelection(null);
  };

  const isLinkActive = () => {
    const marks = Editor.marks(editor);
    // @ts-expect-error - Slate editor API
    return marks && marks.url;
  };

  const toggleBlock = (format: CustomElement["type"]) => {
    const isActive = isBlockActive(format);
    const isList = ["numbered-list", "bulleted-list"].includes(format);

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        ["numbered-list", "bulleted-list"].includes(n.type),
      split: true,
    });

    const newProperties: Partial<SlateElement> = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
    Transforms.setNodes<SlateElement>(editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  };

  const isBlockActive = (format: CustomElement["type"]) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });

    return !!match;
  };

  const toggleAlign = (align: CustomElement["align"]) => {
    Transforms.setNodes(editor, { align });
  };

  const isAlignActive = (align: CustomElement["align"]) => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n: Node) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.align === align,
    });

    return !!match;
  };

  const toggleFontSize = (size: number) => {
    editor.addMark("fontSize", size);
  };

  const isFontSizeActive = (size: number) => {
    const marks = Editor.marks(editor);
    // @ts-expect-error - Slate editor API
    return marks?.fontSize === size;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      // Insere 4 espaços quando Tab é pressionado
      editor.insertText("    ");
    }
  };

  return (
    <div className="rounded-md border">
      <div className="flex items-center gap-1 border-b p-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => editor.undo()}
                className="h-8 w-8 p-0"
              >
                <Undo className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Desfazer</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => editor.redo()}
                className="h-8 w-8 p-0"
              >
                <Redo className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Refazer</TooltipContent>
          </Tooltip>

          <div className="mx-1 h-4 w-px bg-border" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleMark("bold")}
                className={`h-8 w-8 p-0 ${
                  isMarkActive("bold") ? "bg-accent" : ""
                }`}
              >
                <Bold className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Negrito</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleMark("italic")}
                className={`h-8 w-8 p-0 ${
                  isMarkActive("italic") ? "bg-accent" : ""
                }`}
              >
                <Italic className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Itálico</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleMark("underline")}
                className={`h-8 w-8 p-0 ${
                  isMarkActive("underline") ? "bg-accent" : ""
                }`}
              >
                <Underline className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Sublinhado</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleMark("strikethrough")}
                className={`h-8 w-8 p-0 ${
                  isMarkActive("strikethrough") ? "bg-accent" : ""
                }`}
              >
                <Strikethrough className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Tachado</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Dialog open={linkDialogOpen} onOpenChange={setLinkDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={toggleLink}
                    className={`h-8 w-8 p-0 ${
                      isLinkActive() ? "bg-accent" : ""
                    }`}
                  >
                    <Link className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Adicionar Link</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="url" className="text-right">
                        URL
                      </Label>
                      <Input
                        id="url"
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        placeholder="https://exemplo.com"
                        className="col-span-3"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleLinkSubmit();
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setLinkUrl("");
                        setLinkDialogOpen(false);
                        setSavedSelection(null);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button type="button" onClick={handleLinkSubmit}>
                      Adicionar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </TooltipTrigger>
            <TooltipContent>Link</TooltipContent>
          </Tooltip>

          <div className="mx-1 h-4 w-px bg-border" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleBlock("block-quote")}
                className={`h-8 w-8 p-0 ${
                  isBlockActive("block-quote") ? "bg-accent" : ""
                }`}
              >
                <Quote className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Citação</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleBlock("bulleted-list")}
                className={`h-8 w-8 p-0 ${
                  isBlockActive("bulleted-list") ? "bg-accent" : ""
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Lista com marcadores</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleBlock("numbered-list")}
                className={`h-8 w-8 p-0 ${
                  isBlockActive("numbered-list") ? "bg-accent" : ""
                }`}
              >
                <ListOrdered className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Lista numerada</TooltipContent>
          </Tooltip>

          <div className="mx-1 h-4 w-px bg-border" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleAlign("left")}
                className={`h-8 w-8 p-0 ${
                  isAlignActive("left") ? "bg-accent" : ""
                }`}
              >
                <AlignLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Alinhar à esquerda</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleAlign("center")}
                className={`h-8 w-8 p-0 ${
                  isAlignActive("center") ? "bg-accent" : ""
                }`}
              >
                <AlignCenter className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Centralizar</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleAlign("right")}
                className={`h-8 w-8 p-0 ${
                  isAlignActive("right") ? "bg-accent" : ""
                }`}
              >
                <AlignRight className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Alinhar à direita</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleAlign("justify")}
                className={`h-8 w-8 p-0 ${
                  isAlignActive("justify") ? "bg-accent" : ""
                }`}
              >
                <AlignJustify className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Justificar</TooltipContent>
          </Tooltip>

          <div className="mx-1 h-4 w-px bg-border" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => toggleFontSize(16)}
                className={`h-8 w-8 p-0 ${
                  isFontSizeActive(16) ? "bg-accent" : ""
                }`}
              >
                <Type className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Tamanho normal</TooltipContent>
          </Tooltip>

          <Select
            onValueChange={(value) => toggleFontSize(Number(value))}
            // @ts-expect-error - Slate editor API
            value={String(Editor.marks(editor)?.fontSize || 16)}
          >
            <SelectTrigger className="h-8 w-[100px]">
              <SelectValue placeholder="Tamanho" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12px</SelectItem>
              <SelectItem value="14">14px</SelectItem>
              <SelectItem value="16">16px</SelectItem>
              <SelectItem value="18">18px</SelectItem>
              <SelectItem value="20">20px</SelectItem>
              <SelectItem value="24">24px</SelectItem>
              <SelectItem value="28">28px</SelectItem>
              <SelectItem value="32">32px</SelectItem>
            </SelectContent>
          </Select>
        </TooltipProvider>
      </div>
      <div className="p-4">
        <Slate
          key={JSON.stringify(value)}
          editor={editor}
          initialValue={value}
          onChange={(newValue) => {
            const isAstChange = editor.operations.some(
              (op: Operation) => "set_selection" !== op.type
            );
            if (isAstChange) {
              setValue(newValue);
              const content = JSON.stringify(newValue);
              onChange(content);
            }
          }}
        >
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Digite o conteúdo da postagem..."
            className="min-h-[500px] resize-y overflow-y-auto focus:outline-none"
            style={{
              minHeight: "500px",
              resize: "vertical",
            }}
            onKeyDown={handleKeyDown}
          />
        </Slate>
      </div>
    </div>
  );
}
