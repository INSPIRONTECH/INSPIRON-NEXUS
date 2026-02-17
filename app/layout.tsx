import type { Metadata } from "next";
import "./globals.css";
import { GlobalHeader } from "@/components/Navigation/GlobalHeader";

export const metadata: Metadata = {
    title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
    description: "We set up, customize, and support Manager.io for businesses across Bangladesh. 15+ years experience. Aquaculture, manufacturing, construction, healthcare, and more. Free consultation available.",
    keywords: "Manager.io, Bangladesh, cloud accounting, Manager.io partner, accounting software, Dhaka, INSPIRON TECH, business automation, VAT compliance",
    openGraph: {
        title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
        description: "Cloud accounting setup, customization, training, and ongoing support for businesses across Bangladesh.",
        type: "website",
        locale: "en_BD",
        siteName: "INSPIRON TECH",
    },
    twitter: {
        card: "summary_large_image",
        title: "INSPIRON TECH | Official Manager.io Partner Bangladesh",
        description: "Cloud accounting setup, customization, training, and ongoing support for businesses across Bangladesh.",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://www.inspiron.tech",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="bg-deep-navy-black font-institutional text-institutional-white" suppressHydrationWarning>
                <GlobalHeader />
                {children}
            </body>
        </html>
    );
}
