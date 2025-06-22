"use client";

import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>{children}</main>
      <Toaster richColors />
    </ThemeProvider>
  );
};

export default Providers;
