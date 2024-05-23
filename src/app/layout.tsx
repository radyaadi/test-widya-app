import { cn } from "@/utils/tw-merge";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowledge Test Fullstack Engineer PT WIN",
  description: "Knowledge test for fullstack engineer position at PT WIN",
  keywords: ["knowledge test", "fullstack engineer", "pt win"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background flex min-h-screen flex-col font-sans antialiased",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
