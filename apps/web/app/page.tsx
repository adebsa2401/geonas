import { HomeBanner } from "@/components/layout/home-banner";
import { ServicesSection } from "@/components/layout/services-section";
import { SloganSection } from "@/components/layout/slogan-section";
import { StatsSection } from "@/components/layout/stats-section";

export default function Page() {
  return (
    <div>
      <HomeBanner />
      <ServicesSection />
      <SloganSection />
      <StatsSection />
    </div>
  );
}
