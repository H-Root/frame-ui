import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { readdirSync } from "fs";
import Link from "next/link";
import path from "path";

export function AppSidebar() {
	const docsPath = path.join(process.cwd(), "src", "docs");
	const files = readdirSync(docsPath);

	const pages = files.map((file) => {
		const page = file.split(".")[0]!;

		return {
			title: page
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" "),
			url: page,
		};
	});

	return (
		<Sidebar
			variant="inset"
			className="md:h-[calc(100dvh-52.8px)] top-[52.8px]"
		>
			<SidebarContent className="px-4 py-2">
				<SidebarGroup className="p-0">
					<SidebarGroupLabel>Extensions</SidebarGroupLabel>
					<SidebarGroupContent className="px-2">
						<SidebarMenu>
							<SidebarMenuItem className="rounded-0!">
								<SidebarMenuButton asChild>
									<Link href={`/extensions/modal-manager-v2`}>
										Modal Manager
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarGroupLabel>Hooks</SidebarGroupLabel>
					<SidebarGroupContent className="px-2">
						<SidebarMenu>
							<SidebarMenuItem className="rounded-0!">
								<SidebarMenuButton>Coming Soon</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarGroupLabel>Components</SidebarGroupLabel>
					<SidebarGroupContent className="px-2">
						<SidebarMenu>
							{pages.map((page) => (
								<SidebarMenuItem className="rounded-0!" key={page.title}>
									<SidebarMenuButton asChild>
										<Link href={`/docs/${page.url}`}>
											<span>{page.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
