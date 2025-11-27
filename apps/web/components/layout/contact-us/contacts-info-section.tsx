import { Separator } from "@workspace/ui/components/separator";
import { MailOpenIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import {
  companyAddress,
  companyEmail,
  formatCompanyPhone,
} from "@/data/contacts";

const ContactsInfoSection = () => {
  return (
    <div className="py-10 space-y-8">
      <h3 className="font-bold text-primary text-lg">
        If you have a project you would like to discuss
      </h3>

      <h2 className="font-bold text-3xl text-secondary">
        We&apos;d love to hear from you
      </h2>

      <div className="h-0.5 w-24 bg-primary" />

      <p className="text-lg leading-relaxed text-secondary/80 font-medium">
        Please feel free to contact us via phone, email, or this form! We
        respect your privacy and will never share this information with a third
        party. If you&apos;d like a walk-in appointment, kindly call ahead to
        schedule. Thank you!
      </p>

      <Separator />

      <div className="flex gap-4">
        <MapPinIcon size={30} className="shrink-0 text-primary" />
        <div className="space-y-2 text-secondary">
          <p className="text-lg font-medium">Geonas</p>
          <p className="text-sm">{companyAddress}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <MailOpenIcon size={30} className="shrink-0 text-primary" />
        <div className="space-y-2 text-secondary">
          <p className="text-lg font-medium">{companyEmail}</p>
          <p className="text-sm">
            Don&apos;t hesitate and write us. This is the general email.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <PhoneCallIcon size={30} className="shrink-0 text-primary" />
        <div className="space-y-2 text-secondary">
          <p className="text-lg font-medium">{formatCompanyPhone()}</p>
          <p className="text-sm">
            We are available for questions and estimates.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ContactsInfoSection };
