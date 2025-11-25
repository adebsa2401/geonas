import { MailOpenIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";

const HomeBanner = () => {
  return (
    <section className="bg-[linear-gradient(to_right,rgba(21,41,76,0.6)_18%,transparent),url(/images/home-banner.png)] bg-secondary bg-no-repeat bg-cover bg-center relative">
      <div className="space-y-5 max-w-xl px-5 py-20 md:py-44">
        <h2 className="text-5xl md:text-6xl font-bold text-balance text-primary-foreground">
          Professional Land Surveying & Mapping
        </h2>
        <div className="w-24 h-0.5 bg-primary" />
        <p className="font-medium text-lg md:text-xl text-balance text-primary-foreground">
          Geopoint Inc. routinely provides surveying solutions for business,
          real estate, land development and civil engineering in Boise area.
        </p>
      </div>

      <div className="md:absolute md:bottom-0 md:right-0 md:left-0 lg:left-1/4 md:translate-y-1/2 flex flex-col md:flex-row max-md:*:not-last:border-b md:*:not-last:border-r">
        <div className="bg-secondary p-5 text-secondary-foreground flex gap-4">
          <MailOpenIcon size={30} className="shrink-0" />
          <div className="space-y-2">
            <p className="text-lg font-medium">hello@geopoint.com</p>
            <p className="text-sm">
              Don’t hesitate and write us. This is the general email.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-5 text-secondary-foreground flex gap-4">
          <PhoneCallIcon size={30} className="shrink-0" />
          <div className="space-y-2">
            <p className="text-lg font-medium">+452.87.9875</p>
            <p className="text-sm">
              We are available for questions and estimates.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-5 text-secondary-foreground flex gap-4">
          <MapPinIcon size={30} className="shrink-0" />
          <div className="space-y-2">
            <p className="text-lg font-medium">Geonas</p>
            <p className="text-sm">670 Garden Drive, Boise, Idaho 83702</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeBanner };
