"use client";

import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import { MailIcon, MapPinIcon, MenuIcon, PhoneIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  Trigger as AccordionTrigger,
} from "@workspace/ui/components/accordion";
import Link from "next/link";
import {
  companyAddress,
  companyEmail,
  formatCompanyPhone,
  getCompanyPhoneURI,
} from "@/data/contacts";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";

const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header>
      <Accordion collapsible type="single" className="lg:hidden bg-accent">
        <AccordionItem value="header">
          <div className="p-5 flex items-center justify-between">
            <div className="relative size-16 border">
              <Image fill src="/images/logo.png" alt="Geonas's logo" />
            </div>

            <AccordionTrigger asChild>
              <Button size="lg" className="group">
                <MenuIcon
                  aria-hidden="true"
                  className="-ms-1 transition-transform group-hover:-translate-x-0.5"
                  size={16}
                />
                Menu
              </Button>
            </AccordionTrigger>
          </div>

          <AccordionContent className="px-5">
            <nav>
              <ul>
                <li
                  className={cn(
                    "border-dashed border-t py-4 font-medium text-lg text-secondary",
                    {
                      "text-primary": pathname === "/",
                    },
                  )}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={cn(
                    "border-dashed border-t py-4 font-medium text-lg text-secondary",
                    {
                      "text-primary": pathname.startsWith("/news"),
                    },
                  )}
                >
                  <Link href="/news">News</Link>
                </li>
                <li
                  className={cn(
                    "border-dashed border-t py-4 font-medium text-lg text-secondary",
                    {
                      "text-primary": pathname === "/about-us",
                    },
                  )}
                >
                  <Link href="/about-us">About us</Link>
                </li>
                <li className="bg-primary hover:bg-primary/80 text-primary-foreground transition-all">
                  <Link href="/contact-us" className="py-4 px-5 flex flex-col">
                    <span className="font-medium text-lg ">Order a Survey</span>
                    <span className="text-sm opacity-80">
                      Let&apos;s talk about your projects.
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="max-lg:hidden">
        <div className="bg-accent py-4 px-5">
          <div className="mx-auto container flex items-center gap-5">
            <div className="flex items-center gap-2 justify-center flex-1">
              <MapPinIcon size={14} className="text-primary" />
              <p className="text-sm font-medium text-secondary/80">
                {companyAddress}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon size={14} className="text-primary" />
              <a
                href={getCompanyPhoneURI()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-secondary/80"
              >
                {formatCompanyPhone()}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MailIcon size={14} className="text-primary" />
              <a
                href={`mailto:${companyEmail}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-secondary/80"
              >
                {companyEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="px-5">
          <div className="container mx-auto flex items-center gap-10">
            <div className="relative size-28 border">
              <Image fill src="/images/logo.png" alt="Geonas's logo" />
            </div>

            <nav className="flex items-center gap-10 flex-1 py-5">
              <div className="flex-1 flex items-center gap-10">
                <Link
                  href="/"
                  className={cn("font-medium text-secondary", {
                    "text-primary": pathname === "/",
                  })}
                >
                  Home
                </Link>
                <Link
                  href="/news"
                  className={cn("font-medium text-secondary", {
                    "text-primary": pathname.startsWith("/news"),
                  })}
                >
                  News
                </Link>
                <Link
                  href="/about-us"
                  className={cn("font-medium text-secondary", {
                    "text-primary": pathname === "/about-us",
                  })}
                >
                  About us
                </Link>
              </div>
              <Link
                href="/contact-us"
                className="py-4 px-5 flex flex-col bg-primary hover:bg-primary/80 text-primary-foreground transition-all"
              >
                <span className="font-medium">Order a Survey</span>
                <span className="text-xs opacity-80">
                  Let&apos;s talk about your projects.
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export { SiteHeader };
