import { ArrowBigRightDash, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  image: string | null;
  createdAt: string | Date;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
      <div className="w-full h-96 relative bg-gray-200">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-4 flex-1 justify-between">
        <h3 className="font-semibold text-lg md:text-xl leading-tight">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base line-clamp-2">
          {article.excerpt || "Sem descrição"}
        </p>
        <div className="flex flex-col gap-4 xs:gap-0 xs:flex-row items-center justify-between mt-4">
          <Link
            href={`/blog-decio/${article.id}`}
            className="flex  items-center gap-2 px-2 py-1 bg-primary text-white justify-between rounded-md w-full xs:max-w-[120px] break-words font-medium text-sm hover:bg-[#f3f8fd] transition"
          >
            Ler artigo <ArrowBigRightDash className="text-base " />
          </Link>
          <div className="flex items-center lg:gap-6 gap-2 text-gray-800 text-xs md:text-sm w-full xs:w-auto">
            <div className="flex xs:flex-col lg:flex-row items-center xs:justify-center justify-between  w-full xs:w-auto">
              <span className="flex items-center gap-1">
                <Calendar className="text-green-500" />
                {new Date(article.createdAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
