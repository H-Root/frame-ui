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
import { mapSidebarLinks } from "@/utils/readMdx";
import Link from "next/link";

export function AppSidebar() {
  const pages = mapSidebarLinks("docs");

  return (
    <Sidebar
      variant="inset"
      className="top-[52.8px] md:h-[calc(100dvh-52.8px)]"
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
                <SidebarMenuItem className="rounded-0!" key={page.slug}>
                  <SidebarMenuButton asChild>
                    <Link href={`/docs/${page.slug}`}>
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
