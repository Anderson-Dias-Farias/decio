import { renderContent, TextContent } from "@/components/hooks/renderText";
import prisma from "@/lib/prisma";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

// Função compartilhada para buscar dados do artigo
async function getArticleData(id: string) {
  const article = await prisma.post.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      excerpt: true,
      content: true,
      image: true,
      createdAt: true,
      published: true,
    },
  });

  if (!article) {
    return null;
  }

  return {
    ...article,
    image: article.image
      ? `data:image/webp;base64,${Buffer.from(article.image).toString(
          "base64"
        )}`
      : null,
  };
}

// Metadados dinâmicos para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleData(id);

  if (!article) {
    return {
      title: "Artigo não encontrado - Blog Decio",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  return {
    title: `${article.title} - Blog Decio`,
    description:
      article.excerpt ||
      `Leia o artigo "${article.title}" no blog do Grupo Decio.`,
    keywords: ["blog", "artigo", "grupo decio", article.title.toLowerCase()],
    authors: [{ name: "Grupo Decio" }],
    openGraph: {
      title: article.title,
      description:
        article.excerpt ||
        `Leia o artigo "${article.title}" no blog do Grupo Decio.`,
      url: `https://seu-dominio.com/blog-decio/${article.id}`,
      siteName: "Grupo Decio",
      images: article.image
        ? [
            {
              url: article.image,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
      publishedTime: article.createdAt.toISOString(),
      type: "article",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description:
        article.excerpt ||
        `Leia o artigo "${article.title}" no blog do Grupo Decio.`,
      images: article.image ? [article.image] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "article:published_time": article.createdAt.toISOString(),
      "article:author": "Grupo Decio",
    },
  };
}

export default async function Page({ params }: Params) {
  const { id } = await params;
  const article = await getArticleData(id);

  if (!article) {
    notFound();
  }

  // Parse the content if it's a JSON string
  let parsedContent: TextContent = [];
  try {
    if (typeof article.content === "string") {
      parsedContent = JSON.parse(article.content);
    }
  } catch (error) {
    console.error("Error parsing article content:", error);
  }

  // JSON-LD para dados estruturados
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.createdAt.toISOString(),
    dateModified: article.createdAt.toISOString(),
    author: {
      "@type": "Organization",
      name: "Grupo Decio",
      url: "https://seu-dominio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Grupo Decio",
      logo: {
        "@type": "ImageObject",
        url: "https://seu-dominio.com/logo-decio.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://seu-dominio.com/blog-decio/${article.id}`,
    },
  };

  return (
    <>
      {/* Dados estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                <time dateTime={article.createdAt.toISOString()}>
                  {article.createdAt.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </time>
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
    </>
  );
}
