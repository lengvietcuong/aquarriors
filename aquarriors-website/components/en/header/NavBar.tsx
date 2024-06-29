"use client";

import { ReactNode } from "react";
import {
  IoMenu as HamburgerMenuIcon,
  IoClose as CloseIcon,
} from "react-icons/io5";
import useSidebarStore from "@/stores/sidebarStore";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [state.isSidebarOpen, state.setIsSidebarOpen]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="z-30 ml-auto lg:hidden"
      >
        {isSidebarOpen ? (
          <CloseIcon className="size-8" />
        ) : (
          <HamburgerMenuIcon className="size-8" />
        )}
      </Button>
      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-85" : "pointer-events-none opacity-0"
        } lg:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 z-20 h-full w-3/4 transform bg-background transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        } p-8 flex flex-col gap-8 lg:static lg:flex-row-reverse lg:items-center xl:gap-16 lg:bg-transparent lg:p-0 lg:flex-1`}
      >
        {children}
      </div>
    </>
  );
}
