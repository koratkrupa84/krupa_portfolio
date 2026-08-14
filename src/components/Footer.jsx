import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaArrowRight,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-dark text-white">
      <div className="container mx-auto px-5 py-14">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Existing Logo + Info */}
            <div className="flex items-center gap-4">
              <a href="#home" className="group shrink-0">
                <img
                  src="/assets/krupalogo.png"
                  alt="Krupa Korat"
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              </a>

              <div className="border-l border-white/10 pl-4">
                <p className="text-sm font-semibold text-white">
                  Krupa Korat
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Full Stack Developer
                </p>

                {/* <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-white/40">
                  <span>React</span>
                  <span>•</span>
                  <span>Node.js</span>
                  <span>•</span>
                  <span>MongoDB</span>
                </div> */}
              </div>
            </div>

            {/* Content Below */}
            <div className="mt-6 max-w-md">
              <p className="text-sm leading-7 text-white/55">
                I build modern and scalable web applications with a focus
                on clean design, smooth user experiences and reliable
                functionality.
              </p>

              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white">
                Let's work together
                <span className=" transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <nav className="flex flex-col items-start gap-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Portfolio", "#portfolio"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white">
                  <span className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <FaArrowRight size={13} />
                  </span>

                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-white/60">
              Have a project or opportunity in mind?
              Feel free to get in touch.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              <a
                href="https://github.com/koratkrupa84"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-primary-dark hover:shadow-lg " >
                <FaGithub size={17} />
              </a>

              <a
                href="https://in.linkedin.com/in/krupa-korat-6590bb3a9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-primary-dark hover:shadow-lg " >
                <FaLinkedinIn size={17} />
              </a>

              {/* <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-primary-dark hover:shadow-lg " >
                <FaInstagram size={17} />
              </a> */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=koratkrupa8@gmail.com"
                target="_blank"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-primary-dark hover:shadow-lg " >
                <FaEnvelope size={17} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © 2026 Krupa Korat. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            Designed &amp; Developed with{" "}
            <span className="inline-flex animate-pulse text-primary">
              <FaHeart size={10} />
            </span>{" "}
            by Krupa Korat
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center self-start rounded-lg border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white hover:text-primary-dark md:self-auto">
            <FaArrowUp size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;