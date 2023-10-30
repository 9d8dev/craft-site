import Image from "next/image";
import { HamburgerMenuIcon, ArrowDownIcon } from "@radix-ui/react-icons";

// Import your hero image here
import Placeholder from "@/public/placeholder.jpg";

const One = () => {
  return (
    <section className="h-full w-full max-w-full grid gap-12 py-12 px-12 max-h-[1080px] dark:text-white bg-neutral-100 dark:bg-neutral-800">
      <div className="w-full grid grid-cols-3">
        <h1 className="text-6xl font-light uppercase">One</h1>
        <h2 className="text-2xl font-extralight">
          This is a marketing website component library using NextJS and
          Tailwind CSS.
        </h2>
        <div className="flex justify-end gap-4">
          <a
            className="px-4 block py-2 transition-all hover:-mt-1 hover:mb-1 focus:scale-105 w-fit h-fit text-black dark:bg-neutral-300 bg-neutral-300"
            href="#"
          >
            Get Started
          </a>
          <a
            className="px-4 flex gap-2 items-center py-2 transition-all hover:-mt-1 hover:mb-1 focus:scale-105 w-fit h-fit dark:bg-neutral-500 bg-neutral-300"
            href="#"
          >
            Menu <HamburgerMenuIcon />
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <Image
          objectFit="cover"
          src={Placeholder}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div className="flex gap-2 items-center">
        <p>Scroll to See More </p>
        <ArrowDownIcon className="animate-pulse" />
      </div>
    </section>
  );
};

export default One;
