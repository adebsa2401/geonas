import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

const RecentNewsSection = () => {
  return (
    <section className="relative md:bg-accent px-5 py-20">
      <div className="absolute right-0 -top-40 bottom-0 w-1/4 bg-[url(/images/bg-recent-news.png)] bg-right bg-cover bg-no-repeat max-lg:hidden" />
      <div className="space-y-8 container mx-auto">
        <h2 className="font-bold text-3xl max-w-2xs text-secondary">
          Recent News
        </h2>

        <div className="h-0.5 bg-primary w-24" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-5">
            <div className="relative  w-full aspect-[5/6] bg-[url(/images/home-banner.png)] bg-center bg-cover bg-no-repeat flex items-end">
              <div className="flex items-center justify-center p-5 gap-2 uppercase font-medium text-sm text-primary-foreground bg-primary absolute top-0 right-0">
                <span>Featured</span>{" "}
                <span className="bg-primary-foreground size-0.5 rounded-full" />{" "}
                <span>Resources</span>
              </div>
              <div className="p-5 flex flex-col gap-5 justify-end bg-linear-to-b from-transparent via-50% via-black/50 to-100% to-black/50">
                <p className="text-secondary-foreground flex items-center gap-2 font-medium text-xs">
                  <span className="uppercase">May 15</span>{" "}
                  <span className="size-0.5 bg-secondary-foreground rounded-full" />{" "}
                  <span>By David Wood</span>
                </p>
                <h3 className="text-secondary-foreground font-bold text-2xl">
                  Minimum standard detail requirements for land title surveys
                </h3>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link href="/news">More News</Link>
            </Button>
          </div>
          <div className="p-5 bg-accent md:bg-card space-y-8">
            <div className="space-y-3">
              <h3 className="font-bold text-secondary">
                Basic boundary survey with property corners
              </h3>
              <p className="font-medium text-secondary/80 text-sm line-clamp-3">
                But how puny and harmless they now looked beside this huge and
                terrific
              </p>
              <p className="font-medium flex items-center gap-2 text-xs">
                <span className="uppercase text-secondary/80">Feb 17</span>{" "}
                <span className="size-0.5 bg-secondary rounded-full" />{" "}
                <span className="text-secondary">By David Wood</span>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-secondary">
                Basic boundary survey with property corners
              </h3>
              <p className="font-medium text-secondary/80 text-sm line-clamp-3">
                But how puny and harmless they now looked beside this huge and
                terrific
              </p>
              <p className="font-medium flex items-center gap-2 text-xs">
                <span className="uppercase text-secondary/80">Feb 17</span>{" "}
                <span className="size-0.5 bg-secondary rounded-full" />{" "}
                <span className="text-secondary">By David Wood</span>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-secondary">
                Basic boundary survey with property corners
              </h3>
              <p className="font-medium text-secondary/80 text-sm line-clamp-3">
                But how puny and harmless they now looked beside this huge and
                terrific
              </p>
              <p className="font-medium flex items-center gap-2 text-xs">
                <span className="uppercase text-secondary/80">Feb 17</span>{" "}
                <span className="size-0.5 bg-secondary rounded-full" />{" "}
                <span className="text-secondary">By David Wood</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { RecentNewsSection };
