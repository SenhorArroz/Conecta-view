import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";
import bcrypt from "bcryptjs";
import { z } from "zod";

// Removido: import { create } from "domain"; <--- Esse era o culpado!

export const authRouter = createTRPCRouter({
    createUser: publicProcedure
        .input(
            z.object({
                name: z.string().optional(),
                email: z.string().email(),
                password: z.string().min(6),
            })
        )
        .mutation(async ({ input }) => {
            const { name, email, password } = input;
            
            const existingUser = await db.user.findUnique({ where: { email } });
            
            if (existingUser) {
                // No tRPC, é melhor usar TRPCError para o erro chegar formatado no front
                throw new Error("E-mail já registrado.");
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);
            
            const user = await db.user.create({
                data: {
                    name: input.name,
                    email: input.email,
                    password: hashedPassword,
                },
            });
            
            return { id: user.id, email: user.email };
        }),
});