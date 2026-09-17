import { useState } from "react";
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "Doctor Appointment Booking System",
      category: "Full Stack Development",
      description:
        "A full-stack healthcare platform designed to simplify doctor discovery, appointment booking, and patient management with secure role-based access.",
      features: [
        "Role-based access for Patient, Doctor & Admin",
        "JWT authentication and authorization",
        "Doctor and patient management",
        "Online appointment booking",
        "RESTful API architecture",
        "Responsive healthcare interface",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST API",
      ],
      images: [
        "/assets/images/projects/doctor-appointment-1.png",
      ],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Event Management System",
      category: "Full Stack Development",
      description:
        "A modern event management platform for creating, discovering, booking, and managing events with secure authentication and an admin dashboard.",
      features: [
        "Event creation and management",
        "Event booking system",
        "Google Authentication",
        "User and event management",
        "Admin dashboard",
        "MongoDB database management",
        "RESTful APIs",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Auth",
        "REST API",
      ],
      images: [
        "/assets/images/projects/event-management-1.png",
      ],
      liveUrl: "",
      githubUrl: "",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage(
      (currentImage + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-16 md:py-20">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-primary-dark/20 blur-[120px]" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_#D946EF]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-light">
              My Work
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-heading sm:text-3xl md:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-text/80 sm:text-sm">
            A selection of full-stack projects built using scalable architecture, clean code, and robust database management.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_0_25px_rgba(217,70,239,0.18)]"
            >
              {/* Subtle top neon line on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Project Image Preview Box */}
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-border/60 bg-surface/70 p-4">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 rounded-lg border border-border/80 bg-card/80 px-2.5 py-1 text-[11px] font-medium text-text-muted backdrop-blur-md">
                  Click to View
                </span>
              </div>

              {/* Project Info Bottom Card */}
              <div className="p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-light">
                  {project.category}
                </p>

                <h3 className="mt-1 text-lg font-bold text-heading transition-colors duration-200 group-hover:text-primary-light sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1 text-[11px] font-medium text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-md border border-border/70 bg-surface/80 px-2 py-1 text-[11px] font-medium text-primary-light">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-md"
            onClick={closeProject}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border/80 bg-surface/95 p-5 shadow-[0_0_40px_rgba(0,0,0,0.7)] ring-1 ring-primary/30 backdrop-blur-xl sm:p-7"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeProject}
                className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-card/80 text-text-muted transition-all hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Close modal"
              >
                <FiX size={16} />
              </button>

              {/* Image Slider */}
              <div className="relative flex items-center justify-center">
                {selectedProject.images.length > 1 && (
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/80 text-text transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                )}

                <div className="flex min-h-[200px] w-full items-center justify-center rounded-xl border border-border/70 bg-card/50 p-3 sm:min-h-[260px]">
                  <img
                    src={selectedProject.images[currentImage]}
                    alt={selectedProject.title}
                    className="max-h-[50vh] w-full rounded-lg object-contain"
                  />
                </div>

                {selectedProject.images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/80 text-text transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <FiChevronRight size={18} />
                  </button>
                )}
              </div>

              {/* Project Details */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-light">
                  {selectedProject.category}
                </p>

                <h3 className="mt-1 text-xl font-bold text-heading sm:text-2xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-text/80 sm:text-sm">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-heading">
                  Key Features
                </h4>
                <ul className="mt-2.5 space-y-1.5">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs text-text/80 sm:text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_6px_#D946EF]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/70 bg-card/70 px-2.5 py-1 text-xs font-medium text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row">
                  <a
                    href={selectedProject.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.liveUrl) e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all sm:w-auto ${
                      selectedProject.liveUrl
                        ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_22px_rgba(217,70,239,0.5)]"
                        : "cursor-not-allowed border border-border/70 bg-card/60 text-text-muted/60"
                    }`}
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={14} />
                  </a>

                  <a
                    href={selectedProject.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.githubUrl) e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all sm:w-auto ${
                      selectedProject.githubUrl
                        ? "border-border bg-card/70 text-text hover:border-primary hover:bg-card hover:text-white"
                        : "cursor-not-allowed border-border/60 bg-card/30 text-text-muted/60"
                    }`}
                  >
                    <FiGithub size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;