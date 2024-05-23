"use client";

import { ProductProps } from "@/libs/interface";
import { formatDate } from "@/utils/helper/date-time-formatter";
import Link from "next/link";

interface ProductItemProps extends ProductProps {
  token: string;
}

export default function ProductItem({
  _id,
  author,
  name,
  category,
  quantity,
  created_at,
  token,
}: ProductItemProps) {
  const onDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5001/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <tr className="border-b odd:bg-zinc-50 even:bg-zinc-100">
      <th scope="row" className="px-6 py-4 font-medium ">
        {name}
      </th>
      <td className="px-6 py-4 capitalize">{category}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{formatDate(created_at)}</td>
      <td className="px-6 py-4">{author.name}</td>
      <td className="inline-flex gap-x-3 px-6 py-4">
        <Link
          href={`product/edit/${_id}`}
          className="text-sm font-medium leading-none text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(_id)}
          className="text-sm font-medium leading-none text-red-600 hover:underline"
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}
