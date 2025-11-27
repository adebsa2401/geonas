import { createTRPCHandler } from "@workspace/trpc/api";

const handler = createTRPCHandler();

export { handler as GET, handler as POST };
