import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import Link from "next/link";
import { StatsSection } from "@/components/layout/about-us/stats-section";
import { ServicesSection } from "@/components/layout/about-us/services-section";
import { SloganSection } from "@/components/layout/about-us/slogan-section";

export default function AboutUsPage() {
  return (
    <div>
      <div className="px-5 lg:bg-accent">
        <div className="space-y-5 py-10 lg:container mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-secondary font-medium">
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-secondary/80 font-medium">
                  About Us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-bold text-4xl md:text-5xl text-secondary">
            About Us
          </h1>
        </div>
      </div>

      <StatsSection />
      <ServicesSection />
      <SloganSection />
    </div>
  );
}
