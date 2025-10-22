import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface Post {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  publishedAt: Date | null;
}

interface PostsResponse {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

interface UsePostsOptions {
  page?: number;
  limit?: number;
  search?: string;
}

export function usePosts(options: UsePostsOptions = {}) {
  const searchParams = useSearchParams();

  const page = options.page || parseInt(searchParams.get("page") || "1");
  const limit = options.limit || parseInt(searchParams.get("limit") || "10");
  const search = options.search || searchParams.get("search") || "";

  const queryKey = useMemo(
    () => ["posts", { page, limit, search }],
    [page, limit, search]
  );

  const queryFn = async (): Promise<PostsResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search) {
      params.set("search", search);
    }

    const response = await fetch(`/api/posts?${params.toString()}`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  });
}
