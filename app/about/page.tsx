import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import History from "@/components/About/History";
import Culture from "@/components/About/Culture";
import Corevalue from "@/components/About/Corevalue";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import AnimatedSection from "@/components/About/AnimatedSection";

export const metadata: Metadata = {
  title: "About Sayvai - AI Innovation with Human Connection | Our Story",
  description: "Learn about Sayvai's mission to make AI accessible and valuable. We're committed to helping businesses embrace the future with AI that enhances human connections and drives innovation.",
  keywords: "about Sayvai, AI company, business AI solutions, AI innovation, human-centered AI, AI transformation",
  openGraph: {
    title: "About Sayvai - AI Innovation with Human Connection",
    description: "Discover Sayvai's commitment to compassionate AI solutions that enhance human connections and drive business growth.",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <>
      <AnimatedSection>
        <Breadcrumb
          pageName="About Page"
          description="At Sayvai, we're committed to helping businesses embrace the future with AI that enhances human connections. We make AI accessible and valuable, enabling businesses to thrive through compassion and innovation."
        />
      </AnimatedSection>
      
      <AnimatedSection>
        <AboutSectionOne />
      </AnimatedSection>
      
      <AnimatedSection>
        <AboutSectionTwo />
      </AnimatedSection>
      
      <AnimatedSection>
        <History />
      </AnimatedSection>
      
      <AnimatedSection>
        <Culture />
      </AnimatedSection>
      
      <AnimatedSection>
        <Corevalue />
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
