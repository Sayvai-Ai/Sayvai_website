"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "./head";
import { Inter } from "next/font/google";
import "react-modal-video/css/modal-video.css";
import "../styles/index.css";
import 'react-phone-input-2/lib/style.css'; // Import react-phone-input-2 styles here
import '../styles/index.css'; // Import your global styles here

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />

          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
