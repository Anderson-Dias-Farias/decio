"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { Suspense, useState } from "react";
import { CreatePostForm } from "./create-post-form";
import { PostsTable } from "./posts-table";

export function Posts() {
  const [tab, setTab] = useState<"list" | "create">("list");

  return (
    <Tabs
      value={tab}
      onValueChange={(value) => setTab(value as "list" | "create")}
      className="space-y-4 grid grid-cols-1 "
    >
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Gerenciar Artigos</h2>

        <TabsList className="gap-4 p-2">
          <TabsTrigger value="list" className="p-4 ">
            Lista de Posts
          </TabsTrigger>
          <TabsTrigger value="create" className="p-4">
            <Plus className="mr-2 h-4 w-4" />
            Criar Artigo
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="list">
        <Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              Carregando...
            </div>
          }
        >
          <PostsTable />
        </Suspense>
      </TabsContent>
      <TabsContent value="create">
        <CreatePostForm setTab={setTab} />
      </TabsContent>
    </Tabs>
  );
}
