"use client";

import { useEffect, useRef, useState } from "react";

export default function ProcessLine({ steps }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className='relative'>
      <div
        className='absolute left-0 right-0 top-[1.1rem] hidden h-px bg-line sm:block'
        aria-hidden='true'
      >
        <div
          className='h-full origin-left bg-gold transition-transform duration-[1800ms] ease-out'
          style={{ transform: on ? "scaleX(1)" : "scaleX(0)" }}
        />
      </div>
      <ol className='grid gap-8 sm:grid-cols-4'>
        {steps.map((p, i) => (
          <li
            key={p.n}
            className='relative transition-all duration-700'
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "none" : "translateY(18px)",
              transitionDelay: `${i * 350}ms`,
            }}
          >
            <span className='relative mb-4 grid h-9 w-9 place-items-center rounded-full bg-deep font-body text-xs font-semibold text-paper'>
              {p.n}
            </span>
            <h3 className='mb-2 text-2xl'>{p.title}</h3>
            <p className='font-body text-sm text-muted'>{p.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
