import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString as string);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function translateActionType(actionType: string): string {
  const translations: Record<string, string> = {
    POST_CREATED: "Postagem criada",
    POST_UPDATED: "Postagem atualizada",
    POST_PUBLISHED: "Postagem publicada",
    POST_UNPUBLISHED: "Postagem despublicada",
    POST_DELETED: "Postagem excluída",
    EBOOK_CREATED: "E-book criado",
    EBOOK_UPDATED: "E-book atualizado",
    EBOOK_PUBLISHED: "E-book publicado",
    EBOOK_UNPUBLISHED: "E-book despublicado",
    EBOOK_DELETED: "E-book excluído",
    USER_CREATED: "Usuário criado",
    USER_UPDATED: "Usuário atualizado",
    USER_DELETED: "Usuário excluído",
    SITE_CREATED: "Site criado",
    SITE_UPDATED: "Site atualizado",
    SITE_DELETED: "Site excluído",
    NEWSLETTER_CREATED: "Newsletter criado",
    NEWSLETTER_UPDATED: "Newsletter atualizado",
    NEWSLETTER_PUBLISHED: "Newsletter publicado",
    NEWSLETTER_UNPUBLISHED: "Newsletter despublicado",
    NEWSLETTER_DELETED: "Newsletter excluído",
  };

  return translations[actionType] || actionType;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function bufferToBase64(buffer: Buffer | null): string | null {
  if (!buffer) return null;
  return `data:image/webp;base64,${buffer.toString("base64")}`;
}
