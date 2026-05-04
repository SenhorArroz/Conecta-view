import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const provaRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        nome: z.string().min(1),
        desc: z.string().min(1),
        pontos: z.number().min(0),
        equipeId: z.string().cuid().optional().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.prova_Gincana.create({
        data: {
          nome: input.nome,
          desc: input.desc,
          pontos: input.pontos,
          equipeId: input.equipeId,
          createdById: ctx.session.user.id,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.prova_Gincana.findMany({
      where: { createdById: ctx.session.user.id },
      include: { equipe: true },
      orderBy: { createdAt: "desc" },
    });
  }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        nome: z.string().min(1),
        desc: z.string().min(1),
        pontos: z.number().min(0),
        equipeId: z.string().cuid().optional().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.prova_Gincana.update({
        where: { id: input.id },
        data: {
          nome: input.nome,
          desc: input.desc,
          pontos: input.pontos,
          equipeId: input.equipeId,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.prova_Gincana.delete({
        where: { id: input.id },
      });
    }),
});