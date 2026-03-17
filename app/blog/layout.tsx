import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Insights & Industry Trends | Sayvai Blog",
  description: "Stay updated with the latest AI trends, industry insights, and business transformation strategies. Read expert articles on AI automation, digital marketing, and innovative solutions.",
  keywords: "AI blog, artificial intelligence trends, business automation, AI insights, digital transformation, industry trends",
  openGraph: {
    title: "AI Insights & Industry Trends | Sayvai Blog",
    description: "Discover the latest in AI technology, business automation, and digital transformation strategies.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
