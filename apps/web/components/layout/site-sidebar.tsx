import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { getCompanyWhatsAppURI } from "@/data/contacts";

const SiteSidebar = () => {
  return (
    <aside className="fixed max-md:hidden bg-accent top-0 left-0 h-full w-[7%] shadow-[0_0_50px_rgba(0,0,0,.04)] py-9 px-3 flex flex-col items-center justify-between">
      <ul className="flex items-center flex-col gap-4 text-secondary/80">
        <li className="inline-flex items-center justify-center size-9 rounded-full border">
          <FaLinkedinIn />
        </li>
        <li className="inline-flex items-center justify-center size-9 rounded-full border">
          <FaFacebookF />
        </li>
        <li>
          <a
            href={getCompanyWhatsAppURI()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center size-9 rounded-full border"
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>

      <h6 className="uppercase text-secondary/80 text-xs font-medium [writing-mode:vertical-rl] rotate-180 tracking-widest">
        Professional Land Surveying
      </h6>
    </aside>
  );
};

export { SiteSidebar };
