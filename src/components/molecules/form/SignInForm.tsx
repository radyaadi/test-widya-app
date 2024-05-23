"use client";

import { Mail, KeyRound } from "lucide-react";
import TextInput from "@/components/atoms/input/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/libs/schemas/login.schema";
import FormErrorMessage from "@/components/atoms/message/FormErrorMessage";
import Button from "@/components/atoms/button/Button";
import Link from "next/link";
import { setCookies } from "@/libs/actions/cookies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`http://localhost:5001/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        await setCookies("TOKEN", result.token);
        await setCookies("userId", result.user);
        router.replace("/");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast(`${error}`);
    }
  };

  return (
    <div className="w-full max-w-md rounded-md border bg-white p-10 shadow sm:px-12">
      <h1 className="mb-8 text-2xl font-bold text-emerald-500">
        Login ke Dashboard
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
      >
        <div>
          <TextInput
            label="Email"
            id="email"
            type="email"
            placeholder="Masukkan email"
            icon={Mail}
            {...register("email")}
          />
          <FormErrorMessage error={errors.email} />
        </div>
        <div>
          <TextInput
            label="Password"
            id="password"
            type="password"
            placeholder="Masukkan Password"
            icon={KeyRound}
            isPassword={true}
            {...register("password")}
          />
          <FormErrorMessage error={errors.password} />
        </div>

        <Button type="submit" className="mt-3 w-full">
          Masuk
        </Button>
      </form>
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-black">atau</span>
        </div>
      </div>
      <p className="mt-3 text-center text-sm">
        Belum punya akun ?{" "}
        <Link href="/sign-up" className="font-semibold text-emerald-500">
          Daftar disini
        </Link>
      </p>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
