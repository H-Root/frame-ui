import { Footer } from "@/components/layout/home/footer";
import { Header } from "@/components/layout/home/header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
