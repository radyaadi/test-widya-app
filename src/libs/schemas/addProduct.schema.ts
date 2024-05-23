import { z } from "zod";

export const addProductSchema = z.object({
  name: z
    .string()
    .min(5, "Nama product harus terdiri dari minimal 5 karakter")
    .max(40, "Nama product tidak boleh lebih dari 40 karakter"),
  category: z.enum(["smartphone", "desktop"], {
    errorMap: () => ({ message: "Kategori harus diisi" }),
  }),
  quantity: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Jumlah harus berupa angka",
    })
    .transform((val) => Number(val)),
});
