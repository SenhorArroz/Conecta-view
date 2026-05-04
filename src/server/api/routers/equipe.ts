import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const equipeRouter = createTRPCRouter({
    create: protectedProcedure
        .input(z.object({ nome: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.equipe.create({
                data: {
                    name: input.nome,
                    createdById: ctx.session.user.id,
                },
            });
        }),

    getAll: protectedProcedure.query(async ({ ctx }) => {
        const equipes = await ctx.db.equipe.findMany({
            where: { createdById: ctx.session.user.id },
            include: {
                doacoes: {
                    include: {
                        itensDoadores: {
                            include: {
                                item: true // Necessário para acessar o valor 'pontos' do modelo Item
                            }
                        }
                    }
                },
                provaGincanas: true
            },
        });

        return equipes.map((equipe) => {
            const pontosDoacoes = equipe.doacoes.reduce((accDoacao, doacao) => {
                const somaItens = doacao.itensDoadores.reduce((accItem, itemDoado) => {
                    const pontosBase = itemDoado.item.pontos ?? 0;
                    return accItem + (pontosBase * itemDoado.quantidade);
                }, 0);
                return accDoacao + somaItens;
            }, 0);
            const pontosProvas = equipe.provaGincanas.reduce((accProva, prova) => {
                return accProva + (prova.pontos ?? 0);
            }, 0);

            return {
                id: equipe.id,
                nome: equipe.name,
                pontos: pontosDoacoes + pontosProvas,
            };
        });
    }),
    update: protectedProcedure
        .input(z.object({ id: z.string().cuid(), nome: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.equipe.update({
                where: { id: input.id },
                data: { name: input.nome },
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string().cuid() }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.db.equipe.delete({
                where: { id: input.id },
            });
        }),
});