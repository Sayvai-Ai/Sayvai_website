import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Solutions | Tailored Artificial Intelligence | Sayvai",
  description: "Design and build end-to-end AI solutions tailored to your workflows, tools, and data. Custom artificial intelligence solutions for your unique business needs.",
  keywords: "custom AI solutions, artificial intelligence development, tailored AI, AI consulting, bespoke AI, AI implementation",
  openGraph: {
    title: "Custom AI Solutions | Tailored Artificial Intelligence",
    description: "Get custom AI solutions designed specifically for your business needs and workflows.",
    type: "website",
  },
};

export default function CustomAISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
