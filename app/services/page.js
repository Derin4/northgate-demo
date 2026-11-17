import Link from "next/link";
import Reveal from "../_components/Reveal";
import SectionHead from "../_components/SectionHead";
import { services } from "../_libs/data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className='mx-auto max-w-5xl px-6 py-16'>
      <SectionHead
        eyebrow='Services'
        title='What we do'
        text='Every engagement starts with a short call. Fixed-scope packages and day-rate support are both available.'
      />
      <div className='divide-y divide-line border-y border-line'>
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={(i % 2) * 60}
            className='grid gap-4 py-8 sm:grid-cols-[auto_1fr_1.3fr]'
          >
            <span className='font-display text-3xl text-gold'>0{i + 1}</span>
            <h2 className='text-3xl leading-tight'>{s.name}</h2>
            <div>
              <p className='mb-4 font-body text-muted'>{s.text}</p>
              <ul className='space-y-1 font-body text-sm'>
                {s.points.map((p) => (
                  <li key={p} className='flex gap-2'>
                    <span className='text-accent'>—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Link
        href='/book'
        className='mt-10 inline-block bg-accent px-7 py-3.5 font-body text-sm font-medium text-white transition-colors hover:bg-accent-deep'
      >
        Book a discovery call
      </Link>
    </div>
  );
}
