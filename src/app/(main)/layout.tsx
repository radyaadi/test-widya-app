import MainHeaderContainer from "@/components/organisms/container/MainHeaderContainer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky left-0 top-0 z-10 w-full border bg-white">
        <MainHeaderContainer />
      </header>
      <main className="relative grow bg-slate-50">{children}</main>
    </>
  );
}
