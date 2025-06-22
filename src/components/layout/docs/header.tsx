import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import Breadcrumber from "./breadcrumber";
import { ThemeToggle } from "@/components/utils/theme-toggle";

const Header = () => {
	return (
		<header className="px-4 py-2 border-b fixed top-0 w-full dashed bg-background/80 backdrop-blur-sm flex items-center gap-4 justify-between z-50">
			<div className="flex items-center gap-4">
				<SidebarTrigger className="md:hidden" />
				<Breadcrumber />
			</div>
			<ThemeToggle />
		</header>
	);
};

export default Header;
