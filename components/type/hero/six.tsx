import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import Link from "next/link";

// Image Imports
import Placeholder from "@/public/placeholder.jpg";

const Six = () => {
  return (
    <Craft.Section className="h-full w-full relative">
      <Craft.Container>
        {/* Name and Nav */}
        <div className="w-full flex justify-between">
          <div className="">
            <h1 className="text-7xl uppercase font-bold">
              <Link className="hover:opacity-70 transition-all" href="#">
                Six
              </Link>
            </h1>
            <h2 className="w-48 text-lg leading-6">
              Another component from Craft UI.
            </h2>
          </div>
          <nav className="flex gap-4">
            <Link className="hover:opacity-70 transition-all" href="#">
              Book a component
            </Link>
            <Link className="hover:opacity-70 transition-all" href="#">
              Heros
            </Link>
            <Link className="hover:opacity-70 transition-all" href="#">
              Shop
            </Link>
            <Link className="hover:opacity-70 transition-all" href="#">
              Learn More
            </Link>
          </nav>
        </div>

        {/* Images */}
        <div className="flex justify-end items-end gap-2 absolute bottom-0 right-0 fit">
          {/* Image 1 */}
          <div className="w-96 h-72">
            <Image
              className="object-cover h-full w-full rounded-tl-3xl"
              src={Placeholder}
              alt="placeholder"
            ></Image>
          </div>
          {/* Image 2 */}
          <div className="w-96 h-96">
            <Image
              className="object-cover h-full w-full rounded-tl-3xl"
              src={Placeholder}
              alt="placeholder"
            ></Image>
          </div>
        </div>

        {/* Circle CTA */}
        <div className="absolute bottom-2 right-2 h-12 w-12 bg-background p-12 flex items-center justify-center rounded-full hover:opacity-80 text-center leading-4 font-medium transition-all">
          <Link className="-mt-1" href="#">
            Get Started
          </Link>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Six;
