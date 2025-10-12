import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ibrahim El Khansa - Portfolio",
  description: "Automation & Development Engineer with a Computer Science Engineering degree from AUB and minor in Economics. Specializing in process automation, workflow optimization, and full-stack development. Focused on building practical solutions that solve real-world problems and drive business efficiency.",
  openGraph: {
    title: "Ibrahim El Khansa - Portfolio",
    description: "Automation & Development Engineer with a Computer Science Engineering degree from AUB and minor in Economics. Specializing in process automation, workflow optimization, and full-stack development. Focused on building practical solutions that solve real-world problems and drive business efficiency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim El Khansa - Portfolio",
    description: "Automation & Development Engineer with a Computer Science Engineering degree from AUB and minor in Economics. Specializing in process automation, workflow optimization, and full-stack development. Focused on building practical solutions that solve real-world problems and drive business efficiency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
