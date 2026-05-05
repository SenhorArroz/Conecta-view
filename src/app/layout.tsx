import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./_components/providers";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "Conecta-View",
	description: "ProEIDI Conecta gerido mais rapidamente",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
