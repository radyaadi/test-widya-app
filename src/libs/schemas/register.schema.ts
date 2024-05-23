import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(5, "Nama lengkap harus terdiri dari minimal 5 karakter")
      .max(40, "Nama lengkap tidak boleh lebih dari 40 karakter"),
    gender: z.enum(["pria", "wanita"], {
      errorMap: () => ({ message: "Jenis kelamin harus diisi" }),
    }),
    email: z.string().email("Alamat email tidak valid"),
    password: z
      .string()
      .min(8, "Password harus terdiri dari minimal 8 karakter")
      .regex(/[a-z]/, "Password harus mengandung satu huruf kecil")
      .regex(/[A-Z]/, "Password harus mengandung satu huruf besar")
      .regex(/[0-9]/, "Password harus mengandung satu angka")
      .regex(/[^a-zA-Z0-9]/, "Password harus mengandung satu karakter khusus"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password dan konfirmasi password tidak sama",
    path: ["passwordConfirm"],
  });
