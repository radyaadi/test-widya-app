import EditProductForm from "@/components/molecules/form/EditProductForm";
import EditProfileForm from "@/components/molecules/form/EditProfileForm";
import useCookies from "@/libs/hooks/use-cookies";
import { ProductProps, UserProps } from "@/libs/interface";
import React from "react";

export async function getUser(userId: string, token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await response.json();

  if (response.ok) {
    return result.payload;
  } else {
    console.log(result.message);
  }
}

export default async function ProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  const { token } = useCookies();
  const user: UserProps = await getUser(params.userId, token);

  return (
    <section className="p-6 pt-12 lg:px-10">
      <EditProfileForm {...user} token={token} />
    </section>
  );
}
