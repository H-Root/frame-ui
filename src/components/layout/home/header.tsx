import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "@/components/utils/theme-toggle";

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b border-dashed backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-mono text-xl font-bold">
            [FRAME UI]
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="hover:text-muted-foreground font-mono text-sm transition-colors"
            >
              HOME
            </Link>

            <Link
              href="/colors"
              className="hover:text-muted-foreground font-mono text-sm transition-colors"
            >
              COLORS
            </Link>

            <Link
              href="/docs"
              className="hover:text-muted-foreground font-mono text-sm transition-colors"
            >
              DOCS
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <MobileMenu />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
