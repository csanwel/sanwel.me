import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(() => {
    return null;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @sanwel/auth package
    return "you can see this secret message!";
  }),
});
