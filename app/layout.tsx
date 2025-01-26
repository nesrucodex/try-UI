import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LineGrid from "@/components/custom/line-grid";
import Spotlight from "@/components/custom/spotlight";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inspirational UI/UX",
  description:
    "This is a collection of UI/UX I try to learn new and treading UIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#161616] text-white antialiased`}
      >
        <LineGrid />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
