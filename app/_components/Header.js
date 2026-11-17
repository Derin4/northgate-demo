"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "../_libs/data";
import { site } from "../_libs/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState("main");
  const [scrolled, setScrolled] = useState(false);
  const [shut, setShut] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPanel("main");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    setPanel("main");
  }

  const link = (l) =>
    `relative py-2 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 ${pathname.startsWith(l.href) ? "text-ink after:scale-x-100" : ""}`;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_6px_20px_-12px_rgba(0,0,0,.25)]" : ""}`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${scrolled ? "py-3" : "py-5"}`}
      >
        <Link
          href='/'
          onClick={close}
          className='flex items-center gap-3 font-display text-2xl tracking-tight text-ink'
        >
          <svg viewBox='0 0 32 32' className='h-8 w-8' aria-hidden='true'>
            <rect width='32' height='32' rx='5' fill='#12263a' />
            <path
              d='M9 24V8l14 16V8'
              fill='none'
              stroke='#f6f4ef'
              strokeWidth='3'
              strokeLinejoin='round'
              strokeLinecap='round'
            />
            <circle cx='23' cy='8' r='2.4' fill='#c8963e' />
          </svg>
          {site.name}
        </Link>
        <nav
          className='hidden items-center gap-8 font-body text-sm text-ink/70 lg:flex'
          aria-label='Main'
        >
          {site.nav.map((l) =>
            l.href === "/services" ? (
              <div
                key={l.href}
                className='group relative'
                data-shut={shut}
                onMouseLeave={() => setShut(false)}
              >
                <Link
                  href={l.href}
                  onClick={() => setShut(true)}
                  className={`flex items-center gap-1 ${link(l)}`}
                >
                  {l.label}
                  <svg
                    viewBox='0 0 12 12'
                    className='h-3 w-3 fill-none stroke-current stroke-2 transition-transform group-hover:rotate-180'
                    aria-hidden='true'
                  >
                    <path d='M2 4.5 6 8l4-3.5' />
                  </svg>
                </Link>
                <div className='mega absolute left-1/2 top-full w-[44rem] -translate-x-1/2 pt-4'>
                  <div className='grid grid-cols-[1.6fr_1fr] border border-line bg-white shadow-[0_30px_60px_-30px_rgba(18,38,58,.5)]'>
                    <div className='grid grid-cols-2 gap-1 p-3'>
                      {services.map((s, i) => (
                        <Link
                          key={s.slug}
                          href='/services'
                          onClick={() => setShut(true)}
                          className='group/i p-3 transition-colors hover:bg-tint'
                        >
                          <span className='font-display text-lg text-gold'>
                            0{i + 1}
                          </span>
                          <span className='block font-display text-lg leading-tight text-ink'>
                            {s.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className='flex flex-col justify-between bg-deep p-6 text-paper'>
                      <div>
                        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
                          Not sure where to start?
                        </p>
                        <p className='font-display text-2xl leading-snug'>
                          Talk it through in a 30-minute call.
                        </p>
                      </div>
                      <Link
                        href='/book'
                        onClick={() => setShut(true)}
                        className='mt-6 inline-block text-sm font-semibold text-gold underline underline-offset-4'
                      >
                        Book a call →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} className={link(l)}>
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href={site.cta.href}
            className='hidden bg-accent px-5 py-2.5 font-body text-sm font-medium text-white transition-colors hover:bg-accent-deep sm:inline-block'
          >
            {site.cta.label}
          </Link>
          <button
            type='button'
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className='flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden'
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-paper transition-[height] duration-500 lg:hidden ${open ? "h-[100dvh]" : "h-0"}`}
        inert={!open}
      >
        <div className='relative h-full'>
          <nav
            className={`absolute inset-0 overflow-y-auto px-6 pb-28 pt-6 transition-transform duration-500 ${panel === "svc" ? "-translate-x-full" : ""}`}
            aria-label='Mobile'
            inert={panel === "svc"}
          >
            {[{ href: "/", label: "Home" }, ...site.nav].map((l) =>
              l.href === "/services" ? (
                <button
                  key={l.href}
                  type='button'
                  onClick={() => setPanel("svc")}
                  className='flex w-full items-center justify-between border-b border-line py-4 font-display text-2xl text-ink'
                >
                  {l.label}
                  <span className='text-accent' aria-hidden='true'>
                    →
                  </span>
                </button>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className='block border-b border-line py-4 font-display text-2xl text-ink'
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              href={site.cta.href}
              onClick={close}
              className='mt-6 block bg-accent py-4 text-center font-body text-sm font-medium text-white'
            >
              {site.cta.label}
            </Link>
          </nav>
          <nav
            className={`absolute inset-0 overflow-y-auto bg-paper px-6 pb-28 pt-6 transition-transform duration-500 ${panel === "svc" ? "" : "translate-x-full"}`}
            aria-label='Services'
            inert={panel !== "svc"}
          >
            <button
              type='button'
              onClick={() => setPanel("main")}
              className='mb-2 py-2 font-body text-sm font-medium text-accent-deep'
            >
              ← Back
            </button>
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href='/services'
                onClick={close}
                className='flex gap-4 border-b border-line py-4'
              >
                <span className='font-display text-2xl text-gold'>
                  0{i + 1}
                </span>
                <span className='font-display text-2xl text-ink'>{s.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
