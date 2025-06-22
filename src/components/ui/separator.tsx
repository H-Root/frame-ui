"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const separatorVariants = cva("shrink-0", {
	variants: {
		orientation: {
			horizontal: "w-full h-px border-t",
			vertical: "h-full w-px border-l",
		},
		variant: {
			solid: "border-solid",
			dashed: "border-dashed",
		},
	},
	defaultVariants: {
		variant: "dashed",
		orientation: "horizontal",
	},
});

export interface SeparatorProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof separatorVariants> {
	asChild?: boolean;
}

function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
	variant,
	...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & SeparatorProps) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={cn(separatorVariants({ variant, orientation }), className)}
			{...props}
		/>
	);
}

export { Separator };
