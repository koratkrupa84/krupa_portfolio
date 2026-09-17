import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-6">
      {/* Glow effect behind the navbar */}
      <div className="pointer-events-none absolute left-1/2 top-2 h-14 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      {/* Main Glass Navbar */}
      <div className="relative mx-auto flex max-w-6xl items-center rounded-full border border-border/80 bg-surface/75 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)] shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(217,70,239,0.15)] md:px-4">
        
        {/* LEFT - LOGO */}
        <a
          href="#home"
          className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-card/60 transition-all duration-300 hover:border-primary/60 hover:bg-card hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]"
        >
          <img
            src="/assets/logo (3).png"
            alt="Krupa Korat"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
          {/* Subtle neon ring on hover */}
          <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>

        {/* LEFT DIVIDER */}
        <div className="mx-4 hidden h-7 w-px bg-border/80 md:block" />

        {/* CENTER NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border/50 bg-card/40 p-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider text-text/80 transition-all duration-300 hover:text-heading hover:bg-white/[0.04]"
              >
                {item.name}
                
                {/* Active/Hover Neon Dot Indicator */}
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-primary shadow-[0_0_8px_#D946EF] transition-transform duration-300 group-hover:scale-100" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT DIVIDER */}
        <div className="mx-4 hidden h-7 w-px bg-border/80 md:block" />

        {/* LET'S TALK BUTTON */}
        <a
          href="#contact"
          className="group/talk relative hidden shrink-0 items-center gap-2.5 overflow-hidden rounded-full border border-primary/40 bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(217,70,239,0.55)] md:flex"
        >
          {/* Light sweep animation */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/talk:translate-x-full" />
          
          <span>Let's Talk</span>
          <FaArrowRight
            size={11}
            className="transition-transform duration-300 group-hover/talk:translate-x-1"
          />
        </a>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-text transition-all duration-300 hover:border-primary/50 hover:text-primary md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-border/80 bg-surface/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 ring-1 ring-primary/30"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1.5 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-text transition-all duration-200 hover:bg-card hover:pl-6 hover:text-heading hover:shadow-[inset_3px_0_0_0_#D946EF]"
            >
              <span>{item.name}</span>
              <span className="text-xs text-text-muted">#</span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_15px_rgba(217,70,239,0.4)]"
          >
            Let's Talk
            <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;