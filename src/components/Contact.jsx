import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
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
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-14">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-16 top-1/4 h-48 w-48 rounded-full bg-primary/15 blur-[80px] sm:h-60 sm:w-60 sm:blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-primary-dark/20 blur-[80px] sm:h-60 sm:w-60 sm:blur-[90px]" />

      <div className="container relative mx-auto max-w-4xl px-3 sm:px-6">
        <div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-2">

          {/* Left Box - Compact Details */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/70 px-2.5 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_#D946EF]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-light">
                  Get In Touch
                </span>
              </div>

              <h2 className="mt-2 text-lg font-bold leading-tight text-heading sm:text-xl md:text-2xl">
                Let's talk about your{" "}
                <span className="bg-gradient-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
                  next project.
                </span>
              </h2>

              <p className="mt-1.5 text-xs leading-relaxed text-text/80">
                Have an idea, project, or an opportunity? Feel free to reach out. I'd love to collaborate.
              </p>

              {/* Contact Info Items */}
              <div className="mt-3.5 space-y-2 sm:mt-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=koratkrupa8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[44px] items-center gap-2.5 rounded-xl border border-border/70 bg-surface/60 p-2.5 transition-all duration-200 hover:border-primary/50 hover:bg-surface active:scale-[0.99]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                    <FaEnvelope size={13} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-text-muted">
                      Email
                    </p>
                    <p className="truncate text-xs font-medium text-heading group-hover:text-primary-light">
                      koratkrupa8@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919313170134"
                  className="group flex min-h-[44px] items-center gap-2.5 rounded-xl border border-border/70 bg-surface/60 p-2.5 transition-all duration-200 hover:border-primary/50 hover:bg-surface active:scale-[0.99]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                    <FaPhone size={13} />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-text-muted">
                      Phone
                    </p>
                    <p className="text-xs font-medium text-heading group-hover:text-primary-light">
                      +91 93131 70134
                    </p>
                  </div>
                </a>

                <div className="flex min-h-[44px] items-center gap-2.5 rounded-xl border border-border/70 bg-surface/60 p-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card text-primary">
                    <FaLocationDot size={13} />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-text-muted">
                      Location
                    </p>
                    <p className="text-xs font-medium text-heading">
                      Surat, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 border-t border-border/60 pt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                Connect With Me
              </p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="https://github.com/koratkrupa84"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                >
                  <FaGithub size={14} />
                </a>

                <a
                  href="https://in.linkedin.com/in/krupa-korat-6590bb3a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-95"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Box - Mobile Friendly Form */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-primary/40 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {success ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <IoCheckmarkDoneCircle className="text-3xl" />
                </div>
                <h3 className="text-base font-bold text-heading sm:text-lg">Message Sent!</h3>
                <p className="mt-1 max-w-xs text-xs text-text-muted">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-3">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-border/80 bg-surface/70 px-3 py-2 text-base text-heading placeholder-text-muted/50 outline-none transition-all duration-200 hover:border-border focus:border-primary focus:bg-surface focus:shadow-[0_0_8px_rgba(217,70,239,0.2)] sm:py-1.5 sm:text-xs"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border/80 bg-surface/70 px-3 py-2 text-base text-heading placeholder-text-muted/50 outline-none transition-all duration-200 hover:border-border focus:border-primary focus:bg-surface focus:shadow-[0_0_8px_rgba(217,70,239,0.2)] sm:py-1.5 sm:text-xs"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project subject"
                      className="w-full rounded-lg border border-border/80 bg-surface/70 px-3 py-2 text-base text-heading placeholder-text-muted/50 outline-none transition-all duration-200 hover:border-border focus:border-primary focus:bg-surface focus:shadow-[0_0_8px_rgba(217,70,239,0.2)] sm:py-1.5 sm:text-xs"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-text-muted ">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      className="min-h-[90px] w-full resize-none rounded-lg border border-border/80 bg-surface/70 px-3 py-2 text-base text-heading placeholder-text-muted/50 outline-none transition-all duration-200 hover:border-border focus:border-primary focus:bg-surface focus:shadow-[0_0_8px_rgba(217,70,239,0.2)] sm:min-h-[110px] sm:text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary via-primary to-primary-dark py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_12px_rgba(217,70,239,0.25)] transition-all duration-200 hover:shadow-[0_0_18px_rgba(217,70,239,0.45)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <FiSend size={12} />
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