import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@workspace/trpc/init";
import { appRouter } from "@workspace/trpc/routers";

export const createTRPCHandler = () => (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
