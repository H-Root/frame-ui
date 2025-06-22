import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/context/providers";
import { Header } from "@/components/layout/home/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
