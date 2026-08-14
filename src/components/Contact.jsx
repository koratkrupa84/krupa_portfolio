import {
     FaGithub,
     FaLinkedinIn,
     FaEnvelope,
     FaPhone,
     FaInstagram,
} from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          subject: "",
          message: "",
     });

     const [loading, setLoading] = useState(false);
     const [success, setSuccess] = useState(false);

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          try {
               setLoading(true);

               await emailjs.send(
                    "service_vbf3vq9",
                    "template_vrqwtv8",
                    {
                         name: formData.name,
                         email: formData.email,
                         title: formData.subject,
                         message: formData.message,
                    },
                    "iV1uBCiJB63rHNjD-"
               );

               setSuccess(true);

               setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
               });

               setTimeout(() => {
                    setSuccess(false);
               }, 5000);
          } catch (error) {
               // console.log("EmailJS Error:", error);
               // console.log("Status:", error?.status);
               // console.log("Text:", error?.text);

               // alert(error?.text || "Failed to send message");

               alert("Failed to send message");
          } finally {
               setLoading(false);
          }
     };

     return (
          <section id="contact" className="bg-background py-20">
               <div className="mx-auto max-w-6xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                         {/* Left Content */}
                         <div>
                              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                   Get In Touch
                              </p>

                              <h2 className="max-w-lg text-4xl font-bold leading-tight text-heading md:text-5xl">
                                   Let's talk about your{" "}
                                   <span className="text-primary">next project.</span>
                              </h2>

                              <p className="mt-4 max-w-md leading-7 text-text-muted">
                                   Have an idea, a project, or an opportunity you'd like to
                                   discuss? Feel free to reach out. I'd love to hear from you.
                              </p>

                              {/* Contact Info */}
                              <div className="mt-6 space-y-4">
                                   <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white">
                                             <FaEnvelope size={18} />
                                        </div>

                                        <div>
                                             <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                                                  Email
                                             </p>

                                             <a
                                                  href="https://mail.google.com/mail/?view=cm&fs=1&to=koratkrupa8@gmail.com"
                                                  target="_blank"
                                                  className="text-sm font-medium text-heading hover:text-primary"
                                             >
                                                  koratkrupa8@gmail.com
                                             </a>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white">
                                             <FaPhone size={18} />
                                        </div>

                                        <div>
                                             <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                                                  Phone
                                             </p>

                                             <a
                                                  // href="tel:+919313170134"
                                                  // target="_blank"
                                                  className="text-sm font-medium text-heading hover:text-primary"
                                             >
                                                  +91 93131 70134
                                             </a>
                                        </div>
                                   </div>

                                   <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white">
                                             <FaLocationDot size={18} />
                                        </div>

                                        <div>
                                             <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                                                  Location
                                             </p>

                                             <p className="text-sm font-medium text-heading">
                                                  Surat, Gujarat, India
                                             </p>
                                        </div>
                                   </div>
                              </div>

                              {/* Social Links */}
                              <div className="mt-7">
                                   <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                                        Follow Me
                                   </p>

                                   <div className="flex items-center gap-3">
                                        <a
                                             href="https://github.com/koratkrupa84"
                                             target="_blank"
                                             className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:shadow-md text-primary hover:border-primary hover:bg-primary hover:text-white"
                                        >
                                             <FaGithub size={18} />
                                        </a>

                                        <a
                                             href="https://in.linkedin.com/in/krupa-korat-6590bb3a9"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:shadow-md text-primary hover:border-primary hover:bg-primary hover:text-white"
                                        >
                                             <FaLinkedinIn size={18} />
                                        </a>

                                        {/* <a
                                             href="#"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:shadow-md text-primary hover:border-primary hover:bg-primary hover:text-white"
                                        >
                                             <FaInstagram size={18} />
                                        </a> */}
                                   </div>
                              </div>
                         </div>

                         {/* Contact Form */}
                         <div className="w-full max-w-xl justify-self-end rounded-2xl border border-border bg-card p-5 shadow-sm md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">

                              {success ? (
                                   <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                             <IoCheckmarkDoneCircle className="text-7xl text-primary" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-heading">
                                             Thank You!
                                        </h3>

                                        <p className="mt-3 max-w-sm text-text-muted">
                                             Your message has been sent successfully.
                                             I'll get back to you as soon as possible.
                                        </p>

                                   </div>
                              ) : (
                                   <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid gap-4 md:grid-cols-2">
                                             <div>
                                                  <label className="mb-1.5 block text-sm font-semibold text-heading">
                                                       Name
                                                  </label>

                                                  <input
                                                       type="text"
                                                       name="name"
                                                       value={formData.name}
                                                       onChange={handleChange}
                                                       placeholder="Your name"
                                                       className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
                                                  />
                                             </div>

                                             <div>
                                                  <label className="mb-1.5 block text-sm font-semibold text-heading">
                                                       Email
                                                  </label>

                                                  <input
                                                       type="email"
                                                       name="email"
                                                       value={formData.email}
                                                       onChange={handleChange}
                                                       placeholder="you@example.com"
                                                       className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
                                                  />
                                             </div>
                                        </div>

                                        <div>
                                             <label className="mb-1.5 block text-sm font-semibold text-heading">
                                                  Subject
                                             </label>

                                             <input
                                                  type="text"
                                                  name="subject"
                                                  value={formData.subject}
                                                  onChange={handleChange}
                                                  placeholder="Project subject"
                                                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
                                             />
                                        </div>

                                        <div>
                                             <label className="mb-1.5 block text-sm font-semibold text-heading">
                                                  Details
                                             </label>

                                             <textarea
                                                  rows={5}
                                                  name="message"
                                                  value={formData.message}
                                                  onChange={handleChange}
                                                  placeholder="Tell me about your project..."
                                                  className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
                                             />
                                        </div>

                                        <button
                                             type="submit"
                                             disabled={loading}
                                             className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60">
                                             {loading ? "Sending..." : "Send Message"}
                                        </button>
                                   </form>
                              )}
                         </div>

                    </div>
               </div>
          </section>
     );
}

export default Contact;