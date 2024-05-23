"use client";

import TextInput from "@/components/atoms/input/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import FormErrorMessage from "@/components/atoms/message/FormErrorMessage";
import Button from "@/components/atoms/button/Button";
import { UserProps } from "@/libs/interface";
import SelectInput from "@/components/atoms/input/SelectInput";
import { editProfileSchema } from "@/libs/schemas/editProfile.schema";

interface EditProfileFormProps extends UserProps {
  token: string;
}

export default function EditProfileForm({
  _id,
  email,
  gender,
  name,
  token,
}: EditProfileFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProfileSchema),
  });
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`http://localhost:5001/user/${_id}`, {
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
            label="Email"
            id="email"
            type="email"
            defaultValue={email}
            disabled={true}
            {...register("email")}
          />
        </div>
        <div>
          <TextInput
            label="Nama"
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
              label="Jenis Kelamin"
              id="gender"
              defaultValue={gender}
              options={[
                { item: "Pria", value: "pria" },
                { item: "Wanita", value: "wanita" },
              ]}
              register={register}
              {...register("gender")}
            />
          </div>
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
