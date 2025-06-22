import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dashed py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground font-mono text-sm">
            © 2025 LOFI. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center space-x-8 font-mono text-sm">
            <span>BUILT WITH NEXT.JS</span>
            <span>DEPLOYED ON VERCEL</span>
            <Link
              href={"/"}
              className="text-muted-foreground hover:text-foreground underline transition-colors"
            >
              BACK TO TOP
            </Link>
          </div>

          <div className="text-muted-foreground hover:text-foreground font-mono transition-colors">
            Created With Love By{" "}
            <Link href="https://hroot.me?src=frame ui" target="_blank">
              HRoot
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
