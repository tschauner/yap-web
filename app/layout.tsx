import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yap — Your Personal Nagging Agency",
  description: "Pick an agent. Set a mission. Get nagged until it's done. The motivation app that won't shut up.",
  openGraph: {
    title: "Yap — Your Personal Nagging Agency",
    description: "Pick an agent. Set a mission. Get nagged until it's done.",
    url: "https://yap.fail",
    siteName: "Yap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yap — Your Personal Nagging Agency",
    description: "Pick an agent. Set a mission. Get nagged until it's done.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
