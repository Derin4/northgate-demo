"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ n, suffix = "" }) {
  const ref = useRef(null);
  const [v, setV] = useState(n);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / 1400);
          setV(Math.round(n * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(() => {
          setV(0);
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [n]);

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}
