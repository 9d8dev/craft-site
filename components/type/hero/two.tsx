import Image from "next/image";

// Import your hero image here
import Placeholder from "@/public/placeholder.jpg";

const pageContent = {
  nav: [
    { name: "Two", url: "#" },
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Services", url: "#" },
    { name: "Contact", url: "#" },
  ],
  banner: {
    title: "Two",
    subtitle: "The Component Library for Marketers.",
    description:
      "Craft UI is the NextJS component library for marketing sites.",
    form: {
      inputPlaceholder: "Enter your email",
      buttonText: "Subscribe",
    },
    links: [{ name: "Get Started", url: "#" }],
    endnote: "Sign up now. No spam ever.",
  },
  images: [Placeholder, Placeholder],
};

const Two = () => {
  return (
    <section className="relative flex h-full w-full items-center justify-center gap-8 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
      <nav className="absolute top-0 grid w-full grid-cols-[1fr,2fr,1fr] items-center p-8">
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
            href={pageContent.banner.links[0].url}
          >
            {pageContent.banner.links[0].name}
          </a>
        </div>
      </nav>
      <div>
        <div className="grid grid-cols-[1fr,2fr,1fr] items-center gap-6">
          <div className="h-full overflow-hidden">
            <Image
              src={pageContent.images[0]}
              className="h-full object-cover object-center"
              alt=""
              placeholder="blur"
            ></Image>
          </div>
          <div className="grid gap-8 py-12 text-center">
            <p className="m-auto w-fit rounded-2xl bg-neutral-100 px-4 py-2 text-xs dark:bg-neutral-600 dark:text-neutral-200">
              Welcome to Craft UI
            </p>
            <h1 className="sr-only">{pageContent.banner.title}</h1>
            <h2 className="text-6xl">{pageContent.banner.subtitle}</h2>
            <h3 className="text-xl opacity-60">
              {pageContent.banner.description}
            </h3>
            <div className="grid gap-2">
              <form className="m-auto mt-4 flex h-fit w-3/4 items-center gap-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 "
                  placeholder={pageContent.banner.form.inputPlaceholder}
                />
                <button
                  type="submit"
                  className="border border-neutral-600 bg-neutral-600 px-4 py-2 text-white hover:opacity-90 focus:scale-105"
                >
                  {pageContent.banner.form.buttonText}
                </button>
              </form>
              <p className="text-xs opacity-75">{pageContent.banner.endnote}</p>
            </div>
          </div>
          <div className="h-full overflow-hidden">
            <Image
              src={pageContent.images[1]}
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
