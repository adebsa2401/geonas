import { Separator } from "@workspace/ui/components/separator";
import { FaRulerCombined, FaSearchDollar } from "react-icons/fa";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="lg:py-20">
      <div className="grid lg:grid-cols-2 gap-x-40 container mx-auto">
        <div className="max-lg:hidden relative bg-[url(/images/bg-about-us.png)] bg-contain bg-no-repeat bg-top-left size-full">
          <div className="absolute bottom-0 right-0 p-8 space-y-5 bg-secondary max-w-xs translate-x-20">
            <p className="font-medium text-xl leading-7 text-secondary-foreground">
              34 years of successful land surveying and mapping projects in the
              greater Boise County region.
            </p>
            <div className="flex items-center gap-3">
              <div className="relative size-12 rounded-full">
                <Image fill src="/images/avatar-1.png" alt="Avatar" />
              </div>
              <div>
                <p className="font-medium text-secondary-foreground">
                  John Dahlio
                </p>
                <p className="text-sm text-secondary-foreground/80">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 p-5 py-20">
          <h2 className="font-bold text-3xl max-w-2xs text-secondary">
            About our organization, mission, our methods, and the range of
            services.
          </h2>
          <div className="h-0.5 bg-primary w-24" />
          <p className="text-lg leading-relaxed text-secondary font-medium">
            One way to check your property lines is to look at the deed of the
            property. As a legal document about your property, the deed should
            have a worded description of your land&apos;s boundaries.
          </p>
          <Separator />

          <div className="flex gap-8 max-md:flex-col">
            <div className="space-y-3">
              <FaRulerCombined className="text-primary shrink-0 size-10" />
              <h4 className="text-secondary font-medium">
                Precise Land Surveying
              </h4>
              <p className="text-secondary/80 leading-6">
                We approach every project with a focus on exceeding the client’s
                needs.
              </p>
            </div>

            <div className="space-y-3">
              <FaSearchDollar className="text-primary shrink-0 size-10" />
              <h4 className="text-secondary font-medium">
                Affordable & Accurate
              </h4>
              <p className="text-secondary/80 leading-6">
                Legal requirements can be tricky and land surveying companies
                can&apos;t keep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsSection };
