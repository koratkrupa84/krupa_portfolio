import { FiArrowUpRight } from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-40 w-40 rounded-full bg-primary-light/10 blur-3xl sm:h-64 sm:w-64" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl sm:h-72 sm:w-72" />

      <div className="container relative mx-auto flex flex-col items-center px-5 pb-10 pt-24 sm:px-4 md:mt-20 md:min-h-[75vh] md:flex-row md:justify-between md:py-8">

        {/* Profile Image */}
        <div className="mb-8 flex w-full justify-center sm:mb-10 md:mb-0 md:w-2/5">
          <img
            src="/assets/images/krupa.jpeg"
            alt="Krupa Korat"
            className="h-auto w-full max-w-[280px] rounded-3xl object-cover shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:max-w-xs md:max-w-sm"
          />
        </div>

        {/* Hero Content */}
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:pl-10 md:text-left lg:pl-16">

          {/* Intro */}
          <p className="mb-2 text-base font-medium text-text-muted">
            I'm
          </p>

          {/* Name */}
          <h1 className="text-3xl font-bold leading-tight text-heading transition-all duration-500 hover:tracking-wide sm:text-4xl md:text-5xl">
            Krupa Korat
          </h1>

          {/* Role */}
          <h3 className="mt-3 text-xl font-medium text-primary md:text-2xl">
            Full Stack Developer
          </h3>

          {/* Description */}
          <p className="mt-5 max-w-lg text-sm leading-7 text-text-muted sm:text-base md:text-lg">
            I build modern, responsive and scalable web applications using
            React, Node.js, Next.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row md:justify-start">

            <a
              href="#portfolio"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:text-base">
              View Projects
              {/* <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowUpRight size={18} />
              </span> */}
            </a>

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-surface sm:w-auto sm:text-base">
              Contact Me
              {/* <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FiArrowUpRight size={18} />
              </span> */}
            </a>

          </div>

          {/* Small Tech Stack */}
          <div className="mt-6 flex max-w-sm flex-wrap justify-center gap-2 md:justify-start">
            {["React", "Node.js", "Next.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;