import { z } from "zod";

export const editProfileSchema = z.object({
  name: z
    .string()
    .min(5, "Nama lengkap harus terdiri dari minimal 5 karakter")
    .max(40, "Nama lengkap tidak boleh lebih dari 40 karakter"),
  gender: z.enum(["pria", "wanita"], {
    errorMap: () => ({ message: "Jenis kelamin harus diisi" }),
  }),
});
