import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

var bcrypt = require("bcryptjs");

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
            authorize: async (credentials) => {
                if (!credentials?.email || typeof credentials.email !== "string" ||
                    !credentials?.password || typeof credentials.password !== "string" || !prisma) {
                    return null;
                }

                const email = credentials.email as string;
                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                });

                if (!user) {
                    return null;
                }

                const isPasswordValid = await bcrypt.compareSync(credentials.password as string, user.password);

                if (!isPasswordValid) {
                    return null;
                }

                return user;
            },
        }),
    ],
});

