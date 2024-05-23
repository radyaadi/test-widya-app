import EditProductForm from "@/components/molecules/form/EditProductForm";
import useCookies from "@/libs/hooks/use-cookies";
import { ProductProps } from "@/libs/interface";
import React from "react";

export async function getProduct(productId: string, token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`,
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

export default async function EditProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { token } = useCookies();
  const product: ProductProps = await getProduct(params.productId, token);

  return (
    <section className="p-6 pt-12 lg:px-10">
      <EditProductForm {...product} token={token} />
    </section>
  );
}
