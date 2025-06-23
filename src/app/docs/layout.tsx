import { AppSidebar } from "@/components/layout/docs/app-sidebar";
import Header from "@/components/layout/docs/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Header />
      <SidebarInset className="m-0!">
        <main className="container mx-auto my-20 max-w-7xl space-y-8 px-4 md:px-10">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
