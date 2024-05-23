"use client";

import TextInput from "@/components/atoms/input/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import FormErrorMessage from "@/components/atoms/message/FormErrorMessage";
import Button from "@/components/atoms/button/Button";
import { ProductProps } from "@/libs/interface";
import SelectInput from "@/components/atoms/input/SelectInput";
import { editProductSchema } from "@/libs/schemas/editProduct.schema";

interface EditProductFormProps extends ProductProps {
  token: string;
}

export default function EditProductForm({
  _id,
  author,
  name,
  category,
  quantity,
  token,
}: EditProductFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProductSchema),
  });
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`http://localhost:5001/product/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

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
    <div className="mx-auto w-full max-w-lg">
      <div className="mb-8 border-b-2 pb-2">
        <h1 className=" text-xl font-bold text-emerald-500">Edit Produk</h1>
        <h3 className="text-sm font-medium text-gray-500">{name}</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
      >
        <div>
          <TextInput
            label="Author"
            id="author"
            type="text"
            defaultValue={author.name}
            disabled={true}
            {...register("author")}
          />
        </div>
        <div>
          <TextInput
            label="Nama Produk"
            id="name"
            type="text"
            defaultValue={name}
            {...register("name")}
          />
          <FormErrorMessage error={errors.name} />
        </div>
        <div>
          <div>
            <SelectInput
              label="Kategory"
              id="category"
              defaultValue={category}
              options={[
                { item: "Smartphone", value: "smartphone" },
                { item: "Desktop", value: "desktop" },
              ]}
              register={register}
              {...register("category")}
            />
          </div>
        </div>
        <div>
          <TextInput
            label="Jumlah Barang"
            id="quantity"
            type="number"
            defaultValue={quantity}
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
          <Button type="submit">Edit</Button>
        </div>
      </form>
    </div>
  );
}
