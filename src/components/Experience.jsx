import { useState } from "react";

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
                    "Tested and verified APIs using Postman."
               ],

               technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Postman"
               ]
          },

          {
               company: "Prehost Technology",
               period: "July 2026 – Present",
               role: "Full Stack Developer",

               description: [
                    "Developed full-stack web applications.",
                    "Built responsive user interfaces using React.js.",
                    "Developed backend APIs using Node.js and Express.js.",
                    "Worked with MongoDB and Git for application development."
               ],

               technologies: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Git"
               ]
          }
     ];


     return (
          <>
               <section id="experience" className="bg-background">
                    <div className="container mx-auto px-5 py-20">
                                                  
                         {/* Heading */}
                         <div className="mb-14 text-center">
                              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                   Work Experience
                              </p>

                              <h2 className="text-3xl font-bold text-heading md:text-4xl">
                                   Experience & Journey
                              </h2>

                              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-muted">
                                   My professional journey and the experience I've gained
                                   building modern web applications.
                              </p>
                         </div>

                         {/* Accordion */}
                         <div className="mx-auto max-w-5xl">

                              {experiences.map((experience, index) => {
                                   const isOpen = openExperience === index;

                                   return (
                                        <div
                                             key={index}
                                             className="border-t border-border last:border-b"
                                        >

                                             {/* Accordion Header */}
                                             <button type="button" onClick={() => setOpenExperience(isOpen ? null : index)}
                                                  className=" group flex w-full items-center gap-5 py-7 text-left transition-all duration-300">
                                                  {/* Number */}
                                                  <span className={`w-8 shrink-0 text-sm font-semibold transition-colors duration-300 ${isOpen ? "text-primary" : "text-text-muted"}`}>
                                                       {String(index + 1).padStart(2, "0")}
                                                  </span>

                                                  {/* Company + Role */}
                                                  <div className="min-w-0 flex-1">
                                                       <h3 className={`text-lg font-semibold transition-colors duration-300 md:text-xl ${isOpen ? "text-primary" : "text-heading group-hover:text-primary"}`}>
                                                            {experience.company}
                                                       </h3>

                                                       <p className="mt-1 text-sm text-text-muted">
                                                            {experience.role}
                                                       </p>
                                                  </div>

                                                  {/* Period */}
                                                  <span className="hidden shrink-0 text-sm text-text-muted sm:block">
                                                       {experience.period}
                                                  </span>

                                                  {/* Plus / Minus */}
                                                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-lg transition-all duration-300 ${isOpen ? "rotate-45 border-primary bg-primary text-white" : "group-hover:border-primary group-hover:text-primary"}`}>
                                                       +
                                                  </span>

                                             </button>

                                             {/* Accordion Content */}
                                             <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                                  <div className="overflow-hidden">

                                                       <div className="pb-8 pl-[52px] pr-4 md:pl-[52px] md:pr-16">

                                                            {/* Mobile Period */}
                                                            <p className="mb-4 text-xs font-medium text-text-muted sm:hidden">
                                                                 {experience.period}
                                                            </p>

                                                            {/* Description */}
                                                            <ul className="max-w-3xl space-y-3">
                                                                 {experience.description.map((item, i) => (
                                                                      <li key={i} className="flex gap-3 text-sm leading-6 text-text-muted md:text-base">
                                                                           <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                                                                           <span>{item}</span>
                                                                      </li>
                                                                 ))}
                                                            </ul>

                                                            {/* Technologies */}
                                                            {experience.technologies && (
                                                                 <div className="mt-6 flex flex-wrap gap-2">
                                                                      {experience.technologies.map((tech) => (
                                                                           <span key={tech} className=" rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted transition-all duration-300 hover:border-primary hover:text-primary">
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
          </>
     );
}

export default Experience;