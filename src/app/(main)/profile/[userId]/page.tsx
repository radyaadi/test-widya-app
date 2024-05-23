import EditProductForm from "@/components/molecules/form/EditProductForm";
import EditProfileForm from "@/components/molecules/form/EditProfileForm";
import { getUser } from "@/libs/actions/fetch";
import useCookies from "@/libs/hooks/use-cookies";
import { ProductProps, UserProps } from "@/libs/interface";
import React from "react";

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
