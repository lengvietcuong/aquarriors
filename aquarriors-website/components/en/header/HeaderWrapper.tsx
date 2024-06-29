"use client";

import { useState, useEffect, ReactNode } from "react";

interface HeaderWrapperProps {
  children: ReactNode;
}

function HeaderWrapper({ children }: HeaderWrapperProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 z-10 px-3 py-2 transition-colors duration-300 lg:px-12 xl:px-36 lg:py-4 ${scrolled ? "bg-background shadow-md dark:border-b" : "bg-transparent"}`}
    >
      <div className="flex items-center max-w-screen-2xl mx-auto">
        {children}
      </div>
    </header>
  );
}

export default HeaderWrapper;