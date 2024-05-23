import ProductItem from "@/components/atoms/item/ProductItem";
import { ProductProps } from "@/libs/interface";

export default function ProductList({
  products,
  token,
}: {
  products: ProductProps[];
  token: string;
}) {
  return (
    <div className="relative overflow-x-auto rounded-sm shadow">
      {!products.length ? (
        <p className="w-full p-10 text-center">
          Belum ada produk yang tersedia.
        </p>
      ) : (
        <table className="w-full text-left text-sm text-black">
          <thead className="bg-emerald-600 text-xs uppercase text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Kategory
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Entry
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductItem key={index} {...product} token={token} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
