import Image from "next/image";
import { ArrowTopRightIcon, PersonIcon } from "@radix-ui/react-icons";

// Import your large logo
import Logo from "@/public/logo.svg";

const content = {
  title: "Craft UI Components",
  navigation: [
    { label: "Three", url: "#" },
    { label: "Templates", url: "#" },
    { label: "Platforms", url: "#" },
    { label: "Pricing", url: "#" },
  ],
  largeText: {
    title: "Lorem ipsum dolor sit amet.",
    subtitle:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

const Three = () => {
  return (
    <section className="relative flex h-full w-full flex-col justify-between bg-neutral-200 p-2 dark:bg-neutral-900 ">
      <div className="flex flex-col gap-4">
        {/* Navigation Menu */}
        <nav className="sticky top-0 text-sm uppercase">
          <ul className="flex justify-between gap-8 font-normal">
            {content.navigation.map((navItem, index) => (
              <li key={index}>
                <a
                  href={navItem.url}
                  className="transition-all hover:opacity-50"
                >
                  {navItem.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-1 text-purple-600">
              <a
                className="flex items-center gap-1 transition-all hover:text-purple-300"
                href="#"
              >
                <ArrowTopRightIcon /> Get Started
              </a>
              <a
                className="flex items-center gap-1 transition-all hover:text-purple-300"
                href="#"
              >
                <PersonIcon /> Login
              </a>
            </li>
          </ul>
        </nav>
        {/* Large Type Logo */}
        <div>
          <h1 className="sr-only">{content.title}</h1>
          <Image
            className="w-full invert dark:invert-0"
            src={Logo}
            alt=""
          ></Image>
        </div>
      </div>

      {/* Large Text Section */}
      <div className="text-5xl">
        <h2>{content.largeText.title}</h2>
        <h3 className="opacity-50">{content.largeText.subtitle}</h3>
      </div>
    </section>
  );
};

export default Three;
