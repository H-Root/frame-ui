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
  const groups = mapSidebarLinks();

  return (
    <Sidebar
      variant="inset"
      className="top-[52.8px] md:h-[calc(100dvh-52.8px)]"
    >
      <SidebarContent className="px-4 py-2">
        <SidebarGroup className="p-0">
          {groups.map((group) => (
            <Fragment key={`folder-${group.folder}`}>
              <SidebarGroupLabel>
                {group.folder.split("-").join(" ")}
              </SidebarGroupLabel>
              <SidebarGroupContent className="px-2">
                <SidebarMenu>
                  {group.files.length > 0 ? (
                    group.files.map((page) => (
                      <SidebarMenuItem className="rounded-0!" key={page.slug}>
                        <SidebarMenuButton asChild>
                          <Link href={`/docs/${group.folder}/${page.slug}`}>
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
