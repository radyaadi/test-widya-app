"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/tw-merge";
import Button from "@/components/atoms/button/Button";
import { LucideProps } from "lucide-react";

interface DropDownProviderProps {
  label: string;
  triggerStyle?: string;
  triggerIcon?: React.ElementType<LucideProps>;
  position?: string;
  children: React.ReactNode;
}

export default function DropDownProvider({
  label,
  triggerStyle,
  triggerIcon: IconComponent,
  position,
  children,
}: DropDownProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const dropPosition = (() => {
    switch (position) {
      case "left":
        return "left-0";
      case "right":
        return "right-0";
      default:
        return "left-0";
    }
  })();

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        type="button"
        className={cn(
          "inline-flex items-center gap-x-1 border border-black bg-white text-black hover:bg-black/80 hover:text-white focus:outline-black",
          triggerStyle,
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        {label}
        {IconComponent && (
          <div className="pointer-events-none">
            <IconComponent
              size={18}
              strokeWidth={1.8}
              className={`${isOpen && "rotate-180"}`}
            />
          </div>
        )}
      </Button>
      {isOpen && (
        <div
          className={cn(
            "absolute mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            dropPosition,
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
