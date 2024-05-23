import TempLogo from "@/components/atoms/logo/TempLogo";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed left-0 top-0 z-10 w-full p-5 lg:px-10">
        <TempLogo />
      </header>
      <main className="relative grow bg-slate-50">{children}</main>
    </>
  );
}
