import Image from "next/image";
import { HamburgerMenuIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import * as Craft from "@/components/craft/layout";

// Import your hero image here
import Placeholder from "@/public/placeholder.jpg";

const content = {
  title: "One",
  subText:
    "This is a marketing website component library using NextJS and Tailwind CSS.",
  getStartedLink: "#",
  menuLink: "#",
  mainImage: Placeholder,
  scrollText: "Scroll to See More ",
};

const One = () => {
  return (
    <Craft.Section>
      <Craft.Container className="flex flex-col gap-8">
        <div className="grid w-full grid-cols-3">
          <h1 className="text-6xl font-light uppercase">{content.title}</h1>
          <h2 className="text-2xl font-light">{content.subText}</h2>
          <div className="flex justify-end gap-4">
            <a
              className="block h-fit w-fit bg-secondary border px-4 py-2 text-black transition-all hover:-mt-1 hover:mb-1 focus:scale-105"
              href={content.getStartedLink}
            >
              Get Started
            </a>
            <a
              className="flex h-fit w-fit items-center gap-2 bg-secondary border px-4 py-2 transition-all hover:-mt-1 hover:mb-1 focus:scale-105"
              href={content.menuLink}
            >
              Menu <HamburgerMenuIcon />
            </a>
          </div>
        </div>
        <div className="overflow-hidden border relative h-[480px]">
          <Image
            objectFit="cover"
            src={content.mainImage}
            alt=""
            placeholder="blur"
          ></Image>
        </div>
        <div className="flex items-center gap-2">
          <p>{content.scrollText}</p>
          <ArrowDownIcon className="animate-pulse" />
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default One;
