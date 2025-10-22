"use client";

import { usePosts } from "@/components/hooks/use-posts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function PostsTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  // Usar o hook usePosts para gerenciar paginação e busca
  const {
    data,
    isLoading: isQueryLoading,
    refetch,
  } = usePosts({
    search: searchTerm,
  });

  // Usar dados do hook se disponível, senão usar props
  const posts = data?.posts || [];
  const totalPagesFromQuery = data?.totalPages || 0;
  const currentPageFromQuery = data?.currentPage || 1;
  const handleDeleteClick = (postId: string) => {
    setPostToDelete(postId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/posts`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: postToDelete }),
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir postagem");
      }

      toast("A postagem foi excluída com sucesso", {
        description: "A postagem foi excluída com sucesso",
      });

      // Refetch dos dados usando TanStack Query
      refetch();
    } catch {
      toast("Ocorreu um erro ao excluir a postagem", {
        description: "Ocorreu um erro ao excluir a postagem",
      });
    } finally {
      setIsLoading(false);
      setDeleteDialogOpen(false);
      setPostToDelete(null);
    }
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/aplicacao?${params.toString()}`);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    params.set("page", "1");
    router.push(`/aplicacao?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <Input
            placeholder="Buscar artigos..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full sm:max-w-sm"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <div className="w-full overflow-x-auto">
          <div className="">
            <Table className="w-full overflow-x-scroll">
              <TableHeader>
                <TableRow>
                  <TableHead>Imagem</TableHead>
                  <TableHead className="">Título</TableHead>
                  <TableHead className="">Descrição</TableHead>
                  <TableHead className="min-w-[50px]  max-w-[50px]">
                    Status
                  </TableHead>
                  <TableHead className="min-w-[50px]  max-w-[50px]">
                    Criado em
                  </TableHead>
                  <TableHead className="text-right min-w-[50px]  max-w-[50px]">
                    Ações
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isQueryLoading ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      Carregando...
                    </TableCell>
                  </TableRow>
                ) : posts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      Nenhuma postagem encontrada.
                    </TableCell>
                  </TableRow>
                ) : (
                  posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>
                        {post.image && (
                          <div className="relative h-10 w-16 overflow-hidden rounded-md">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="">
                          <p className="font-medium">{post.title}</p>
                          {post.excerpt && (
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {post.excerpt && (
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            post.published
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {post.published ? "Publicado" : "Rascunho"}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(post.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link href={`/aplicacao/articles/${post.id}`}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Editar
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => handleDeleteClick(post.id)}
                            >
                              <Trash className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {totalPagesFromQuery > 1 && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPageFromQuery - 1)}
            disabled={currentPageFromQuery === 1 || isQueryLoading}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm text-muted-foreground">
            Página {currentPageFromQuery} de {totalPagesFromQuery}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPageFromQuery + 1)}
            disabled={
              currentPageFromQuery === totalPagesFromQuery || isQueryLoading
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir esta postagem? Esta ação não pode
              ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              {isLoading ? "Excluindo..." : "Excluir"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
