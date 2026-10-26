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
  title: "UKR Automation | AI UGC Video Creation & AI Automation Solutions",
  description:
    "We help businesses create realistic AI UGC videos that promote their products and services, while automating repetitive tasks to save time and respond faster.",
  keywords:
    "UKR Automation, AI UGC, UGC video creation, AI automation, WhatsApp enquiry automation, lead automation, AI video agency, short-form video ads, Instagram Reels, business workflows",
  openGraph: {
    title: "UKR Automation | AI UGC Video Creation & AI Automation Solutions",
    description:
      "We help businesses create realistic AI UGC videos that promote their products and services, while automating repetitive tasks to save time and respond faster.",
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
    title: "UKR Automation | AI UGC Video Creation & AI Automation Solutions",
    description:
      "We help businesses create realistic AI UGC videos that promote their products and services, while automating repetitive tasks to save time and respond faster.",
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
