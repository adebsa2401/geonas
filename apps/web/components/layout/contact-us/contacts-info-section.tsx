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
        Si vous avez un projet dont vous aimeriez discuter
      </h3>

      <h2 className="font-bold text-3xl text-secondary">
        Nous serions ravis d&apos;en parler.
      </h2>

      <div className="h-0.5 w-24 bg-primary" />

      <p className="text-lg leading-relaxed text-secondary/80 font-medium">
        N&apos;hésitez pas à nous contacter par téléphone, par e-mail ou via ce
        formulaire ! Nous respectons votre vie privée et ne partagerons jamais
        ces informations avec des tiers. Si vous souhaitez vous présenter sans
        rendez-vous, veuillez nous appeler à l&apos;avance pour prendre
        rendez-vous. Merci !
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
            N&apos;hésitez pas à nous écrire. Voici l&apos;adresse e-mail
            générale.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <PhoneCallIcon size={30} className="shrink-0 text-primary" />
        <div className="space-y-2 text-secondary">
          <p className="text-lg font-medium">{formatCompanyPhone()}</p>
          <p className="text-sm">
            Nous sommes à votre disposition pour toute question ou demande de
            devis.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ContactsInfoSection };
