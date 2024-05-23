"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectInput from "@/components/atoms/input/SelectInput";
import TextInput from "@/components/atoms/input/TextInput";
import FormErrorMessage from "@/components/atoms/message/FormErrorMessage";
import Button from "@/components/atoms/button/Button";
import { addProductSchema } from "@/libs/schemas/addProduct.schema";

export default function AddProductForm({
  token,
  author,
}: {
  token: string;
  author: string;
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ author, ...data }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const onBack = () => router.back();

  return (
    <div className="mx-auto w-full max-w-md">
      <h1 className="mb-5 text-2xl font-bold text-emerald-500">
        Tambah Produk
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit as any)}
        className="grid grid-cols-1 gap-4"
      >
        <div>
          <TextInput
            label="Nama Produk"
            id="name"
            type="text"
            placeholder="Masukkan nama product"
            {...register("name")}
          />
          <FormErrorMessage error={errors.name} />
        </div>
        <div>
          <SelectInput
            label="Kategori"
            id="category"
            options={[
              { item: "Smartphone", value: "smartphone" },
              { item: "Desktop", value: "desktop" },
            ]}
            register={register}
            {...register("category")}
          />
        </div>
        <div>
          <TextInput
            label="Jumlah Barang"
            id="quantity"
            type="number"
            placeholder="Masukkan jumlah barang"
            {...register("quantity")}
          />
          <FormErrorMessage error={errors.quantity} />
        </div>

        <div className="mt-3 flex justify-end gap-2">
          <Button
            type="button"
            onClick={onBack}
            className="border border-emerald-500 bg-transparent text-black hover:bg-emerald-500 hover:text-white focus:outline-emerald-500"
          >
            Kembali
          </Button>
          <Button type="submit">Tambah</Button>
        </div>
      </form>
    </div>
  );
}
