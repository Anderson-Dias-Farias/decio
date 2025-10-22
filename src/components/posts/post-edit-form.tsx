"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  coverImage: z.union([z.string(), z.instanceof(File), z.null()]).optional(),
  isPublished: z.boolean(),
  publishedAt: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface PostEditFormProps {
  post: {
    id: string;
    title: string;
    excerpt: string | null;
    content: string;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    publishedAt: Date | null;
  };
}

export function PostEditForm({ post }: PostEditFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    post.image || null
  );

  const { refetch } = usePosts();

  console.log(post);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      excerpt: post.excerpt || "",
      content: post.content,
      isPublished: post.published,
      publishedAt: post.publishedAt
        ? new Date(post.publishedAt).toISOString().split("T")[0]
        : "",
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
      formData.append("id", post.id);
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

      const response = await fetch(`/api/posts`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao salvar postagem");
      }

      toast.success("As alterações foram salvas com sucesso");
      router.refresh();
      refetch();
      router.push("/aplicacao");
    } catch (error) {
      console.error("Erro ao salvar postagem:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao salvar a postagem"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 py-4">
          <h2 className="text-2xl font-bold">Editar Artigo</h2>
          <p className="text-sm text-muted-foreground">
            Edite os campos abaixo para atualizar o artigo.
          </p>
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
          render={() => (
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
                    />
                  </div>
                  {(previewUrl || post.image) && (
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
              {(previewUrl || post.image) && (
                <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-lg border">
                  <img
                    src={previewUrl || post.image || ""}
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
                Selecione a data para agendar a publicação. Deixe em branco para
                publicar imediatamente.
              </FormDescription>
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
                      const today = new Date().toISOString().split("T")[0];
                      form.setValue("publishedAt", today);
                    }
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Publicar imediatamente</FormLabel>
                <FormDescription>
                  Se marcado, a postagem será publicada assim que for salva.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </form>
    </Form>
  );
}
