"use client";

import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/libs/schemas/register.schema";
import SelectInput from "@/components/atoms/input/SelectInput";
import TextInput from "@/components/atoms/input/TextInput";
import FormErrorMessage from "@/components/atoms/message/FormErrorMessage";
import Button from "@/components/atoms/button/Button";

interface FormData {
  name: string;
  gender: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (response.ok) {
        router.push("/sign-in");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const onBack = () => router.push("/sign-in");

  return (
    <div className="mx-auto w-full max-w-md rounded-md border bg-white p-8 shadow sm:px-10">
      <h1 className="mb-5 text-2xl font-bold text-emerald-500">Daftar Akun</h1>
      <form
        onSubmit={handleSubmit(onSubmit as any)}
        className="grid grid-cols-1 gap-4"
      >
        <div>
          <TextInput
            label="Nama Lengkap"
            id="name"
            type="text"
            placeholder="Masukkan nama lengkap"
            {...register("name")}
          />
          <FormErrorMessage error={errors.name} />
        </div>
        <div>
          <SelectInput
            label="Jenis Kelamin"
            id="gender"
            options={[
              { item: "Pria", value: "pria" },
              { item: "Wanita", value: "wanita" },
            ]}
            register={register}
            {...register("gender")}
          />
        </div>
        <div>
          <TextInput
            label="Email"
            id="email"
            type="email"
            placeholder="Masukkan email"
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
            isPassword={true}
            {...register("password")}
          />
          <FormErrorMessage error={errors.password} />
        </div>
        <div>
          <TextInput
            label="Konfirmasi Password"
            id="passwordConfirm"
            type="password"
            placeholder="Konfirmasi Password"
            isPassword={true}
            {...register("passwordConfirm")}
          />
          <FormErrorMessage error={errors.passwordConfirm} />
        </div>
        <div className="mt-3 flex justify-end gap-2">
          <Button
            type="button"
            onClick={onBack}
            className="border border-emerald-500 bg-transparent text-black hover:bg-emerald-500 hover:text-white focus:outline-emerald-500"
          >
            Kembali
          </Button>
          <Button type="submit">Daftar</Button>
        </div>
      </form>
    </div>
  );
}
