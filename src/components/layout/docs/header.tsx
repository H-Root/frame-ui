import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { ThemeToggle } from "@/components/utils/theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="dashed bg-background/80 fixed top-0 z-50 flex w-full items-center justify-between gap-4 border-b px-4 py-2 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <Link href="/" className="font-mono text-xl font-bold">
          [FRAME UI]
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
