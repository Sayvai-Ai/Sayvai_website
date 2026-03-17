

import Financeaccount from "@/components/Solutions/Finance&Accounts/Finance&Accounts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions for Finance & Accounting | Retail Automation | Sayvai",
  description: "Streamline financial operations with AI-powered solutions for retail and e-commerce. Automate accounting, improve accuracy, and boost profitability with intelligent financial tools.",
  keywords: "finance AI, accounting automation, retail finance, financial technology, AI accounting, business finance solutions",
  openGraph: {
    title: "AI Solutions for Finance & Accounting | Retail Automation",
    description: "Transform your financial operations with AI-powered automation for retail and accounting processes.",
    type: "website",
  },
};

const Finance = () => {
  return (
    <>
     <Financeaccount />
    </>
  );
};

export default Finance;
