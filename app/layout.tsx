import type { Metadata } from "next";

import { Poppins, Space_Mono } from "next/font/google";

import "./globals.css";

import { ScrollToTop } from "@/components/scroll-to-top";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://execut.nl"),

    title: {
        default: "exec(ut) • Student IT Conference",
        template: "%s • exec(ut)",
    },

    description:
        "exec(ut) is the student IT conference in Utrecht, bringing students and industry together for talks, workshops and networking.",

    openGraph: {
        title: "exec(ut) • Student IT Conference",
        description: "The student IT conference in Utrecht, bringing students and industry together for talks, workshops and networking.",
        url: "https://execut.nl",
        siteName: "exec(ut)",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "exec(ut) Student IT Conference",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "exec(ut) • Student IT Conference",
        description: "The student IT conference in Utrecht, bringing students and industry together for talks, workshops and networking.",
        images: ["/og-image.png"],
    },

    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light scroll-smooth">
            <body className={`${poppins.variable} ${spaceMono.variable} antialiased w-screen overflow-x-hidden min-h-full`}>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}