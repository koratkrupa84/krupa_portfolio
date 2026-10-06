import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiLayers,
  FiDatabase,
  FiServer,
  FiGitBranch,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

function lerp(a, b, t) {
  return a + (b - a) * t;
}
function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function Intro3D() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, rawX: 0, rawY: 0, active: false });
  const smoothRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const ripplesRef = useRef([]);
  const tickRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [, setFrame] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const count = isMobile ? 24 : 60;
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00035,
        vy: (Math.random() - 0.5) * 0.00035,
        r: 1 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
        trail: [],
      });
    }
    particlesRef.current = pts;
  }, [isMobile]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e) => {
      if (window.innerWidth < 768) return;
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseRef.current = {
        x: nx,
        y: ny,
        rawX: e.clientX - rect.left,
        rawY: e.clientY - rect.top,
        active: true,
      };
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    const onClick = (e) => {
      const rect = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0]?.clientX : e.clientX;
      const clientY = e.touches ? e.touches[0]?.clientY : e.clientY;
      if (clientX == null) return;
      ripplesRef.current.push({
        x: clientX - rect.left,
        y: clientY - rect.top,
        r: 0,
        life: 1,
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("click", onClick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    let raf;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resize = () => {
      if (!canvas || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let lastFrame = 0;

    const loop = (now) => {
      tickRef.current = now / 1000;
      const t = tickRef.current;
      const mobile = window.innerWidth < 768;

      smoothRef.current.x = lerp(smoothRef.current.x, mouseRef.current.x, 0.06);
      smoothRef.current.y = lerp(smoothRef.current.y, mouseRef.current.y, 0.06);

      if (now - lastFrame > (mobile ? 66 : 50)) {
        lastFrame = now;
        setFrame((f) => f + 1);
      }

      if (ctx && canvas) {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        const mx = mouseRef.current.active ? mouseRef.current.rawX : w / 2;
        const my = mouseRef.current.active ? mouseRef.current.rawY : h / 2;
        const pts = particlesRef.current;

        for (const p of pts) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = 1;
          if (p.x > 1) p.x = 0;
          if (p.y < 0) p.y = 1;
          if (p.y > 1) p.y = 0;

          const px = p.x * w;
          const py = p.y * h;

          if (mouseRef.current.active && !mobile) {
            const d = dist(px, py, mx, my);
            if (d < 180) {
              const force = (1 - d / 180) * 0.014;
              p.x += ((mx - px) / w) * force;
              p.y += ((my - py) / h) * force;
            }
            if (d < 40) {
              const force = (1 - d / 40) * 0.008;
              p.x -= ((mx - px) / w) * force;
              p.y -= ((my - py) / h) * force;
            }
          }

          if (!mobile) {
            p.trail.push({ x: px, y: py });
            if (p.trail.length > 5) p.trail.shift();
          }
        }

        // connections (fewer on mobile)
        const maxDist = mobile ? 90 : 120;
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i];
            const b = pts[j];
            const ax = a.x * w;
            const ay = a.y * h;
            const bx = b.x * w;
            const by = b.y * h;
            const d = dist(ax, ay, bx, by);
            if (d < maxDist) {
              ctx.beginPath();
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
              ctx.strokeStyle = `rgba(193,18,31,${0.12 * (1 - d / maxDist)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        for (const p of pts) {
          const px = p.x * w;
          const py = p.y * h;
          const pulse = 0.5 + Math.sin(t * 2.4 + p.phase) * 0.35;

          if (!mobile && p.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let k = 1; k < p.trail.length; k++) {
              ctx.lineTo(p.trail[k].x, p.trail[k].y);
            }
            ctx.strokeStyle = `rgba(193,18,31,0.12)`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(px, py, p.r * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(193,18,31,${0.3 + pulse * 0.4})`;
          ctx.fill();
        }

        ripplesRef.current = ripplesRef.current.filter((r) => r.life > 0);
        for (const r of ripplesRef.current) {
          r.r += 3.5;
          r.life -= 0.02;
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(193,18,31,${r.life * 0.45})`;
          ctx.lineWidth = 2 * r.life;
          ctx.stroke();
        }

        if (mouseRef.current.active && !mobile) {
          const pulse = 0.75 + Math.sin(t * 3.5) * 0.25;
          ctx.beginPath();
          ctx.arc(mx, my, 22 * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(193,18,31,${0.3 * pulse})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.beginPath();
          ctx.setLineDash([4, 6]);
          ctx.arc(mx, my, 34 + Math.sin(t * 2) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(193,18,31,0.18)`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(mx, my, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(193,18,31,0.7)";
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const sx = isMobile ? 0 : smoothRef.current.x;
  const sy = isMobile ? 0 : smoothRef.current.y;
  const t = tickRef.current;

  const allCards = [
    { Icon: FaReact, label: "React", top: 22, left: 8, size: 54, speed: 1.1, depth: 1.0, phase: 0, mobile: true },
    { Icon: FaNodeJs, label: "Node.js", top: 26, left: 82, size: 50, speed: 1.3, depth: 1.4, phase: 1.2, mobile: true },
    { Icon: FiDatabase, label: "MongoDB", top: 68, left: 9, size: 50, speed: 0.9, depth: 0.8, phase: 2.1, mobile: true },
    { Icon: FaJs, label: "JavaScript", top: 62, left: 84, size: 48, speed: 1.2, depth: 1.2, phase: 0.6, mobile: true },
    { Icon: FiLayers, label: "Next.js", top: 48, left: 4, size: 46, speed: 1.5, depth: 1.6, phase: 1.8, mobile: false },
    { Icon: FiServer, label: "Express", top: 42, left: 91, size: 46, speed: 1.0, depth: 1.1, phase: 2.5, mobile: false },
    { Icon: FaHtml5, label: "HTML", top: 78, left: 32, size: 44, speed: 1.15, depth: 1.3, phase: 0.9, mobile: false },
    { Icon: FaCss3Alt, label: "CSS / Tailwind", top: 20, left: 50, size: 44, speed: 0.85, depth: 0.9, phase: 1.5, mobile: false },
    { Icon: FiGitBranch, label: "Git", top: 75, left: 58, size: 44, speed: 1.05, depth: 1.15, phase: 1.7, mobile: false },
    { Icon: FaPython, label: "Python", top: 55, left: 18, size: 44, speed: 1.25, depth: 1.25, phase: 0.3, mobile: false },
  ];

  const floatCards = isMobile
    ? allCards.filter((c) => c.mobile).map((c) => ({ ...c, size: 42, top: c.top + 4 }))
    : allCards;

  const orbitIcons = [
    { Icon: FaReact, angle: 0, radius: isMobile ? 78 : 100 },
    { Icon: FaNodeJs, angle: 120, radius: isMobile ? 78 : 100 },
    { Icon: FiDatabase, angle: 240, radius: isMobile ? 78 : 100 },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-background pt-28 pb-12 sm:pt-32 sm:pb-16 ${
        isMobile ? "cursor-auto" : "cursor-none"
      }`}
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />

      <div
        className="pointer-events-none absolute z-[1] h-[240px] w-[240px] rounded-full bg-primary/10 blur-[90px] sm:h-[360px] sm:w-[360px] sm:blur-[110px]"
        style={{
          left: `calc(50% + ${sx * 140}px)`,
          top: `calc(50% + ${sy * 90}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 z-[2] perspective-1000 sm:top-28">
        {floatCards.map(({ Icon, label, top, left, size, speed, depth, phase }, i) => {
          const floatY = Math.sin(t * 1.3 + phase) * (isMobile ? 6 : 12);
          const floatX = Math.cos(t * 0.9 + phase) * (isMobile ? 4 : 7);
          const rot = isMobile ? 0 : Math.sin(t * 0.7 + phase) * 5;

          const cardCx = (left / 100) * 2 - 1;
          const cardCy = (top / 100) * 2 - 1;
          const dCursor = isMobile ? 99 : dist(cardCx, cardCy, sx, sy);
          const magnet = dCursor < 0.85 ? (1 - dCursor / 0.85) * 20 : 0;
          const pullX = dCursor < 0.85 ? (sx - cardCx) * magnet : 0;
          const pullY = dCursor < 0.85 ? (sy - cardCy) * magnet : 0;
          const scale = dCursor < 0.65 ? 1 + (1 - dCursor / 0.65) * 0.2 : 1;

          return (
            <div
              key={i}
              title={label}
              className="absolute flex items-center justify-center rounded-2xl border border-border/50 bg-card/90 text-primary shadow-lg backdrop-blur-md"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                transform: `
                  translateX(${sx * 26 * speed + floatX + pullX}px)
                  translateY(${sy * 20 * speed + floatY + pullY}px)
                  rotateX(${sy * -12 * depth}deg)
                  rotateY(${sx * 12 * depth + rot}deg)
                  translateZ(${depth * 36}px)
                  scale(${scale})
                `,
                boxShadow:
                  dCursor < 0.65
                    ? `0 16px 40px rgba(193,18,31,0.22)`
                    : `0 10px 24px rgba(193,18,31,0.07)`,
              }}
            >
              <Icon size={size * 0.4} />
            </div>
          );
        })}
      </div>

      <div
        className="relative z-10 flex flex-col items-center px-4 sm:px-6"
        style={{
          transform: isMobile
            ? "none"
            : `
            translateX(${sx * -12}px)
            translateY(${sy * -8}px)
            rotateX(${sy * 5}deg)
            rotateY(${sx * -5}deg)
          `,
        }}
      >
        <div className="relative mb-5 flex h-32 w-32 items-center justify-center sm:mb-7 sm:h-40 sm:w-40 md:h-48 md:w-48">
          <div
            className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary/70"
            style={{ transform: `rotate(${t * 32 + sx * 20}deg)` }}
          />
          <div
            className="absolute inset-2 rounded-full border border-dashed border-primary/20"
            style={{ transform: `rotate(${-t * 24}deg)` }}
          />
          <div
            className="absolute inset-4 rounded-full border border-border/40 border-b-primary/50 hidden sm:block"
            style={{ transform: `rotate(${t * 16 + sx * -18}deg)` }}
          />

          <div
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-card/95 backdrop-blur-md sm:h-24 sm:w-24 md:h-28 md:w-28"
            style={{
              boxShadow: `0 0 ${28 + Math.sin(t * 2.5) * 12}px rgba(193,18,31,${0.18 + Math.sin(t * 2.5) * 0.1})`,
            }}
          >
            <span className="bg-gradient-to-br from-primary via-primary-light to-primary-dark bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl md:text-5xl">
              KK
            </span>
          </div>

          {orbitIcons.map(({ Icon, angle, radius }, i) => {
            const rad = ((angle + t * 42) * Math.PI) / 180;
            const ox = Math.cos(rad) * radius;
            const oy = Math.sin(rad) * radius;
            return (
              <div
                key={i}
                className="absolute flex h-8 w-8 items-center justify-center rounded-xl border border-border/60 bg-surface/95 text-primary shadow-md backdrop-blur-sm sm:h-10 sm:w-10 md:h-11 md:w-11"
                style={{
                  transform: `
                    translateX(${ox + sx * 12}px)
                    translateY(${oy + sy * 10}px)
                    rotate(${t * 42 + angle}deg)
                  `,
                }}
              >
                <Icon size={isMobile ? 13 : 16} style={{ transform: `rotate(${-(t * 42 + angle)}deg)` }} />
              </div>
            );
          })}
        </div>

        <h1 className="text-center text-2xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-5xl">
          Krupa Korat
        </h1>
        <p className="mt-2 text-center text-sm font-medium tracking-wide text-primary sm:text-base">
          Full Stack Developer
        </p>

        <a
          href="#home"
          className="mt-8 group flex min-h-[44px] cursor-pointer flex-col items-center gap-2 text-text-muted transition-colors hover:text-primary sm:mt-10"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            Explore
          </span>
          <FiArrowDown
            size={18}
            className="animate-bounce transition-colors group-hover:text-primary"
          />
        </a>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-background to-transparent sm:h-28" />
    </section>
  );
}

export default Intro3D;
