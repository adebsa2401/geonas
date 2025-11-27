import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import Link from "next/link";
import { ContactsInfoSection } from "@/components/layout/contacts-info-section";
import { ContactUsForm } from "@/components/forms/contact-us-form";

export default function ContactUsPage() {
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
                  Contact Us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="font-bold text-4xl md:text-5xl text-secondary">
            Contact Us
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5079.2069740340985!2d4.856134777356427!3d50.46710797159526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1996f7a40cbcb%3A0x4816753a1604ed43!2sRue%20de%20Bruxelles%2079%2C%205000%20Namur!5e0!3m2!1sen!2sbe!4v1764243933887!5m2!1sen!2sbe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-video lg:container mx-auto"
        />
      </div>
    </div>
  );
}
