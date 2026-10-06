import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaArrowRight,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/80 bg-surface/90 text-text">
      {/* Background Neon Glow Accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="container relative mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:py-14">
        {/* Main Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5">
              <a
                href="#home"
                className="group flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-card/60 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(193,18,31,0.3)]"
              >
                <img
                  src="/assets/logo (3).png"
                  alt="Krupa Korat"
                  className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <div className="border-l border-border/80 pl-3.5">
                <p className="text-sm font-bold tracking-wide text-heading">
                  Krupa Korat
                </p>
                <p className="text-xs font-medium text-primary-light">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-text-muted sm:text-sm">
              I build modern, scalable web applications with a focus on clean code, responsive design, and intuitive user experiences.
            </p>

            <a
              href="#contact"
              className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text transition-colors duration-300 hover:text-primary-light"
            >
              <span>Let's work together</span>
              <FaArrowRight
                size={12}
                className="text-primary transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-heading">
              Quick Links
            </h3>
            <nav className="flex flex-col items-start gap-2.5">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-xs text-text-muted transition-all duration-200 hover:translate-x-1 hover:text-heading sm:text-sm"
                >
                  <span className="text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <FaArrowRight size={10} />
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-heading">
              Let's Connect
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-text-muted sm:text-sm">
              Have a project or opportunity in mind? Feel free to reach out anytime.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/koratkrupa84"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card/70 text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_0_12px_#C1121F]"
              >
                <FaGithub size={15} />
              </a>

              <a
                href="https://in.linkedin.com/in/krupa-korat-6590bb3a9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card/70 text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_0_12px_#C1121F]"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=koratkrupa8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card/70 text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_0_12px_#C1121F]"
              >
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-5 text-xs text-text-muted/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Krupa Korat. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Designed &amp; Developed with</span>
            <span className="inline-flex animate-pulse text-primary">
              <FaHeart size={11} />
            </span>
            <span>by Krupa Korat</span>
          </p>

          {/* Back To Top Button */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center self-start rounded-lg border border-border/80 bg-card/60 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary hover:text-white hover:shadow-[0_0_10px_#C1121F] md:self-auto"
          >
            <FaArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;