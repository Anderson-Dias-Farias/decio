import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

declare module "next-auth" {
  interface User {
    id?: string | null;
    name?: string | null;
    email?: string | null;
  }

  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
    };
  }
}

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Primeiro tenta encontrar um usuário normal
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (user) {
            const passwordMatch = credentials.password === user.password;

            if (passwordMatch) {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
              };
            }
            return null;
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60, // 24 horas em segundos
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user && typeof token.user === "object") {
        const userToken = token.user as User;
        session.user = {
          id: userToken.id || null,
          name: userToken.name || null,
          email: userToken.email || null,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
  debug: true,
};

export default nextAuthOptions;
