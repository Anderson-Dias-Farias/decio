import ArticlesSection from "@/components/_Pages/Blog/articlesSection";
import prisma from "@/lib/prisma";

export default async function Page() {
  const response = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      excerpt: true,
      image: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  const articles = response.map((article) => ({
    ...article,
    image: article.image
      ? `data:image/webp;base64,${Buffer.from(article.image).toString(
          "base64"
        )}`
      : null,
  }));

  console.log(articles);

  return (
    <div className="flex items-center justify-center h-screen">
      <ArticlesSection articles={articles} />
    </div>
  );
}
