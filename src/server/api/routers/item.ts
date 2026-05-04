import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  // Criar Item
  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      desc: z.string().optional(),
      pontos: z.number().min(0),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.item.create({
        data: {
          name: input.name,
          desc: input.desc,
          pontos: input.pontos,
          createdById: ctx.session.user.id,
        },
      });
    }),

    update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().min(1),
      desc: z.string().optional(),
      pontos: z.number().min(0),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.item.update({
        where: { id: input.id },
        data: {
          name: input.name,
          desc: input.desc,
          pontos: input.pontos,
        },
      });
    }),

  // Listar todos os Itens
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.item.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  // Deletar Item
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.item.delete({
        where: { id: input.id },
      });
    }),
});