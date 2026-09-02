# STAGE 1 — Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar configs de dependências
COPY package.json pnpm-lock.yaml ./

# Copiar pasta prisma antes de instalar (necessário para postinstall)
COPY prisma ./prisma

# Habilitar pnpm na versão fixada em package.json (via Corepack)
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare --activate

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copia o resto do projeto
COPY . .

# Build do Next.js
RUN pnpm build


# STAGE 2 — Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar build final
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src/generated ./src/generated
COPY --from=builder /app/prisma ./prisma

# Habilitar pnpm na versão fixada em package.json (via Corepack)
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare --activate

# Porta padrão
EXPOSE 3000

# Comando de execução
CMD ["pnpm", "start"]
