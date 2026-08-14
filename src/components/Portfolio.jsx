import { useState } from "react";

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
          <section id="portfolio" className="bg-background">
               <div className="container mx-auto flex flex-col items-center px-5 py-14 sm:px-6 sm:py-16 md:py-20">
                    {/* Section Header */}
                    <div className="mb-14 text-center">
                         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                              My Work
                         </p>

                         <h2 className="text-3xl font-bold leading-tight text-heading sm:text-4xl md:text-5xl">
                              Featured Projects
                         </h2>

                         <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                              A selection of projects I've built using modern technologies,
                              clean architecture, and practical development approaches.
                         </p>
                    </div>

                    {/* Project List */}
                    <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
                         {projects.map((project, index) => (
                              <div
                                   key={index}
                                   onClick={() => openProject(project)}
                                   className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                              >

                                   <div className="flex aspect-video w-full items-center justify-center overflow-hidden bg-surface p-3 sm:p-4">
                                        <img
                                             src={project.images[0]}
                                             alt={project.title}
                                             className="h-full w-full rounded-2xl object-contain transition duration-700 group-hover:scale-[1.02]"
                                        />
                                   </div>

                                   <div className="pointer-events-none absolute inset-0 hidden items-end bg-gradient-to-t from-heading/60 via-heading/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex">
                                        <div className="p-5 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                             <p className="mb-1 text-sm text-white/80">
                                                  {project.category}
                                             </p>

                                             <h3 className="text-2xl font-bold text-white">
                                                  {project.title}
                                             </h3>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Project Modal */}
                    {selectedProject && (
                         <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-heading/60 p-3 backdrop-blur-sm sm:p-5" onClick={closeProject}>
                              <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8"
                                   onClick={(e) => e.stopPropagation()}>
                                   {/* Close Button */}
                                   <button type="button" onClick={closeProject} className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-surface text-sm text-text shadow-sm transition hover:bg-primary hover:text-white sm:right-5 sm:top-5 sm:h-10 sm:w-10">
                                        ✕
                                   </button>

                                   {/* Image Slider */}
                                   <div className="relative flex items-center justify-center">

                                        {selectedProject.images.length > 1 && (
                                             <button type="button" onClick={prevImage} className="absolute left-3 z-10 rounded-full bg-card/90 px-4 py-2 text-xl text-text shadow-md transition hover:bg-primary hover:text-white">
                                                  ❮
                                             </button>
                                        )}

                                        <div className="flex min-h-[180px] items-center justify-center rounded-2xl bg-surface p-2 sm:min-h-[250px] sm:p-4">
                                             <img
                                                  src={selectedProject.images[currentImage]}
                                                  alt={selectedProject.title}
                                                  className="max-h-[55vh] w-full rounded-xl object-contain sm:rounded-2xl"
                                             />
                                        </div>

                                        {selectedProject.images.length > 1 && (
                                             <button type="button" onClick={nextImage} className="absolute right-3 z-10 rounded-full bg-card/90 px-4 py-2 text-xl text-text shadow-md transition hover:bg-primary hover:text-white">
                                                  ❯
                                             </button>
                                        )}
                                   </div>

                                   {/* Project Details */}
                                   <div className="mt-10">

                                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                                             {selectedProject.category}
                                        </p>

                                        <h2 className="mt-2 text-2xl font-bold leading-tight text-heading sm:text-3xl">
                                             {selectedProject.title}
                                        </h2>

                                        <p className="mt-4 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                                             {selectedProject.description}
                                        </p>

                                        {/* Features */}
                                        <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-heading">
                                             Key Features
                                        </h4>

                                        <ul className="mt-4 space-y-3">
                                             {selectedProject.features.map((feature, index) => (
                                                  <li
                                                       key={index}
                                                       className="flex items-start gap-3 text-sm leading-6 text-text-muted"
                                                  >
                                                       <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                       <span>{feature}</span>
                                                  </li>
                                             ))}
                                        </ul>

                                        {/* Technologies */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                             {selectedProject.technologies.map((tech) => (
                                                  <span
                                                       key={tech}
                                                       className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text"
                                                  >
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>

                                        {/* Buttons */}
                                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                                             <a
                                                  href={selectedProject.liveUrl || "#"}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  onClick={(e) => {
                                                       if (!selectedProject.liveUrl) e.preventDefault();
                                                       e.stopPropagation();
                                                  }}
                                                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition sm:w-auto ${selectedProject.liveUrl
                                                            ? "bg-primary text-white hover:bg-primary-dark"
                                                            : "cursor-not-allowed bg-surface text-text-muted"
                                                       }`}
                                             >
                                                  Live Demo
                                             </a>

                                             <a
                                                  href={selectedProject.githubUrl || "#"}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  onClick={(e) => {
                                                       if (!selectedProject.githubUrl) e.preventDefault();
                                                       e.stopPropagation();
                                                  }}
                                                  className={`inline-flex w-full items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition sm:w-auto ${selectedProject.githubUrl
                                                            ? "border-border bg-background text-text hover:bg-surface"
                                                            : "cursor-not-allowed border-border bg-surface text-text-muted"
                                                       }`}
                                             >
                                                  GitHub
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