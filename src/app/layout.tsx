import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer Portfolio",
  description: "Professional portfolio showcasing my skills in web development, featuring React, Next.js, Node.js projects and more.",
  keywords: ["portfolio", "web developer", "full stack", "react", "nextjs", "nodejs", "javascript", "typescript"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing my skills in web development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing my skills in web development",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
