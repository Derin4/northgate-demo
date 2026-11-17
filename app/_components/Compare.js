"use client";

import { useState } from "react";
import { compare } from "../_libs/data";

export default function Compare() {
  const [id, setId] = useState(compare[0].id);
  const c = compare.find((x) => x.id === id);
  return (
    <div>
      <div
        className='mb-6 flex flex-wrap gap-2'
        role='tablist'
        aria-label='Compare'
      >
        {compare.map((x) => (
          <button
            key={x.id}
            type='button'
            role='tab'
            aria-selected={id === x.id}
            onClick={() => setId(x.id)}
            className={`border px-5 py-2.5 font-body text-sm transition-colors ${id === x.id ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-accent"}`}
          >
            Northgate {x.tab}
          </button>
        ))}
      </div>
      <div
        key={id}
        className='step-in overflow-x-auto border border-line bg-white'
      >
        <table className='w-full min-w-[520px] border-collapse text-left font-body text-sm'>
          <thead>
            <tr className='border-b border-line text-xs uppercase tracking-widest text-muted'>
              <th className='p-4 font-semibold' />
              <th className='bg-deep p-4 font-semibold text-gold'>Northgate</th>
              <th className='p-4 font-semibold'>The alternative</th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map(([a, b, d]) => (
              <tr key={a} className='border-b border-line last:border-0'>
                <td className='p-4 font-semibold'>{a}</td>
                <td className='bg-tint p-4'>{b}</td>
                <td className='p-4 text-muted'>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className='mt-3 font-body text-xs text-muted'>
        Illustrative comparison for the demo.
      </p>
    </div>
  );
}
