import ArticleCard from "@/components/_Pages/Blog/articelCard";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import prisma from "@/lib/prisma";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const pageNumber = Number(page) || 1;
  const itemsPerPage = 6;
  const skip = (pageNumber - 1) * itemsPerPage;

  const [response, totalArticles] = await Promise.all([
    prisma.post.findMany({
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
    }),
    prisma.post.count({
      where: {
        published: true,
      },
    }),
  ]);

  const totalPages = Math.ceil(totalArticles / itemsPerPage);

  const articles = response.map((article) => ({
    ...article,
    image: article.image
      ? `data:image/webp;base64,${Buffer.from(article.image).toString(
          "base64"
        )}`
      : null,
  }));

  return (
    <section className="w-full max-w-screen-xl mx-auto py-8 flex flex-col items-center px-4 gap-2">
      <div className="flex items-center justify-start gap-3 mb-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Artigos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-2xl mx-auto py-12 flex flex-col items-center px-8 gap-8">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))
        ) : (
          <div className="flex justify-center items-center h-full w-full py-16">
            <span className="text-2xl font-bold">Nenhum artigo publicado</span>
          </div>
        )}
      </div>

      <div className="flex justify-center my-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={pageNumber > 1 ? `?page=${pageNumber - 1}` : "#"}
                className={
                  pageNumber <= 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href={`?page=${pageNumber}`}
                    isActive={pageNumber === pageNumber}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                href={pageNumber < totalPages ? `?page=${pageNumber + 1}` : "#"}
                className={
                  pageNumber >= totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
