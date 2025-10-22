import { PostEditForm } from "@/components/posts/post-edit-form";
import prisma from "@/lib/prisma";

import { notFound } from "next/navigation";
import { Suspense } from "react";

type PageProps<T = Record<string, never>> = {
  params: T;
};

export default async function PostDetailPage({
  params,
}: PageProps<{ id: string }>) {
  const { id } = params;

  // Busca o post completo
  const response = await prisma.post.findUnique({
    where: { id: id },
  });

  if (!response) {
    notFound();
  }

  // Converter Buffer para base64 para serialização JSON
  const post = {
    ...response,
    image: response.image
      ? `data:image/webp;base64,${Buffer.from(response.image).toString(
          "base64"
        )}`
      : null,
  };

  console.log(post);

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <Suspense fallback={<div>Carregando...</div>}>
        <PostEditForm post={post} />
      </Suspense>
    </div>
  );
}
