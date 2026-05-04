import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const doacaoRouter = createTRPCRouter({
  // Criar uma nova doação com múltiplos itens
  create: protectedProcedure
    .input(
      z.object({
        nomeDoador: z.string().min(1),
        equipeId: z.string().cuid(),
        desc: z.string().optional(),
        // Array de objetos contendo o ID do item e a quantidade
        itens: z.array(
          z.object({
            itemId: z.string().cuid(),
            quantidade: z.number().min(1),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { nomeDoador, equipeId, desc, itens } = input;

      // Usamos uma transação para garantir que a doação e os itens sejam salvos juntos
      return ctx.db.$transaction(async (tx) => {
        const novaDoacao = await tx.doacao.create({
          data: {
            nome: nomeDoador,
            desc: desc,
            equipeId: equipeId,
            createdById: ctx.session.user.id,
            // Criação aninhada dos itens vinculados à doação
            itensDoadores: {
              create: itens.map((item) => ({
                itemId: item.itemId,
                quantidade: item.quantidade,
              })),
            },
          },
          include: {
            itensDoadores: true,
          },
        });

        return novaDoacao;
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(), // ID da doação a ser editada
        nomeDoador: z.string().min(1),
        equipeId: z.string().cuid(),
        desc: z.string().optional(),
        itens: z.array(
          z.object({
            itemId: z.string().cuid(),
            quantidade: z.number().min(1),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, nomeDoador, equipeId, desc, itens } = input;

      return ctx.db.$transaction(async (tx) => {
        // 1. Atualiza os dados da doação e limpa os itens antigos
        const doacaoAtualizada = await tx.doacao.update({
          where: { id },
          data: {
            nome: nomeDoador,
            desc: desc,
            equipeId: equipeId,
            // Deleta todos os itens atuais para reinserir os novos
            itensDoadores: {
              deleteMany: {},
              create: itens.map((item) => ({
                itemId: item.itemId,
                quantidade: item.quantidade,
              })),
            },
          },
          include: {
            itensDoadores: true,
          },
        });

        return doacaoAtualizada;
      });
    }),

  // Listar doações com os itens incluídos
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.doacao.findMany({
      where: { createdById: ctx.session.user.id },
      include: {
        equipe: true,
        itensDoadores: {
          include: {
            item: true, // Traz os detalhes do item (nome, pontos)
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }),
  delete: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.doacao.delete({
        where: { 
          id: input.id,
          createdById: ctx.session.user.id 
        },
      });
    }),
});