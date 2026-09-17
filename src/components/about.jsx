const skills = [
  {
    category: "PROGRAMMING",
    skills: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    category: "FRONTEND",
    skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "React.js", "Next.js"],
  },
  {
    category: "BACKEND",
    skills: ["Node.js", "Express.js", "NestJS", "Django", "FastAPI", "JWT Authentication", "Auth0"],
  },
  {
    category: "DATABASE",
    skills: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"],
  },
  {
    category: "CONCEPTS & ARCHITECTURE",
    skills: ["MVC", "REST APIs", "API Integration", "OAuth2"],
  },
  {
    category: "TOOLS",
    skills: ["Git", "GitHub", "Postman", "Vercel"],
  },
  {
    category: "GRAPHIC DESIGN",
    skills: ["Canva", "Social Media Design", "Banner Design", "Poster Design", "Logo Design"],
  },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-primary-dark/15 blur-[120px]" />

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-12">
        {/* About Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#D946EF]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              About Me
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-heading sm:text-4xl lg:text-5xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-text/80 sm:text-lg">
            Full Stack Developer with practical experience in crafting modern, high-performance web applications using the MERN stack. Focused on clean architecture, scalable REST APIs, and refined user interfaces.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-primary/40" />
            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Code • Architecture • Build
            </span>
            <span className="h-px w-10 bg-primary/40" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="mb-10 flex flex-col items-start justify-between gap-2 border-b border-border/60 pb-5 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-2xl font-bold text-heading sm:text-3xl">
                Technical Expertise
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                Core technologies, architectures, and tools I use
              </p>
            </div>
            <span className="rounded-full border border-border/80 bg-surface/80 px-3.5 py-1 text-xs font-medium text-text-muted">
              {skills.reduce((acc, cat) => acc + cat.skills.length, 0)}+ Technologies
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((item, index) => (
              <div
                key={item.category}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_0_25px_rgba(217,70,239,0.15)]"
              >
                {/* Top Subtle Light Line on Card Hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-heading transition-colors duration-300 group-hover:text-primary">
                      {item.category}
                    </h4>
                    <span className="text-xs font-mono font-semibold text-text-muted/60 transition-colors duration-300 group-hover:text-primary-light">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Skills Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border/60 bg-surface/70 px-3 py-1.5 text-xs font-medium text-text transition-all duration-200 group-hover:border-primary/30 group-hover:bg-surface hover:!border-primary hover:!text-primary-light hover:!shadow-[0_0_8px_rgba(217,70,239,0.25)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;