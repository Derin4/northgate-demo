"use client";

import { useState } from "react";
import { INSIGHT_TAGS, insights } from "../_libs/data";

export default function InsightList() {
  const [tag, setTag] = useState("All");
  const shown =
    tag === "All" ? insights : insights.filter((a) => a.tag === tag);
  return (
    <div>
      <div className='no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6'>
        {INSIGHT_TAGS.map((t) => (
          <button
            key={t}
            type='button'
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
            className={`shrink-0 border px-4 py-2 font-body text-sm transition-colors ${tag === t ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-accent"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div key={tag} className='divide-y divide-line border-y border-line'>
        {shown.map((a, i) => (
          <article
            key={a.title}
            className='step-in group grid gap-2 py-7 sm:grid-cols-[10rem_1fr]'
            style={{ "--d": `${i * 60}ms` }}
          >
            <p className='font-body text-xs text-muted'>
              <span className='block uppercase tracking-widest text-accent-deep'>
                {a.tag}
              </span>
              {a.date} · {a.read}
            </p>
            <div>
              <h2 className='mb-2 text-3xl leading-tight transition-colors group-hover:text-accent'>
                {a.title}
              </h2>
              <p className='font-body text-muted'>{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
