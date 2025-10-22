import authOptions from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();

    // Debug: Log dos dados recebidos
    console.log("📥 Dados recebidos:", {
      title: formData.get("title"),
      content: formData.get("content")?.toString().substring(0, 100) + "...",
      excerpt: formData.get("excerpt"),
      isPublished: formData.get("isPublished"),
      publishedAt: formData.get("publishedAt"),
      hasCoverImage: !!formData.get("coverImage"),
    });

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const isPublished = formData.get("isPublished") === "true";
    const coverImage = formData.get("coverImage") as File | null;

    // Validação dos campos obrigatórios
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let compressedBuffer: Buffer | null = null;

    if (coverImage) {
      const arrayBuffer = await coverImage.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Comprime em WebP (qualidade 80%)
      compressedBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
    }

    const postData = {
      title,
      excerpt: excerpt || null,
      content,
      image: compressedBuffer,
      published: isPublished,
    };

    const post = await prisma.post.create({
      data: postData,
    });

    console.log("Post created:", post);

    return NextResponse.json(
      { status: 200, message: "Post created", post },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();

    // Extrair ID do FormData
    const id = formData.get("id") as string;

    // Debug: Log dos dados recebidos
    console.log("📥 Dados recebidos (PUT):", {
      id,
      title: formData.get("title"),
      content: formData.get("content")?.toString().substring(0, 100) + "...",
      excerpt: formData.get("excerpt"),
      isPublished: formData.get("isPublished"),
      publishedAt: formData.get("publishedAt"),
      hasCoverImage: !!formData.get("coverImage"),
    });

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const isPublished = formData.get("isPublished") === "true";
    const coverImage = formData.get("coverImage") as File | null;

    // Validação dos campos obrigatórios
    if (!id || !title || !content) {
      return NextResponse.json(
        { error: "ID, title and content are required" },
        { status: 400 }
      );
    }

    let compressedBuffer: Buffer | undefined = undefined;

    if (coverImage) {
      const arrayBuffer = await coverImage.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Comprime em WebP (qualidade 80%)
      compressedBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
    }

    const updateData: {
      title: string;
      excerpt: string | null;
      content: string;
      published: boolean;
      image?: Buffer;
    } = {
      title,
      excerpt: excerpt || null,
      content,
      published: isPublished,
    };

    // Só atualizar a imagem se uma nova foi enviada
    if (compressedBuffer) {
      updateData.image = compressedBuffer;
    }

    const post = await prisma.post.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(
      { status: 200, message: "Post updated", post },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json(
      { status: 200, message: "Post deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const nome = searchParams.get("nome");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    if (nome) {
      // Buscar post específico
      const post = await prisma.post.findMany({
        where: { title: nome },
      });

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json({ status: 200, post });
    } else {
      // Calcular offset para paginação
      const skip = (page - 1) * limit;

      // Construir filtros de busca
      const whereClause = search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" as const } },
              { excerpt: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {};

      // Buscar posts com paginação
      const [posts, totalCount] = await Promise.all([
        prisma.post.findMany({
          where: whereClause,
          orderBy: { createdAt: "desc" },
          skip,
          take: limit,
        }),
        prisma.post.count({
          where: whereClause,
        }),
      ]);

      const totalPages = Math.ceil(totalCount / limit);

      // Converter Buffer para base64 para serialização JSON
      const postsWithBase64Images = posts.map((post) => ({
        ...post,
        image: post.image
          ? `data:image/webp;base64,${Buffer.from(post.image).toString(
              "base64"
            )}`
          : null,
      }));

      return NextResponse.json({
        status: 200,
        posts: postsWithBase64Images,
        totalPages,
        currentPage: page,
        totalCount,
      });
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
