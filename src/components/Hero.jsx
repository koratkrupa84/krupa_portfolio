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
    <section id="home" className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16 flex items-center">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px] md:h-96 md:w-96" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-64 w-64 rounded-full bg-primary-dark/20 blur-[110px]" />

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-8">
          
          {/* Hero Content (Left) */}
          <div className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
            
            {/* Status Pill */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium tracking-wide text-text-muted">
                Available for opportunities
              </span>
            </div>

            {/* Intro & Name */}
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              Hello, I'm
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Krupa Korat
            </h1>

            {/* Role with Gradient */}
            <h2 className="mt-3 bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
              Full Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-text/80 sm:text-base md:text-lg">
              Crafting high-performance web applications and resilient backends. Specializing in modern architecture with clean code, scalable APIs, and intuitive user experiences.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row md:justify-start">
              <a
                href="#portfolio"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(217,70,239,0.55)]"
              >
                <span>View Projects</span>
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/80 px-7 py-3.5 text-sm font-semibold tracking-wide text-text shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface hover:text-heading hover:shadow-[0_0_15px_rgba(217,70,239,0.15)]"
              >
                <span>Contact Me</span>
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-10 w-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted/80">
                Core Technologies
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="cursor-default rounded-lg border border-border/80 bg-card/50 px-3.5 py-1.5 text-xs font-medium text-text-muted shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_rgba(217,70,239,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Profile Image with Cyber Frame (Right) */}
          <div className="relative flex w-full justify-center md:w-2/5">
            {/* Glow Aura behind picture */}
            <div className="absolute inset-0 mx-auto max-w-[280px] rounded-3xl bg-gradient-to-tr from-primary to-primary-light opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-50 sm:max-w-xs md:max-w-sm" />

            <div className="group relative">
              <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card/60 p-1.5 shadow-2xl transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_35px_rgba(217,70,239,0.25)]">
                <img
                  src="/assets/images/krupa.jpeg"
                  alt="Krupa Korat"
                  className="h-auto w-full max-w-[270px] rounded-[22px] object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-xs md:max-w-sm"
                />
              </div>

              {/* Floating Badge (Developer Tag) */}
              <div className="absolute -bottom-4 -left-4 hidden items-center gap-2.5 rounded-2xl border border-border bg-surface/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <FiCode size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-text-muted">Specialty</p>
                  <p className="text-xs font-bold text-heading">MERN & Next.js</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;