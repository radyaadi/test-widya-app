import Link from "next/link";
import { cn } from "@/utils/tw-merge";
import { ClipboardCheck } from "lucide-react";

export default function TempLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-md flex w-fit items-center gap-x-1 font-bold text-emerald-500",
        className,
      )}
    >
      <ClipboardCheck size={24} strokeWidth={2.6} />
      <p>KnowledgeTest</p>
    </Link>
  );
}
