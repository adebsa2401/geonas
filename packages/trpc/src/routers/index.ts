import { createTRPCRouter } from "@workspace/trpc/init";
import { contactRouter } from "@workspace/trpc/routers/contact";

export const appRouter = createTRPCRouter({
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;
