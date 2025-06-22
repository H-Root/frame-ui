import { AppSidebar } from "@/components/layout/docs/app-sidebar";
import Header from "@/components/layout/docs/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<Header />
			<SidebarInset className="m-0! grid grid-cols-12">
				<main className="col-span-12">{children}</main>
				{/* <main className="col-span-12 xl:col-span-9">{children}</main> */}
				{/* <DesktopIndex /> */}
			</SidebarInset>
		</SidebarProvider>
	);
};

export default layout;
