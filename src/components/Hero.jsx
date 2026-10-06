import { FiArrowUpRight, FiCode } from "react-icons/fi";

function Hero() {
  const techStack = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background pt-20 pb-14 sm:pt-24 sm:pb-20"
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] animate-red-pulse md:h-[420px] md:w-[420px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-primary-dark/25 blur-[120px] animate-red-pulse" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.15]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-8 sm:gap-12 md:flex-row md:gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="flex w-full flex-col items-center text-center md:w-[55%] md:items-start md:text-left">
            {/* Status */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/70 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium tracking-wide text-text-muted">
                Available for opportunities
              </span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Hello, I'm
            </p>

            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
              Krupa Korat
            </h1>

            <h2 className="mt-3 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
              Full Stack Developer
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-text/80 sm:text-base md:text-[17px]">
              Crafting high-performance web applications and resilient
              backends. Specializing in modern architecture with clean code,
              scalable APIs, and intuitive user experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row md:justify-start">
              <a
                href="#portfolio"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_24px_rgba(193,18,31,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(193,18,31,0.55)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span>View Projects</span>
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/80 px-7 py-3.5 text-sm font-semibold tracking-wide text-text shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface hover:text-heading hover:shadow-[0_0_18px_rgba(193,18,31,0.2)]"
              >
                <span>Contact Me</span>
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 w-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Core Technologies
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="cursor-default rounded-lg border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-text-muted shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card hover:text-primary hover:shadow-[0_0_14px_rgba(193,18,31,0.25)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Profile Image with 3D float */}
          <div className="relative flex w-full justify-center md:w-[45%]">
            <div className="perspective-1000 relative">
              {/* Glow behind */}
              <div className="absolute inset-0 mx-auto max-w-[280px] rounded-[2rem] bg-gradient-to-tr from-primary to-primary-light opacity-15 blur-2xl animate-red-pulse sm:max-w-xs md:max-w-sm" />

              <div className="group relative animate-float">
                {/* 3D Card */}
                <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-border/70 bg-card/70 p-1.5 shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_12px_30px_rgba(193,18,31,0.12)]">
                  <img
                    src="/assets/images/krupa1.png"
                    alt="Krupa Korat"
                    className="h-auto w-full max-w-[220px] rounded-[1.4rem] object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:max-w-[260px] md:max-w-[320px]"
                  />

                  {/* Shine sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full rounded-[1.4rem] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 -left-3 hidden items-center gap-2.5 rounded-2xl border border-border bg-surface/95 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex animate-float">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <FiCode size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-text-muted">
                      Specialty
                    </p>
                    <p className="text-xs font-bold text-heading">
                      MERN & Next.js
                    </p>
                  </div>
                </div>

                {/* Decorative floating dots */}
                <div className="absolute -right-4 top-8 h-3 w-3 rounded-full bg-primary/80 shadow-[0_0_12px_#C1121F] animate-float" />
                <div className="absolute -left-2 top-1/3 h-2 w-2 rounded-full bg-primary-light/70 shadow-[0_0_10px_#E63946] animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
