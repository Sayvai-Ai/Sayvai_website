import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Call Solutions | VoIP & Communication Services | Sayvai",
  description: "Transform your business communication with reliable VoIP phone call solutions. Experience crystal-clear voice quality, advanced features, and cost-effective communication services.",
  keywords: "phone call solutions, VoIP, business communication, voice over IP, telecommunication services, call solutions",
  openGraph: {
    title: "Phone Call Solutions | VoIP & Communication Services",
    description: "Enhance your business communication with our reliable phone call solutions and VoIP services.",
    type: "website",
  },
};

export default function PhoneCallSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
