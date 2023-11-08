const Five = () => {
  return (
    <section className="w-full p-2 uppercase relative h-full bg-neutral-100 dark:bg-neutral-900 dark:text-white-800">
      <div className="relative">
        <div className="absolute top-[11rem] right-2 flex w-fit text-xs items-center gap-12">
          <p className="w-56">
            Craft UI is a component library built for marketing developers
          </p>
          <a
            className="hover:underline underline-offset-4 transition-all"
            href="#"
          >
            IT / ES / CH
          </a>
        </div>

        {/* link top right */}
        <a
          className="hover:underline underline-offset-4 transition-all text-xs absolute top-2 right-2"
          href="#"
        >
          Get in Touch
        </a>

        {/* XL Text */}
        <h1 className="text-9xl font-medium">
          <span>Craft UI is for</span> <span>Marketing</span>{" "}
          <span>Components</span>
        </h1>
      </div>

      {/* simple bottom section */}
      <div className="absolute bottom-2">
        <h2 className="font-light">
          Craft UI is built with Next JS, Typescript, and Tailwind CSS. To learn
          more visit the{" "}
          <a
            className="hover:underline underline-offset-4 transition-all"
            href="https://github.com/9d8dev/craft"
          >
            GitHub
          </a>
        </h2>
      </div>
    </section>
  );
};

export default Five;
