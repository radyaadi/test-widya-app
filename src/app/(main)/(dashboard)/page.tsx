import ProductContainer from "@/components/organisms/container/ProductContainer";
import useCookies from "@/libs/hooks/use-cookies";

export async function getProducts(token: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (response.ok) {
    return result.payload;
  } else {
    console.log(result.message);
  }
}

export default async function HomePage() {
  const { token } = useCookies();
  const products = await getProducts(token);

  return (
    <section className="p-6 pt-12 lg:px-10">
      <ProductContainer products={products} token={token} />
    </section>
  );
}
