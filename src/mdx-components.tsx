import { Button } from "@/components/ui/button";
import { cn } from "./lib/utils";
import { slugify } from "./utils/slugify";

export const mdxComponents = {
  Button,
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm",
          className,
        )}
        {...props}
      />
    </div>
  ),
  h1: ({ className, children, ...props }: React.ComponentProps<"h1">) => (
    <h1 className={cn("relative", className)} {...props}>
      <a
        href={`#${slugify(children?.toString())}`}
        id={`${slugify(children?.toString())}`}
        referrerPolicy="no-referrer"
        className="scroll-m-16 no-underline before:absolute before:-left-7 hover:underline md:hover:before:content-['#']"
      >
        {children}
      </a>
    </h1>
  ),
  h2: ({ className, children, ...props }: React.ComponentProps<"h2">) => (
    <h2 className={cn("relative", className)} {...props}>
      <a
        href={`#${slugify(children?.toString())}`}
        id={`${slugify(children?.toString())}`}
        className="scroll-m-16 no-underline before:absolute before:-left-5 hover:underline md:hover:before:content-['#']"
      >
        {children}
      </a>
    </h2>
  ),
  h3: ({ className, children, ...props }: React.ComponentProps<"h3">) => (
    <h3 className={cn("relative", className)} {...props}>
      <a
        href={`#${slugify(children?.toString())}`}
        id={`${slugify(children?.toString())}`}
        className="scroll-m-16 no-underline before:absolute before:-left-5 hover:underline md:hover:before:content-['#']"
      >
        {children}
      </a>
    </h3>
  ),
  h4: ({ className, children, ...props }: React.ComponentProps<"h4">) => (
    <h4 className={cn("relative", className)} {...props}>
      <a
        href={`#${slugify(children?.toString())}`}
        id={`${slugify(children?.toString())}`}
        className="scroll-m-16 no-underline before:absolute before:-left-4 hover:underline md:hover:before:content-['#']"
      >
        {children}
      </a>
    </h4>
  ),
  h5: ({ className, children, ...props }: React.ComponentProps<"h5">) => (
    <h5 className={cn("relative", className)} {...props}>
      <a
        href={`#${slugify(children?.toString())}`}
        id={`${slugify(children?.toString())}`}
        className="scroll-m-16 no-underline before:absolute before:-left-3 hover:underline md:hover:before:content-['#']"
      >
        {children}
      </a>
    </h5>
  ),
  h6: ({ className, children, ...props }: React.ComponentProps<"h6">) => (
    <h6 className={cn("relative", className)} {...props}>
      <a
        href={`#${slugify(children?.toString())}`}
        id={`${slugify(children?.toString())}`}
        className="scroll-m-16 no-underline before:absolute before:-left-3 hover:underline md:hover:before:content-['#']"
      >
        {children}
      </a>
    </h6>
  ),
};
