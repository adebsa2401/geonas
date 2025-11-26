import Image from "next/image";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { SearchIcon } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SiteFooter = () => {
  return (
    <footer>
      <div className="px-5 py-10 border-y">
        <div className="gap-10 grid md:grid-cols-4 container mx-auto">
          <div className="space-y-10">
            <div className="space-y-5">
              <div className="relative size-16 lg:size-28 border">
                <Image fill src="/images/logo.png" alt="Geonas's logo" />
              </div>
              <h4 className="text-primary font-bold text-lg uppercase">
                Geonas
              </h4>
              <p className="text-secondary/80">
                Geonas routinely provides surveying solutions for business, real
                estate, land development and civil engineering in Boise area.
                The highest quality, most accurate & precise land surveying
                services.
              </p>
            </div>

            <div className="flex">
              <Input placeholder="Search..." className="h-12" />
              <Button size="icon" className="size-12">
                <SearchIcon />
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-primary font-bold text-lg uppercase">
              Latest News
            </h4>
            <ul className="space-y-2">
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Basic boundary survey with property
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Research of federal and state resources and the public record
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                State Board of Licensure for Professional Engineers
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-primary font-bold text-lg uppercase">
              Categories
            </h4>
            <ul className="space-y-2">
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Featured
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Land Survey
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Location Certificates
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Photos
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Resources
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-primary font-bold text-lg uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Home
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                News
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Services
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                About Us
              </li>
              <li
                className="relative pl-6 before:content-['—'] before:absolute before:left-0
             before:top-0 before:text-primary text-secondary/80 font-medium"
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 py-10">
        <div className="flex gap-5 items-center flex-col md:flex-row md:justify-between container mx-auto">
          <p className="text-sm text-secondary/80 text-center md:text-right max-w-xs">
            Copyright © {new Date().getFullYear()} • Geonas
          </p>
          <div className="flex gap-x-2 gap-y-5 items-center justify-center flex-wrap">
            <div className="flex items-center gap-2 py-2 px-4 border rounded-full shrink-0 text-sm text-secondary font-medium">
              <FaLinkedinIn />
              LinkedIn
            </div>

            <div className="flex items-center gap-2 py-2 px-4 border rounded-full shrink-0 text-sm text-secondary font-medium">
              <FaFacebookF />
              Facebook
            </div>

            <div className="flex items-center gap-2 py-2 px-4 border rounded-full shrink-0 text-sm text-secondary font-medium">
              <FaWhatsapp />
              WhatsApp
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
