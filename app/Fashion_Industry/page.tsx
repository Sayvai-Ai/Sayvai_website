

import FashionIndustry from "@/components/Solutions/Fashion_Industry/Fashion_Industry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions for Fashion Industry | AutoCAD Automation | Sayvai",
  description: "Transform your fashion design process with AI-powered AutoCAD automation. Save time, reduce errors, and enhance creativity with intelligent design solutions.",
  keywords: "fashion industry AI, AutoCAD automation, fashion design AI, retail technology, design automation, fashion business solutions",
  openGraph: {
    title: "AI Solutions for Fashion Industry | AutoCAD Automation",
    description: "Revolutionize fashion design with AI-powered AutoCAD automation and intelligent design solutions.",
    type: "website",
  },
};

const Finance = () => {
  return (
    <>
     <FashionIndustry />
    </>
  );
};

export default Finance;
