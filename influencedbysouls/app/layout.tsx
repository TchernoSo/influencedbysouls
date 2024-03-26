import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/Stareffect";
import Navbar from "@/components/main/Navbar";
import Products from "@/components/main/Products";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfluencedbySouls",
  description: "My Brand Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Navbar/>
       
        {children}
        </body>
    </html>
  );
}
