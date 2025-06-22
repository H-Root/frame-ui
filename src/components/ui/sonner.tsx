"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster group font-family-mono!"
			style={
				{
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
				} as React.CSSProperties
			}
			toastOptions={{
				classNames: {
					toast: "border-dashed! border! rounded-none! items-start!",
					actionButton: "rounded-none!",
					icon: "leading-1.5! flex! items-center! justify-center! size-5! m-0!",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
