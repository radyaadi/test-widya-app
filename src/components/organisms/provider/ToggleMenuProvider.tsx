"use client";

import { useMediaQuery } from "@/libs/hooks/use-media-query";
import { createContext, useContext, useEffect, useState } from "react";

interface ToggleNavContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const ToggleNavContext = createContext<ToggleNavContextType | undefined>(
  undefined,
);

export const useToggleNavContext = () => {
  const context = useContext(ToggleNavContext);
  if (!context) {
    throw new Error(
      "useToggleNavContext must be used within a ToggleNavProvider",
    );
  }
  return context;
};

export function ToggleNavProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    isDesktop ? setIsMenuOpen(true) : setIsMenuOpen(false);
  }, [isDesktop]);

  const toggleMenu = () => {
    isDesktop ? setIsMenuOpen((prevState) => !prevState) : setIsMenuOpen(false);
  };

  return (
    <ToggleNavContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </ToggleNavContext.Provider>
  );
}
