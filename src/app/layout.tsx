import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ukrautomation.com"),
  title: "UKR Automation | AI UGC Video Creation for Businesses",
  description:
    "UKR Automation creates AI-powered UGC videos and marketing content for businesses across jewellery, fitness, fashion, beauty, food and more.",
  keywords:
    "UKR Automation, AI UGC, UGC video creation, AI video agency, short-form video ads, Instagram Reels, TikTok UGC, jewellery UGC, fitness UGC, fashion UGC, beauty UGC, creator video production",
  openGraph: {
    title: "UKR Automation | AI UGC Video Creation for Businesses",
    description:
      "Create scroll-stopping UGC-style videos for your products, services and brand using AI — without traditional production overhead.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Logo.jpeg",
        width: 400,
        height: 400,
        alt: "UKR Automation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKR Automation | AI UGC Video Creation for Businesses",
    description:
      "Create scroll-stopping UGC-style videos for your products, services and brand using AI — without traditional production overhead.",
    images: ["/Logo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/Logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
