import Image from "next/image";
import Link from "next/link";

// Import your hero image here
import Placeholder from "@/public/placeholder.jpg";

const Two = () => {
  return (
    <section className="h-full w-full relative flex items-center justify-center gap-8 dark:text-white bg-neutral-100 dark:bg-neutral-800">
      <nav className="w-full absolute top-0 p-8 grid items-center grid-cols-[1fr,2fr,1fr]">
        <Link href="#" className="text-xl font-light">
          Two
        </Link>
        <ul className="flex justify-center gap-4">
          <li>
            <Link className="hover:opacity-50 transition-all" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-50 transition-all" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-50 transition-all" href="#">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-50 transition-all" href="#">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-end">
          <a
            className="px-4 py-2 transition-all hover:-mt-1 hover:mb-1 focus:scale-105 w-fit h-fit text-black dark:bg-neutral-300 bg-neutral-300"
            href="#"
          >
            Get Started
          </a>
        </div>
      </nav>
      <div>
        <div className="grid grid-cols-[1fr,2fr,1fr] items-center gap-6">
          <div className="overflow-hidden h-full">
            <Image
              src={Placeholder}
              className="h-full object-cover object-center"
              alt=""
              placeholder="blur"
            ></Image>
          </div>
          <div className="text-center grid gap-8 py-12">
            <p className="px-4 py-2 rounded-2xl m-auto bg-neutral-100 dark:bg-neutral-600 w-fit dark:text-neutral-200 text-xs">
              Welcome to Craft UI
            </p>
            <h1 className="sr-only">Two</h1>
            <h2 className="text-6xl">The Component Library for Marketers.</h2>
            <h3 className="text-xl opacity-60">
              Craft UI is the NextJS component library for marketing sites.
            </h3>
            <div className="grid gap-2">
              <form className="mt-4 w-3/4 flex items-center gap-2 h-fit m-auto">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 "
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 hover:opacity-90 focus:scale-105 bg-neutral-600 border border-neutral-600 text-white"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs opacity-75">Sign up now. No spam ever.</p>
            </div>
          </div>
          <div className="overflow-hidden h-full">
            <Image
              src={Placeholder}
              className="h-full object-cover object-center"
              alt=""
              placeholder="blur"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Two;
