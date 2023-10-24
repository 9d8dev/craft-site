const Two = () => {
  return (
    <div className="h-screen w-screen max-w-full max-h-full flex flex-col gap-8 p-8 items-center justify-center bg-neutral-400">
      <h1 className="text-6xl">Two</h1>
      <p>This is a component</p>
      <a className="px-4 py-2 dark:bg-neutral-500 bg-neutral-300" href="/">
        This is a test!
      </a>
    </div>
  );
};

export default Two;
