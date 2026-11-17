"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <p className='step-in border border-gold/40 p-4 text-sm text-paper'>
        Thank you. This is a demo, so nothing was sent.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor='nl' className='mb-2 block text-sm text-paper'>
        The Northgate note: one practical idea a month
      </label>
      <div className='flex'>
        <input
          id='nl'
          type='email'
          required
          placeholder='you@example.com'
          className='min-w-0 flex-1 border border-paper/25 bg-paper/10 px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-gold'
        />
        <button
          type='submit'
          className='bg-gold px-5 py-2.5 text-sm font-semibold text-night transition-colors hover:bg-paper'
        >
          Subscribe
        </button>
      </div>
      <p className='mt-2 text-xs text-paper/45'>Demo form. No spam, ever.</p>
    </form>
  );
}
