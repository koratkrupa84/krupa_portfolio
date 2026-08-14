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
    skills: ["MVC", "REST APIs", "API Integration", "OAuth2"], // OAuth2 ઉમેર્યું
  },
  {
    category: "TOOLS",
    skills: ["Git", "GitHub", "Postman",, "Vercel"],
  },
  {
    category: "GRAPHIC DESIGN",
    skills: ["Canva", "Social Media Design", "Banner Design", "Poster Design", "Logo Design"],
  },
];

function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto min-h-[70vh] px-5 py-20">

        {/* About Content */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight text-heading md:text-4xl lg:text-5xl">
            Turning Ideas Into{" "}
            <span className="text-primary">Digital Experiences</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-text-muted md:text-lg">
            Full Stack Developer with practical experience in developing modern
            web applications using the MERN stack. I focus on building clean,
            responsive and scalable applications with great user experiences.
          </p>

          {/* Small highlight */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-primary/40" />
            <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
              Code • Design • Build
            </span>
            <span className="h-px w-10 bg-primary/40" />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-heading md:text-3xl">
              Skills
            </h2>

            <span className="text-sm text-text-muted">
              My Technical Stack
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            {skills.map((item, index) => (
              <div key={item.category} className="group rounded-[1.5rem] border border-border bg-card p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                {/* Card Header */}
                <div className="flex items-center gap-4">

                  {/* Number */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-surface text-base font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Category */}
                  <h3 className="text-lg font-semibold uppercase tracking-[0.08em] text-primary">
                    {item.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-8 space-y-3">
                  {item.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 text-sm text-text-muted transition-all duration-300 group-hover:text-text">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125"/>
                      <span>{skill}</span>
                    </div>
                  ))}
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