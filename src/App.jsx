import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Preloader from "./components/Preloader";
import Intro3D from "./components/Intro3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {showPreloader && (
        <Preloader
          isLoaded={isLoaded}
          onFinish={() => setShowPreloader(false)}
        />
      )}

      <div
        className={`min-h-screen bg-background text-text transition-opacity duration-700 ${
          showPreloader ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Intro3D />
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
