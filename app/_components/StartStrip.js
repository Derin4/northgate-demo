"use client";

import Link from "next/link";
import { useState } from "react";
import { TOPICS } from "../_libs/data";

export default function StartStrip() {
  const [topic, setTopic] = useState("");
  const href = topic ? `/book?topic=${encodeURIComponent(topic)}` : "/book";
  return (
    <div className='border-t-4 border-gold bg-white p-6 shadow-[0_30px_60px_-34px_rgba(18,38,58,.55)] sm:p-8'>
      <div className='grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep'>
            Start here
          </p>
          <p className='font-display text-2xl'>What do you need help with?</p>
        </div>
        <div className='flex flex-wrap gap-2' role='group' aria-label='Topic'>
          {TOPICS.map((t) => (
            <button
              key={t}
              type='button'
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
              className={`border px-4 py-2 font-body text-sm transition-colors ${topic === t ? "pop border-deep bg-deep text-paper" : "border-line hover:border-accent"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <Link
          href={href}
          className='bg-accent px-7 py-3.5 text-center font-body text-sm font-medium text-white transition-colors hover:bg-accent-deep'
        >
          Book a call →
        </Link>
      </div>
    </div>
  );
}
