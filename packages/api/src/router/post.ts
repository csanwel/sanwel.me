import { CreatePostSchema } from "@sanwel/validators";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    // return ctx.db.query.post.findMany({
    //   orderBy: desc(schema.post.id),
    //   limit: 10,
    // });
    return [];
  }),

  byId: publicProcedure.input(z.object({ id: z.number() })).query(() => {
    // return ctx.db
    //   .select()
    //   .from(schema.post)
    //   .where(eq(schema.post.id, input.id));

    // return ctx.db.query.post.findFirst({
    //   where: eq(schema.post.id, input.id),
    // });

    return null;
  }),

  create: protectedProcedure.input(CreatePostSchema).mutation(() => {
    // return ctx.db.insert(schema.post).values(input);
    return null;
  }),

  delete: protectedProcedure.input(z.number()).mutation(() => {
    // return ctx.db.delete(schema.post).where(eq(schema.post.id, input));
    return null;
  }),
});
