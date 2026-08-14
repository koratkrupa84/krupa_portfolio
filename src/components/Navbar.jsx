import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     return (

          <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-primary-dark px-5 py-4 backdrop-blur-xl">
               {/* Mobile Navigation */}
               <div
                    className={`absolute left-0 top-full w-full border-t border-white/10 bg-primary-dark/95 px-5 py-5 backdrop-blur-xl transition-all duration-300 md:hidden ${isMenuOpen
                              ? "visible translate-y-0 opacity-100"
                              : "invisible -translate-y-2 opacity-0"
                         }`}
               >
                    <div className="flex flex-col gap-2">

                         <a
                              href="#home"
                              onClick={() => setIsMenuOpen(false)}
                              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                         >
                              Home
                         </a>

                         <a
                              href="#about"
                              onClick={() => setIsMenuOpen(false)}
                              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                         >
                              About
                         </a>

                         <a
                              href="#experience"
                              onClick={() => setIsMenuOpen(false)}
                              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                         >
                              Experience
                         </a>

                         <a
                              href="#portfolio"
                              onClick={() => setIsMenuOpen(false)}
                              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                         >
                              Portfolio
                         </a>

                         <a
                              href="#contact"
                              onClick={() => setIsMenuOpen(false)}
                              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                         >
                              Contact
                         </a>

                    </div>
               </div>
               <div className="mx-auto flex max-w-7xl items-center justify-between">

                    <a href="#home" className="group flex items-center">
                         <img
                              src="/assets/krupalogo.png"
                              alt="Krupa Korat"
                              className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                         />
                    </a>

                    {/* Navigation */}
                    <div className="hidden items-center gap-2 md:flex">

                         <a
                              href="#home"
                              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                         >
                              Home
                              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
                         </a>

                         <a
                              href="#about"
                              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                         >
                              About
                              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
                         </a>

                         <a
                              href="#experience"
                              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                         >
                              Experience
                              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
                         </a>

                         <a
                              href="#portfolio"
                              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                         >
                              Portfolio
                              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
                         </a>

                         <a
                              href="#contact"
                              className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                         >
                              Contact
                              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
                         </a>

                    </div>
                    {/* Mobile Menu Button */}
                    <button
                         onClick={() => setIsMenuOpen(!isMenuOpen)}
                         className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:hidden"
                         aria-label="Toggle navigation menu"
                    >
                         {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                    {/* Hire Me Button */}
                    <a
                         href="#contact"
                         className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl md:flex">
                         Let's Talk

                         <span className="transition-transform duration-300 group-hover:translate-x-1">
                              <FaArrowRight size={13} />
                         </span>
                    </a>

               </div>
          </nav>
     );
}

export default Navbar;