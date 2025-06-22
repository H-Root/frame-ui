import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import Breadcrumber from "./breadcrumber";
import { ThemeToggle } from "@/components/utils/theme-toggle";

const Header = () => {
  return (
    <header className="dashed bg-background/80 fixed top-0 z-50 flex w-full items-center justify-between gap-4 border-b px-4 py-2 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <Breadcrumber />
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
