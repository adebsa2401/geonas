import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import Link from "next/link";
import { ContactsInfoSection } from "@/components/layout/contact-us/contacts-info-section";
import { ContactUsForm } from "@/components/forms/contact-us-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Geonas",
  description:
    "Get in touch with Geonas for professional land surveying and mapping services. We're here to assist you with your surveying needs.",
};

export default function ContactUsPage() {
  return (
    <div>
      <div className="px-5 lg:bg-accent">
        <div className="space-y-5 py-10 lg:container mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-secondary font-medium">
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-secondary/80 font-medium">
                  Contactez-nous
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-bold text-4xl md:text-5xl text-secondary">
            Contactez-nous
          </h1>
        </div>
      </div>

      <div className="px-5 max-lg:bg-accent">
        <div className="grid md:grid-cols-2 gap-5 lg:container mx-auto">
          <ContactsInfoSection />
          <ContactUsForm />
        </div>
      </div>

      <div className="p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.694534777512!2d5.507103377361843!3d50.59563067162019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f91ca5cc65eb%3A0xc4803a84cef9d65f!2sRue%20du%20Pairay%20126%2F1%2C%204100%20Seraing!5e0!3m2!1sen!2sbe!4v1764502274763!5m2!1sen!2sbe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-video lg:container mx-auto"
        />
      </div>
    </div>
  );
}
