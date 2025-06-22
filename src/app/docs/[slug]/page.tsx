import { readdirSync } from "fs";
import path from "path";

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const { default: Doc } = await import(`@/docs/${slug}.mdx`);

	return <Doc />;
}

export function generateStaticParams() {
	const docsPath = path.join(process.cwd(), "src", "docs");
	const files = readdirSync(docsPath);

	return files.map((file) => ({
		slug: file.split(".")[0],
	}));
}

export const dynamicParams = false;
