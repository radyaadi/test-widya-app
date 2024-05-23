import EditProductForm from "@/components/molecules/form/EditProductForm";
import { getProduct } from "@/libs/actions/fetch";
import useCookies from "@/libs/hooks/use-cookies";
import { ProductProps } from "@/libs/interface";
import React from "react";

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
