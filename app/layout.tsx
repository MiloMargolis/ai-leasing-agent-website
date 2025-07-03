import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HouseFly AI",
  description:
    "Automated lead management and follow-up for real estate agents.",
  icons: {
    icon: "Logo.png",
  },
  openGraph: {
    title: "HouseFly AI",
    description: "Automated lead management and follow-up for real estate agents.",
    url: "https://housefly.ai/",
    siteName: "HouseFly AI",
    images: [
      {
        url: "/Logo.png",
        width: 400,
        height: 400,
        alt: "HouseFly AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HouseFly AI",
    description: "Automated lead management and follow-up for real estate agents.",
    images: ["/Logo.png"],
    site: "@houseflyai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://housefly.ai/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO meta tags */}
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
