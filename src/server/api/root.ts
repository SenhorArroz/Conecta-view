import { postRouter } from "~/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "~/server/api/routers/auth";
import { itemRouter } from "./routers/item";
import { equipeRouter } from "./routers/equipe";
import { doacaoRouter } from "./routers/doacao";
import { provaRouter } from "./routers/prova";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	auth: authRouter,
	equipe: equipeRouter,
	item: itemRouter,
	prova:provaRouter,
	doacao: doacaoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
