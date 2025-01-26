import type { Metadata } from "next";
import "./globals.css";
import LineGrid from "@/components/custom/line-grid";
import Navigation from "@/components/custom/navigation";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Inspirational UI/UX",
  description:
    "This is a collection of UI/UX I try to learn new and treading UIs",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} bg-[#161616] text-white antialiased`}
      >
        <LineGrid />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
