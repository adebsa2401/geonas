const SloganSection = () => {
  return (
    <section className="px-5 py-16 xl:pt-48 flex flex-col md:items-center gap-8 bg-[linear-gradient(130deg,_rgba(21,41,76,0.9)_0%,_rgba(21,41,76,0.6)_100%),linear-gradient(0,rgba(21,41,76,0.5)_0%,rgba(21,41,76,0.5)_100%),url(/images/bg-pattern.png)] bg-cover">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight md:text-center text-primary-foreground max-w-md">
        Professional Land Surveying & Mapping
      </h2>
      <div className="bg-primary w-24 h-0.5" />
      <p className="font-medium text-lg md:text-xl md:text-center text-primary-foreground max-w-md">
        Geonas routinely provides surveying solutions for business, real estate,
        land development and civil engineering in Boise area.
      </p>
    </section>
  );
};

export { SloganSection };
