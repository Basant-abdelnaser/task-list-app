import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(2, "Title must be at least 2 characters")
    .max(200, "Title must be less than 200 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must be at least 5 characters")
    .max(300, "Description must be less than 300 characters"),
});
