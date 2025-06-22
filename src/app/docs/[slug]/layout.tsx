export default function MdxLayout({ children }: { children: React.ReactNode }) {
	// Create any shared layout or styles here
	return (
		<div className="container mx-auto max-w-7xl my-20 px-4 space-y-8 prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-invert">
			{children}
		</div>
	);
}
