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
import { Fragment } from "react";

export function AppSidebar() {
  const pages = mapSidebarLinks();

  return (
    <Sidebar
      variant="inset"
      className="top-[52.8px] md:h-[calc(100dvh-52.8px)]"
    >
      <SidebarContent className="px-4 py-2">
        <SidebarGroup className="p-0">
          {pages.map((page) => (
            <Fragment key={`folder-${page.folder}`}>
              <SidebarGroupLabel>
                {page.folder.split("-").join(" ")}
              </SidebarGroupLabel>
              <SidebarGroupContent className="px-2">
                <SidebarMenu>
                  {page.files.length > 0 ? (
                    page.files.map((page) => (
                      <SidebarMenuItem className="rounded-0!" key={page.slug}>
                        <SidebarMenuButton asChild>
                          <Link href={`/docs/${page.slug}`}>
                            <span>{page.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                  ) : (
                    <SidebarMenuItem className="rounded-0!">
                      <SidebarMenuButton>Coming Soon</SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </Fragment>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
