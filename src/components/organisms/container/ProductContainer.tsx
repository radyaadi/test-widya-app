"use client";

import Button from "@/components/atoms/button/Button";
import ProductList from "@/components/molecules/list/ProductList";
import { ProductProps } from "@/libs/interface";
import Link from "next/link";

export default function ProductContainer({
  products,
  token,
}: {
  products: ProductProps[];
  token: string;
}) {
  return (
    <>
      <div className="mb-3 flex w-full justify-between">
        <h1 className="text-xl font-bold leading-none text-emerald-500">
          List Produk
        </h1>
        <Link href="/product/add">
          <Button>Tambah</Button>
        </Link>
      </div>
      <ProductList products={products} token={token} />
    </>
  );
}
