import LegalCompliance from "@/components/Solutions/Legal&Compliance/Legal&Compliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Compliance | Sayvai",
  description: "AI-driven Legal & Compliance solutions by Sayvai: automation, risk assessment, and regulatory compliance.",
};

const LegalCompliancePage = () => {
  return (
    <>
      <LegalCompliance />
    </>
  );
};

export default LegalCompliancePage;
