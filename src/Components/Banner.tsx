import heroImage from "../assets/banner-stack.png";

export default function Banner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-24">
        
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              className="rounded-md bg-linear-to-r from-orange-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#learn-more"
              className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        
        <div className="flex w-full max-w-md justify-center lg:max-w-lg">
          <img
            src={heroImage}
            alt="Isometric illustration of a layered development stack"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}