import Image from "next/image";

const PartnersSection = () => {
  return (
    <section>
      <div className="container z-10 relative mx-auto flex max-md:flex-col gap-10 p-24 items-center justify-center bg-[linear-gradient(130deg,_rgba(21,41,76,0.9)_0%,_rgba(21,41,76,0.6)_100%),linear-gradient(0,rgba(21,41,76,0.5)_0%,rgba(21,41,76,0.5)_100%),url(/images/bg-pattern.png)] bg-cover">
        <div className="h-16 w-full relative">
          <Image
            fill
            src="/images/partner-1.png"
            alt="Partner 1's logo"
            className="object-contain"
          />
        </div>
        <div className="h-16 w-full relative">
          <Image
            fill
            src="/images/partner-2.png"
            alt="Partner 2's logo"
            className="object-contain"
          />
        </div>
        <div className="h-16 w-full relative">
          <Image
            fill
            src="/images/partner-3.png"
            alt="Partner 3's logo"
            className="object-contain"
          />
        </div>
        <div className="h-16 w-full relative">
          <Image
            fill
            src="/images/partner-4.png"
            alt="Partner 4's logo"
            className="object-contain"
          />
        </div>
        <div className="h-16 w-full relative">
          <Image
            fill
            src="/images/partner-5.png"
            alt="Partner 5's logo"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export { PartnersSection };
