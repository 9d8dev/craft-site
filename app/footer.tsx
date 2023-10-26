export default function Footer() {
  return (
    <section className="grid md:gap-8 gap-6 py-16 md:py-24">
      <p>
        Visit the{" "}
        <a
          className="underline underline-offset-4 hover:opacity-50 transition-all cursor-pointer"
          href="https://github.com/9d8dev/craft"
        >
          Github Repo
        </a>{" "}
        here.
      </p>
      <p className="text-sm">© Craft UI, 2023-Present</p>
    </section>
  );
}
