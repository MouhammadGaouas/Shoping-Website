import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1),
  imageUrl: z.string().min(1),
  description: z.string().optional(),
  price: z.number().min(0),
  inStock: z.number().min(0),
});
