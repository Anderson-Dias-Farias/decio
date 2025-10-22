import { PrismaClient } from "@/generated/prisma";

// PrismaClient é anexado ao objeto global para evitar múltiplas instâncias do Prisma Client em ambientes de desenvolvimento
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Verifica se já existe uma instância do Prisma e a reutiliza, ou cria uma nova instância
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
