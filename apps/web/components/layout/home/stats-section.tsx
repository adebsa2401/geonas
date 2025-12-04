const StatsSection = () => {
  return (
    <section className="lg:pt-20">
      <div className="relative lg:container mx-auto grid md:grid-cols-2 gap-x-10 lg:bg-accent">
        <div className="space-y-8 p-5 pt-20 lg:pb-80">
          <h3 className="font-bold text-primary text-lg max-w-2xs">
            We are a small company providing a variety of land surveying
            services
          </h3>
          <h2 className="font-bold text-3xl max-w-2xs text-secondary">
            Using time saving methods and technologies.
          </h2>
          <div className="h-0.5 bg-primary w-24" />
          <p className="text-lg leading-relaxed text-secondary font-medium">
            One way to check your property lines is to look at the deed of the
            property. As a legal document about your property, the deed should
            have a worded description of your land&apos;s boundaries.
          </p>
        </div>

        <div className="bg-[url(/images/bg-stats.png)] bg-no-repeat bg-cover size-full max-md:hidden bg-right" />
      </div>
    </section>
  );
};

export { StatsSection };
