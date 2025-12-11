import { Prisma, PrismaClient } from "@/generated/prisma";

// PrismaClient é anexado ao objeto global para evitar múltiplas instâncias
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Configuração do Prisma Client
const prismaClientOptions: Prisma.PrismaClientOptions = {
  log:
    process.env.NODE_ENV === "development"
      ? (["query", "error", "warn"] as Prisma.LogLevel[])
      : (["error"] as Prisma.LogLevel[]),
  errorFormat: "pretty",
};

// Verifica se já existe uma instância do Prisma e a reutiliza, ou cria uma nova instância
export const prisma =
  globalForPrisma.prisma || new PrismaClient(prismaClientOptions);

// Sempre guarda no global para evitar múltiplas instâncias (tanto em dev quanto em produção)
if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}

export default prisma;
