import { HomeBanner } from "@/components/layout/home-banner";
import { ServicesSection } from "@/components/layout/services-section";
import { SloganSection } from "@/components/layout/slogan-section";

export default function Page() {
  return (
    <div>
      <HomeBanner />
      <ServicesSection />
      <SloganSection />
    </div>
  );
}
