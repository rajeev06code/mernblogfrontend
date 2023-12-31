import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import HomeSlider from "@/components/homeslider/HomeSlider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mern Blog",
  description: "Express what you have in your mind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
