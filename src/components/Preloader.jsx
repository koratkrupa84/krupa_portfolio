import { useEffect, useState } from "react";
import { FiMonitor, FiServer, FiDatabase, FiCheck } from "react-icons/fi";

function Preloader({ isLoaded, onFinish }) {
  const [activeStage, setActiveStage] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => {
        if (!isLoaded) {
          return prev < 3 ? prev + 1 : 1;
        }
        return 3;
      });
    }, 600);

    return () => clearInterval(stageInterval);
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      setActiveStage(3);
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onFinish, 600);
      }, 400);

      return () => clearTimeout(exitTimer);
    }
  }, [isLoaded, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-background px-6 py-12 transition-all duration-700 ease-in-out ${
        isExiting
          ? "scale-105 opacity-0 pointer-events-none"
          : "scale-100 opacity-100"
      }`}
    >
      {/* Background Cyber Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3B2D54_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
        <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
          Full-Stack Pipeline Initializing
        </span>
      </div>

      {/* Center - Interactive Pipeline Architecture */}
      <div className="relative z-10 flex flex-col items-center">
        
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* NODE 1: CLIENT */}
          <div className="flex flex-col items-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-20 sm:w-20 ${
                activeStage >= 1
                  ? "border-primary bg-card text-primary shadow-[0_0_20px_rgba(217,70,239,0.35)] scale-105"
                  : "border-border bg-surface text-text-muted opacity-50"
              }`}
            >
              <FiMonitor size={28} />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-heading">
              Client
            </p>
            <span className="text-[10px] text-text-muted">React.js</span>
          </div>

          {/* CONNECTOR 1: Client to Server */}
          <div className="relative mb-8 h-1 w-12 overflow-hidden rounded-full bg-border sm:w-20">
            <div
              className={`h-full w-full bg-gradient-to-r from-primary to-primary-light transition-transform duration-500 ${
                activeStage >= 2 ? "translate-x-0" : "-translate-x-full"
              }`}
            />
          </div>

          {/* NODE 2: SERVER */}
          <div className="flex flex-col items-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-20 sm:w-20 ${
                activeStage >= 2
                  ? "border-primary bg-card text-primary shadow-[0_0_20px_rgba(217,70,239,0.35)] scale-105"
                  : "border-border bg-surface text-text-muted opacity-50"
              }`}
            >
              <FiServer size={28} />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-heading">
              Server
            </p>
            <span className="text-[10px] text-text-muted">Node / APIs</span>
          </div>

          {/* CONNECTOR 2: Server to Database */}
          <div className="relative mb-8 h-1 w-12 overflow-hidden rounded-full bg-border sm:w-20">
            <div
              className={`h-full w-full bg-gradient-to-r from-primary to-primary-light transition-transform duration-500 ${
                activeStage >= 3 ? "translate-x-0" : "-translate-x-full"
              }`}
            />
          </div>

          {/* NODE 3: DATABASE */}
          <div className="flex flex-col items-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-20 sm:w-20 ${
                activeStage >= 3
                  ? "border-primary bg-card text-primary shadow-[0_0_20px_rgba(217,70,239,0.35)] scale-105"
                  : "border-border bg-surface text-text-muted opacity-50"
              }`}
            >
              <FiDatabase size={28} />
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-heading">
              Database
            </p>
            <span className="text-[10px] text-text-muted">MongoDB</span>
          </div>

        </div>

        {/* Live Status Message */}
        <div className="mt-10 flex items-center gap-2 rounded-xl border border-border/80 bg-card/60 px-4 py-2 text-xs font-mono text-text backdrop-blur-md">
          {isLoaded ? (
            <>
              <FiCheck className="text-primary" size={15} />
              <span className="text-heading">All Systems Connected & Ready</span>
            </>
          ) : (
            <>
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
              <span>
                {activeStage === 1 && "Booting Client UI & Components..."}
                {activeStage === 2 && "Handshaking REST APIs & Routes..."}
                {activeStage === 3 && "Fetching Collections & Media Assets..."}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 flex w-full max-w-md justify-between text-[11px] font-mono text-text-muted/60">
        <span>STATUS: {isLoaded ? "200 OK" : "CONNECTING..."}</span>
        <span>PORTFOLIO SYSTEM</span>
      </div>
    </div>
  );
}

export default Preloader;