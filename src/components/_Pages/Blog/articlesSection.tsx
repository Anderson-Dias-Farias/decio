import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ArticleCard from "./articelCard";

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  image: string | null;
  createdAt: string | Date;
}

export default function ArticlesSection({ articles }: { articles: Article[] }) {
  return (
    <section
      id="artigos"
      className="w-full max-w-screen-2xl mx-auto py-16 flex flex-col items-center px-8 gap-16"
    >
      {/* Título */}
      <div className="flex items-center justify-start gap-3 mb-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Artigos</h2>
      </div>
      {/* Grid de artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {articles.length > 0 ? (
          articles.map((article, idx) => (
            <ArticleCard article={article} key={idx} />
          ))
        ) : (
          <div className="flex justify-center items-center h-full w-full py-16">
            <span className="text-2xl font-bold">Nenhum artigo publicado</span>
          </div>
        )}
      </div>
      {/* Botão Ver mais */}
      <Link href={"/artigos-ebooks/artigos"}>
        <Button className="flex items-center gap-2 text-white border border-white hover:border-dourado ">
          <span className="flex items-center gap-2 font-semibold  text-sm   md:text-base p-6 ">
            Ver mais <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
          </span>
        </Button>
      </Link>
    </section>
  );
}
