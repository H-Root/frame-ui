"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const Breadcrumber = () => {
  const pathName = usePathname();

  const routes = pathName.split("/").filter((i) => i.trim().length !== 0);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {routes.map((route, i) => (
            <Fragment key={i}>
              <BreadcrumbSeparator key={`separator-${i}`}>
                <Slash className="h-3 w-3" />
              </BreadcrumbSeparator>
              {i === routes.length ? (
                <BreadcrumbItem key={`page-${i}`}>
                  <BreadcrumbPage className="capitalize">
                    {route}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem key={`link-${i}`}>
                  <BreadcrumbLink
                    className="capitalize"
                    href={`/${routes.slice(0, i + 1).join("/")}`}
                  >
                    {route.split("-").join(" ")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumber;
