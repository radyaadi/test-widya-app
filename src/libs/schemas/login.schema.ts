import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email tidak boleh kosong" })
    .email("Alamat email tidak valid"),
  password: z.string().min(8, { message: "Password tidak boleh kosong" }),
});
