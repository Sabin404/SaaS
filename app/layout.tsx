import type { Metadata } from "next";

import "./globals.css";
import { Google_Sans_Flex, Google_Sans } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});
const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});
export const metadata: Metadata = {
  title: "Landing Page",
  description: "YHH IT Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={` ${googleSansFlex.className}  ${googleSans.variable}   antialiased overflow-x-hidden  `}
      >
        <header className="sticky top-0 z-50 w-full bg-white">
          <Navbar />
        </header>
        {children}
        <footer className="bg-[#14162F] ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
