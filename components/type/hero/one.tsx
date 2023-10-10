const One = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 p-8 rounded-lg items-center justify-center bg-neutral-400">
      <h1 className="text-6xl">One</h1>
      <p>This is a component</p>
      <a className="px-4 py-2 dark:bg-neutral-500 bg-neutral-300" href="/">
        This is a test!
      </a>
    </div>
  );
};

export default One;
