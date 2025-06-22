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
	return [];
}

export const dynamicParams = true;
