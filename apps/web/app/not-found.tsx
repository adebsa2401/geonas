import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { SearchIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="px-5 py-20 bg-[linear-gradient(130deg,_rgba(21,41,76,0.9)_0%,_rgba(21,41,76,0.6)_100%),linear-gradient(0,rgba(21,41,76,0.5)_0%,rgba(21,41,76,0.5)_100%),url(/images/bg-pattern.png)] bg-cover">
      <div className="max-w-lg mx-auto flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-secondary-foreground">
          <span>404</span>{" "}
          <span className="size-2 bg-secondary-foreground rounded-full inline-block align-middle" />{" "}
          <span>Page not found</span>
        </h1>
        <p className="text-center text-secondary-foreground text-lg">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted. Try a search below...
        </p>
        <div className="flex w-full max-w-sm">
          <Input
            placeholder="Search..."
            className="h-12 bg-secondary-foreground"
          />
          <Button size="icon" className="size-12">
            <SearchIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
