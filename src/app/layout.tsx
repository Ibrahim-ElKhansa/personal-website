import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ibrahim El Khansa - Portfolio",
  description: "Hello, my name is Ibrahim El Khansa and this is my portfolio website showcasing my work experiences and what I previously worked on. I have been a full stack developer since 2022 and you can explore my projects like Maqam Network, MusicLeb, Melody Mits, H.A.D.I., Coursis and 3azaw2ak",
  twitter: {
    card: "summary_large_image",
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
      </body>
    </html>
  );
}
