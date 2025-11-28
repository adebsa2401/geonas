import type { Metadata } from "next";
import { HomeBanner } from "@/components/layout/home/home-banner";
import { ServicesSection } from "@/components/layout/home/services-section";
import { SloganSection } from "@/components/layout/home/slogan-section";
import { StatsSection } from "@/components/layout/home/stats-section";
import { AboutUsSection } from "@/components/layout/home/about-us-section";
import { PartnersSection } from "@/components/layout/home/partners-section";
import { RecentNewsSection } from "@/components/layout/home/recent-news-section";

export const metadata: Metadata = {
  title: "Professional Land Surveying & Mapping",
  description:
    "Geonas provides surveying solutions for business, real estate, land development and civil engineering in Boise area.",
};

export default function Page() {
  return (
    <div>
      <HomeBanner />
      <ServicesSection />
      <SloganSection />
      <StatsSection />
      <AboutUsSection />
      <PartnersSection />
      <RecentNewsSection />
    </div>
  );
}
