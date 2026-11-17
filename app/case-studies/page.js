import Reveal from "../_components/Reveal";
import SectionHead from "../_components/SectionHead";
import { caseMetrics, caseStudies } from "../_libs/data";

export const metadata = { title: "Case studies" };

export default function CaseStudiesPage() {
  return (
    <div className='mx-auto max-w-5xl px-6 py-16'>
      <SectionHead
        eyebrow='Case studies'
        title='Problems, approach, results'
        text='Clients are anonymised and figures are illustrative.'
      />
      <div className='space-y-12'>
        {caseStudies.map((c) => {
          const m = caseMetrics[c.slug];
          return (
            <Reveal
              key={c.slug}
              as='article'
              className='grid gap-6 border-t border-line pt-8 sm:grid-cols-[1fr_2fr]'
            >
              <div>
                <p className='font-body text-xs uppercase tracking-widest text-accent-deep'>
                  {c.sector}
                </p>
                <p className='mt-1 font-body text-sm text-muted'>{c.client}</p>
                {m ? (
                  <div className='mt-6 border-l-2 border-gold pl-4'>
                    <p className='font-display text-5xl leading-none text-accent'>
                      {m.big}
                    </p>
                    <p className='mt-1 font-body text-xs text-muted'>
                      {m.label}
                    </p>
                  </div>
                ) : null}
              </div>
              <div>
                <h2 className='mb-4 text-3xl leading-tight'>{c.title}</h2>
                <p className='mb-4 font-body text-muted'>
                  <strong className='text-ink'>The problem. </strong>
                  {c.problem}
                </p>
                <p className='mb-2 font-body text-sm font-semibold'>
                  The approach
                </p>
                <ul className='mb-4 space-y-1 font-body text-sm text-muted'>
                  {c.approach.map((a) => (
                    <li key={a} className='flex gap-2'>
                      <span className='text-accent'>—</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <p className='border-l-2 border-accent bg-tint px-4 py-3 font-body text-sm'>
                  {c.result}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
