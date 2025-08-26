import { z } from "zod";

export const portfolioSchema = z.object({
  id: z.number(),
  asset: z.string(),
  type: z.string(),
  status: z.string(),
  amount: z.string(),
  returns: z.string(),
  allocation: z.string(),
});
