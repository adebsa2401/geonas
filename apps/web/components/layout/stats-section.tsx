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

        <div className="grid md:grid-cols-4 md:col-span-2 max-w-5xl lg:absolute lg:left-0 lg:bottom-20">
          <div className="flex flex-col items-center justify-center gap-1 px-8 py-12 bg-secondary text-secondary-foreground">
            <span className="font-bold text-4xl text-center">2.400+</span>
            <span className="font-medium text-center">Projects</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-8 py-12 bg-secondary text-secondary-foreground">
            <span className="font-bold text-4xl text-center">28</span>
            <span className="font-medium text-center">Years of Experience</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-8 py-12 bg-secondary text-secondary-foreground">
            <span className="font-bold text-4xl text-center">854</span>
            <span className="font-medium text-center">Happy Clients</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-8 py-12 bg-secondary text-secondary-foreground">
            <span className="font-bold text-4xl text-center">14</span>
            <span className="font-medium text-center">
              Quality Certificates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StatsSection };
