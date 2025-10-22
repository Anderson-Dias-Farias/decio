import { renderContent, TextContent } from "@/components/hooks/renderText";
import prisma from "@/lib/prisma";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  const { id } = params;

  const response = await prisma.post.findUnique({
    where: { id },
  });

  if (!response) {
    notFound();
  }

  const article = {
    ...response,
    image: response.image
      ? `data:image/webp;base64,${Buffer.from(response.image).toString(
          "base64"
        )}`
      : null,
  };

  // Parse the content if it's a JSON string
  let parsedContent: TextContent = [];
  try {
    if (typeof article.content === "string") {
      parsedContent = JSON.parse(article.content);
    }
  } catch (error) {
    console.error("Error parsing article content:", error);
  }

  return (
    <article className="w-full max-w-screen-xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center lg:gap-6 gap-2 text-gray-800 text-xs md:text-base">
            <span className="flex items-center gap-1">
              <Calendar className="text-green-500" />
              {article.createdAt.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {article.image && (
        <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] mb-12 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {parsedContent.length > 0 ? (
          renderContent(parsedContent)
        ) : (
          <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
        )}
      </div>
    </article>
  );
}
