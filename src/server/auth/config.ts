import bcrypt from "bcryptjs";
import type { DefaultSession, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "~/server/db";

/**
 * Estendendo os tipos do NextAuth para incluir o ID e garantir que o Nome seja reconhecido
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  // Importante para o CredentialsProvider reconhecer o retorno do authorize
  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
  }
}

export const authConfig = {
  // Configurações de Sessão
  session: {
    strategy: "jwt", // Obrigatório para CredentialsProvider
  },
  // NOTA: PrismaAdapter removido — incompatível com CredentialsProvider + JWT.
  // O adapter tenta criar/ler sessões no banco, causando lentidão e erros.


  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const user = await db.user.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user || !user.password) return null;

          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isValid) return null;

          // Retorno que alimenta o primeiro parâmetro do callback 'jwt'
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // 1. O retorno do 'authorize' cai aqui primeiro no login
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },

    // 2. O hook useSession() e o auth() consultam este callback
    session: ({ session, token }) => {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
      }
      return session;
    },

    // 3. Garante redirecionamento correto após login
    redirect: ({ url, baseUrl }) => {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
} satisfies NextAuthConfig;