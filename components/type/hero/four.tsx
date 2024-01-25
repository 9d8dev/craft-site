import Image from "next/image";
import Logoipsum from "@/public/logoipsum.svg";

const pageContent = {
  nav: [
    { name: "Four", url: "#" },
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Services", url: "#" },
    { name: "Contact", url: "#" },
  ],
  links: [{ name: "Get Started", url: "#" }],
};

const Four = () => {
  return (
    <section className="w-full h-full max-h-full overflow-hidden">
      {/* Navigation Menu */}
      <nav className="sticky top-0 grid w-full grid-cols-[1fr,2fr,1fr] items-center p-8 backdrop-blur-md">
        <a href={pageContent.nav[0].url} className="text-xl font-light">
          {pageContent.nav[0].name}
        </a>
        <ul className="flex justify-center gap-4">
          {pageContent.nav.slice(1).map((link, index) => (
            <li key={index}>
              <a className="transition-all hover:opacity-50" href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <a
            className="h-fit w-fit bg-neutral-300 px-4 py-2 text-black transition-all hover:-mt-1 hover:mb-1 focus:scale-105 dark:bg-neutral-300"
            href={pageContent.links[0].url}
          >
            {pageContent.links[0].name}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full h-full m-auto max-w-5xl py-10 px-6 flex flex-col gap-8">
        {/* Large Text */}
        <h1 className="text-7xl font-normal tracking-tight">
          Four is a component{" "}
          <Image
            className="inline my-auto -mt-6"
            width={200}
            height={100}
            src="/car.png"
            alt=""
          ></Image>{" "}
          with special{" "}
          <Image
            className="inline my-auto -mt-6"
            width={200}
            height={100}
            src="/car.png"
            alt=""
          ></Image>{" "}
          image capabilities on the hero banner.{" "}
          <Image
            className="inline my-auto -mt-6"
            width={200}
            height={100}
            src="/car.png"
            alt=""
          ></Image>{" "}
          Try it out.
        </h1>

        {/* logo features */}
        <div className="p-4 bg-neutral-300 dark:bg-neutral-700 flex gap-4 items-center w-fit">
          <p>As seen in:</p>
          <Image className="h-8 dark:invert" src={Logoipsum} alt=""></Image>
          <Image className="h-8 dark:invert" src={Logoipsum} alt=""></Image>
          <Image className="h-8 dark:invert" src={Logoipsum} alt=""></Image>
        </div>

        {/* End Text */}
        <div className="text-lg">
          <p>We make components for marketing sites.</p>
          <div className="flex gap-2">
            <p className="opacity-50">
              Visit craftui.org to use our components for free.{" "}
            </p>
            <a
              className="text-purple-700 dark:text-purple-300 transition-all hover:text-purple-500"
              href="#"
            >
              Check it Out -{`>`}
            </a>
          </div>
          <p className="text-xs mt-4">
            <span className="opacity-50">Available now online.</span> Tell us
            what you build next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Four;
