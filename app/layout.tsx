import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yap — 12 AI Agents. 1 Mission. 0 Mercy.",
  description: "Your mom, your ex, and 10 more vs. your to-do list. The productivity app that guilt-trips you into getting things done.",
  openGraph: {
    title: "Yap — 12 AI Agents. 1 Mission. 0 Mercy.",
    description: "Your mom, your ex, and 10 more vs. your to-do list.",
    url: "https://yap.fail",
    siteName: "Yap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yap — 12 AI Agents. 1 Mission. 0 Mercy.",
    description: "Your mom, your ex, and 10 more vs. your to-do list.",
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
