import { prisma } from "@/lib/prisma";

async function publishScheduledPosts() {
  try {
    console.log("🕛 Verificando posts agendados...");

    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const scheduledPosts = await prisma.post.findMany({
      where: {
        published: false,
        publishedAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: {
        id: true,
        title: true,
        publishedAt: true,
      },
    });

    if (scheduledPosts.length === 0) {
      console.log("✅ Nenhum post agendado para hoje");
      return;
    }

    console.log(`📝 Encontrados ${scheduledPosts.length} posts para publicar:`);

    for (const post of scheduledPosts) {
      console.log(
        `  - ${
          post.title
        } (agendado para: ${post.publishedAt?.toLocaleDateString("pt-BR")})`
      );
    }

    const updateResult = await prisma.post.updateMany({
      where: {
        id: {
          in: scheduledPosts.map((p) => p.id),
        },
      },
      data: {
        published: true,
        publishedAt: new Date(),
      },
    });

    console.log(`✅ ${updateResult.count} posts publicados com sucesso!`);

    for (const post of scheduledPosts) {
      console.log(`  ✅ Publicado: ${post.title}`);
    }
  } catch (error) {
    console.error("❌ Erro ao publicar posts agendados:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  publishScheduledPosts()
    .then(() => {
      console.log("🎉 Script executado com sucesso!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("💥 Erro fatal:", error);
      process.exit(1);
    });
}
