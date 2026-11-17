"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "../_libs/data";

export default function ServiceExplorer() {
  const [i, setI] = useState(0);
  const s = services[i];
  return (
    <div className='grid gap-8 lg:grid-cols-[1fr_1.4fr]'>
      <div
        className='divide-y divide-line border-y border-line'
        role='tablist'
        aria-label='Services'
      >
        {services.map((x, k) => (
          <button
            key={x.slug}
            type='button'
            role='tab'
            aria-selected={i === k}
            onClick={() => setI(k)}
            className={`group flex w-full items-center gap-4 py-4 text-left transition-colors ${i === k ? "text-ink" : "text-muted hover:text-ink"}`}
          >
            <span
              className={`font-display text-2xl transition-colors ${i === k ? "text-gold" : "text-line"}`}
            >
              0{k + 1}
            </span>
            <span className='flex-1 font-display text-xl'>{x.name}</span>
            <span
              className={`transition-transform ${i === k ? "translate-x-1 text-accent" : "opacity-0 group-hover:opacity-100"}`}
              aria-hidden='true'
            >
              →
            </span>
          </button>
        ))}
      </div>
      <div
        key={s.slug}
        role='tabpanel'
        className='step-in border border-line bg-white p-7 sm:p-9'
      >
        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep'>
          0{i + 1} / 0{services.length}
        </p>
        <h3 className='mb-3 text-3xl'>{s.name}</h3>
        <p className='mb-6 font-body text-muted'>{s.text}</p>
        <ul className='mb-8 space-y-2 font-body text-sm'>
          {s.points.map((p) => (
            <li key={p} className='flex gap-3 border-b border-line pb-2'>
              <span className='text-accent'>—</span>
              {p}
            </li>
          ))}
        </ul>
        <Link
          href={`/book`}
          className='inline-block bg-deep px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-accent'
        >
          Book a call about this
        </Link>
      </div>
    </div>
  );
}
