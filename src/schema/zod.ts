import { number, object, string } from "zod";
import { z } from "zod";

export const signInSchema = object({
  email: string()
    .min(1, "Email is required")
    .email("Invalid email")
    .refine((value) => value !== "", {
      message: "Email is required",
      path: ["email"],
    }),
  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters")
    .refine((value) => value !== "", {
      message: "Email is required",
      path: ["email"],
    }),
});

export const ingredientSchema = object({
  name: string().min(1, "Название обязательно"),
  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DAIRY",
    "SPICES",
    "OTHER",
  ]),
  unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),
  pricePerUnit: number()
    .min(0, "Цена должна быть положительной")
    .nullable()
    .refine((value) => typeof value === "number", {
      message: "Цена должна быть числом",
      path: ["pricePerUnit"],
    }),
  description: z.string().optional(),
});
