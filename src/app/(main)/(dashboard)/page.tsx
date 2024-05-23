import ProductContainer from "@/components/organisms/container/ProductContainer";
import { getProducts } from "@/libs/actions/fetch";
import useCookies from "@/libs/hooks/use-cookies";

export default async function HomePage() {
  const { token } = useCookies();
  const products = await getProducts(token);

  return (
    <section className="p-6 pt-12 lg:px-10">
      <ProductContainer products={products} token={token} />
    </section>
  );
}
