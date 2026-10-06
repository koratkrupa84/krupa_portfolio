import { useState } from "react";
import { FiPlus, FiBriefcase } from "react-icons/fi";

function Experience() {
  const [openExperience, setOpenExperience] = useState(0);

  const experiences = [
    {
      company: "ShipX Post Service Pvt. Ltd.",
      period: "Dec 2025 – Jan 2026",
      role: "Backend Developer Intern",
      description: [
        "Developed REST APIs using Node.js and Express.js.",
        "Worked with MongoDB for database operations.",
        "Tested and verified APIs using Postman.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
    },
    {
      company: "Prehost Technology",
      period: "July 2026 – Present",
      role: "Full Stack Developer",
      description: [
        "Developed full-stack web applications.",
        "Built responsive user interfaces using React.js.",
        "Developed backend APIs using Node.js and Express.js.",
        "Worked with MongoDB and Git for application development.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-primary-dark/20 blur-[110px]" />

      <div className="container relative mx-auto max-w-4xl px-3 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_#C1121F]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-light">
              Work Experience
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl md:text-4xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-text/80 sm:text-sm">
            My professional journey and hands-on experience building modern, scalable web applications.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {experiences.map((experience, index) => {
            const isOpen = openExperience === index;

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/50 bg-card/80 shadow-[0_0_20px_rgba(193,18,31,0.15)] backdrop-blur-md"
                    : "border-border/80 bg-card/40 hover:border-border hover:bg-card/60"
                }`}
              >
                {/* Active Top Highlight Bar */}
                {isOpen && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}

                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setOpenExperience(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Index / Icon Badge */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "border-primary/60 bg-primary/20 text-primary-light shadow-[0_0_10px_rgba(193,18,31,0.3)]"
                          : "border-border/70 bg-surface/80 text-text-muted"
                      }`}
                    >
                      <FiBriefcase size={16} />
                    </div>

                    {/* Company & Role */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`text-sm font-semibold transition-colors duration-200 sm:text-base ${
                            isOpen ? "text-heading" : "text-heading/90 hover:text-primary-light"
                          }`}
                        >
                          {experience.company}
                        </h3>
                        {/* Mobile Period Tag */}
                        <span className="rounded-md border border-border/60 bg-surface/70 px-2 py-0.5 text-[10px] text-text-muted sm:hidden">
                          {experience.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-medium text-primary-light">
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Desktop Period Tag */}
                    <span className="hidden text-xs font-medium text-text-muted sm:inline-block">
                      {experience.period}
                    </span>

                    {/* Toggle Button */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-sm transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-white shadow-[0_0_10px_#C1121F]"
                          : "border-border/80 bg-surface/70 text-text-muted hover:border-primary/50 hover:text-heading"
                      }`}
                    >
                      <FiPlus size={15} />
                    </span>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/60 px-4 pb-5 pt-3 sm:px-5 sm:pl-[72px]">
                      {/* Description List */}
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-text/80 sm:text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_6px_#C1121F]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Badges */}
                      {experience.technologies && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1 text-[11px] font-medium text-text-muted transition-colors duration-200 hover:border-primary/40 hover:text-heading"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;