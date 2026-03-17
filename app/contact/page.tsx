import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sayvai - Get in Touch for AI Solutions | Support & Inquiries",
  description: "Ready to transform your business with AI? Contact Sayvai for inquiries, support, or to discuss your AI solution needs. We're here to help you succeed.",
  keywords: "contact Sayvai, AI solutions support, business inquiries, AI consultation, customer support",
  openGraph: {
    title: "Contact Sayvai - Let's Discuss Your AI Solution",
    description: "Get in touch with Sayvai for AI-powered business solutions. We're ready to help transform your operations.",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We&apos;re here to help with any questions or support you need. Reach out to us for inquiries, feedback, or assistance, and we&apos;ll get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
