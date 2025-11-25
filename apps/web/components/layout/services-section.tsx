import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="bg-[linear-gradient(310deg,_#FFFFFFEB_0%,_#f6f6f6_100%),url(/images/bg-pattern.png)] bg-cover pt-20 md:pt-32 lg:pt-40 space-y-10">
      <h2 className="px-5 max-w-xl text-3xl md:text-4xl font-bold leading-tight text-secondary">
        Accurate & Precise Land Surveying Services With The Highest Quality.
      </h2>

      <div className="grid md:grid-cols-4 *:border md:*:not-last:border-r-0 gap-y-5 max-md:px-5 max-md:pb-5">
        <div className="space-y-8 bg-card p-5">
          <div className="relative size-16">
            <Image fill src="/images/service-icon-1.png" alt="Service icon" />
          </div>
          <h3 className="font-bold text-secondary/80 text-lg uppercase">
            Real Estate Property Boundaries
          </h3>
          <div className="w-1/2 h-0.5 bg-primary" />
          <p className="text-secondary/80 leading-8">
            A property line map, or a “plat,” is a drawing that maps out your
            property&apos;s boundary lines, and includes details like
            elevations, bodies of water and structures.
          </p>
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform hover:translate-x-0.5 shrink-0 stroke-3 text-primary"
            size={24}
          />
        </div>

        <div className="space-y-8 bg-card p-5">
          <div className="relative size-16">
            <Image fill src="/images/service-icon-1.png" alt="Service icon" />
          </div>
          <h3 className="font-bold text-secondary/80 text-lg uppercase">
            Real Estate Property Boundaries
          </h3>
          <div className="w-1/2 h-0.5 bg-primary" />
          <p className="text-secondary/80 leading-8">
            A property line map, or a “plat,” is a drawing that maps out your
            property&apos;s boundary lines, and includes details like
            elevations, bodies of water and structures.
          </p>
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform hover:translate-x-0.5 shrink-0 stroke-3 text-primary"
            size={24}
          />
        </div>

        <div className="space-y-8 bg-card p-5">
          <div className="relative size-16">
            <Image fill src="/images/service-icon-1.png" alt="Service icon" />
          </div>
          <h3 className="font-bold text-secondary/80 text-lg uppercase">
            Real Estate Property Boundaries
          </h3>
          <div className="w-1/2 h-0.5 bg-primary" />
          <p className="text-secondary/80 leading-8">
            A property line map, or a “plat,” is a drawing that maps out your
            property&apos;s boundary lines, and includes details like
            elevations, bodies of water and structures.
          </p>
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform hover:translate-x-0.5 shrink-0 stroke-3 text-primary"
            size={24}
          />
        </div>

        <div className="space-y-8 bg-card p-5">
          <div className="relative size-16">
            <Image fill src="/images/service-icon-1.png" alt="Service icon" />
          </div>
          <h3 className="font-bold text-secondary/80 text-lg uppercase">
            Real Estate Property Boundaries
          </h3>
          <div className="w-1/2 h-0.5 bg-primary" />
          <p className="text-secondary/80 leading-8">
            A property line map, or a “plat,” is a drawing that maps out your
            property&apos;s boundary lines, and includes details like
            elevations, bodies of water and structures.
          </p>
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform hover:translate-x-0.5 shrink-0 stroke-3 text-primary"
            size={24}
          />
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
