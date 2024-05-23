import { cn } from "@/utils/tw-merge";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white duration-150 ease-in-out hover:bg-emerald-800 focus:outline-sky-700",
        className,
      )}
    >
      {children}
    </button>
  );
}
