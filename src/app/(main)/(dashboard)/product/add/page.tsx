import AddProductForm from "@/components/molecules/form/AddProductForm";
import useCookies from "@/libs/hooks/use-cookies";

export default function AddProductPage() {
  const { token, userId } = useCookies();
  return (
    <section className="p-6 pt-12 lg:px-10">
      <AddProductForm token={token} author={userId} />
    </section>
  );
}
