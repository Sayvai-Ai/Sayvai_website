

import SalesSupport from "@/components/Solutions/Sales&Support/Sales&Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions for Sales & Customer Support | Automation & Optimization | Sayvai",
  description: "Enhance customer satisfaction and drive revenue growth with AI-powered sales and support solutions. Optimize your sales process and customer service with intelligent automation.",
  keywords: "sales AI, customer support automation, sales optimization, customer service AI, sales automation, support solutions",
  openGraph: {
    title: "AI Solutions for Sales & Customer Support | Automation",
    description: "Transform your sales and customer support with AI-powered automation and intelligent solutions.",
    type: "website",
  },
};

const Finance = () => {
  return (
    <>
     <SalesSupport />
    </>
  );
};

export default Finance;
