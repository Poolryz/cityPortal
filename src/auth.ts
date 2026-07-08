import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs"; // или bcrypt

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt", // Рекомендуется для Credentials
    },
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // 1. Проверяем, что credentials заполнены
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email и пароль обязательны");
                }

                // 2. Ищем пользователя в базе
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string,
                    },
                });

                // 3. Если пользователь не найден
                if (!user) {
                    throw new Error("Пользователь не найден");
                }

                // 4. Проверяем пароль (предполагаем, что пароль хеширован)
                const passwordMatch = await bcrypt.compare(
                    credentials.password as string,
                    user.password // предполагаем, что в БД поле password
                );

                // 5. Если пароль не совпадает
                if (!passwordMatch) {
                    throw new Error("Неверный пароль");
                }

                // 6. Возвращаем данные пользователя (без пароля!)
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                };
            },
        }),
    ],
    // Настройка страниц
    pages: {
        signIn: "/signIn", // кастомная страница входа
    },
    callbacks: {
        // Добавляем id и email в JWT
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        // Добавляем id и email в сессию
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
            }
            return session;
        }
    }
});