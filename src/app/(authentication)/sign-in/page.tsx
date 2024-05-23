import SignInForm from "@/components/molecules/form/SignInForm";

export default function SignInPage() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center p-3">
      <SignInForm />
      <p className="fixed bottom-0 p-5 text-center text-sm text-black">
        Web Apps Test Knowledge Fullstack Engineer PT Widya Informasi Nusantara
        @2024 by Radya Adi Anggara
      </p>
    </section>
  );
}
