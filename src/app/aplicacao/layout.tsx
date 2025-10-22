import Dashboard from "@/components/_Pages/Dashboard";
import DashboardHeader from "@/components/DashboardHeader";
import authOptions from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  // Buscar métricas dos posts
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  const [
    totalPosts,
    totalPublished,
    totalDrafts,
    postsThisMonth,
    postsLastMonth,
    publishedThisMonth,
    publishedLastMonth,
    draftsThisMonth,
    draftsLastMonth,
  ] = await Promise.all([
    // Total de posts
    prisma.post.count(),

    // Total de posts publicados
    prisma.post.count({
      where: { published: true },
    }),

    // Total de rascunhos
    prisma.post.count({
      where: { published: false },
    }),

    // Posts este mês
    prisma.post.count({
      where: {
        createdAt: {
          gte: startOfMonth,
        },
      },
    }),

    // Posts mês passado
    prisma.post.count({
      where: {
        createdAt: {
          gte: startOfLastMonth,
          lte: endOfLastMonth,
        },
      },
    }),

    // Publicados este mês
    prisma.post.count({
      where: {
        published: true,
        createdAt: {
          gte: startOfMonth,
        },
      },
    }),

    // Publicados mês passado
    prisma.post.count({
      where: {
        published: true,
        createdAt: {
          gte: startOfLastMonth,
          lte: endOfLastMonth,
        },
      },
    }),

    // Rascunhos este mês
    prisma.post.count({
      where: {
        published: false,
        createdAt: {
          gte: startOfMonth,
        },
      },
    }),

    // Rascunhos mês passado
    prisma.post.count({
      where: {
        published: false,
        createdAt: {
          gte: startOfLastMonth,
          lte: endOfLastMonth,
        },
      },
    }),
  ]);

  const dashboardData = {
    totalPosts,
    totalDrafts,
    totalPublished,
    postsThisMonth,
    postsLastMonth,
    draftsThisMonth,
    draftsLastMonth,
    publishedThisMonth,
    publishedLastMonth,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start pb-10">
      <DashboardHeader userName={session.user?.name || "Usuário"} />
      <Dashboard data={dashboardData} />
      <div className="container mx-auto max-w-7xl px-4">{children}</div>
    </div>
  );
}
