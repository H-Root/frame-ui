import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "@/components/utils/theme-toggle";

export function Header() {
	return (
		<header className="border-b border-dashed bg-background/80 backdrop-blur-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<nav className="flex items-center justify-between">
					<Link href="/" className="text-xl font-mono font-bold">
						[FRAME UI]
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-sm font-mono hover:text-muted-foreground transition-colors"
						>
							HOME
						</Link>

						<Link
							href="/colors"
							className="text-sm font-mono hover:text-muted-foreground transition-colors"
						>
							COLORS
						</Link>

						<Link
							href="/components"
							className="text-sm font-mono hover:text-muted-foreground transition-colors"
						>
							COMPONENTS
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
