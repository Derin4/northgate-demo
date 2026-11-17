import Link from "next/link";
import Counter from "./_components/Counter";
import Compare from "./_components/Compare";
import Photo from "./_components/Photo";
import ProcessLine from "./_components/ProcessLine";
import ProcessMap from "./_components/ProcessMap";
import Reveal from "./_components/Reveal";
import SectionHead from "./_components/SectionHead";
import ServiceExplorer from "./_components/ServiceExplorer";
import StartStrip from "./_components/StartStrip";
import {
  caseMetrics,
  caseStudies,
  insights,
  process,
  sectors,
  stats,
  testimonials,
} from "./_libs/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className='relative overflow-hidden bg-deep text-paper'>
        <div className='grid-lines absolute inset-0' aria-hidden='true' />
        <div className='relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-28 pt-16 sm:grid-cols-[1.2fr_1fr] sm:pb-32 sm:pt-24'>
          <div>
            <p className='fade-up mb-4 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
              <span className='h-px w-8 bg-gold' aria-hidden='true' />
              Business analysis consulting
            </p>
            <h1
              className='fade-up mb-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl'
              style={{ "--d": "100ms" }}
            >
              Build the right thing, the first time.
            </h1>
            <p
              className='fade-up mb-8 max-w-prose font-body text-lg text-paper/75'
              style={{ "--d": "200ms" }}
            >
              Northgate Analysis helps teams work out what they actually need,
              before money is spent building it.
            </p>
            <div
              className='fade-up flex flex-wrap items-center gap-5'
              style={{ "--d": "300ms" }}
            >
              <Link
                href='/book'
                className='bg-gold px-7 py-3.5 font-body text-sm font-semibold text-night transition-all hover:-translate-y-0.5 hover:bg-paper'
              >
                Book a call
              </Link>
              <Link
                href='/case-studies'
                className='border-b border-paper/40 pb-1 font-body text-sm transition-colors hover:border-gold hover:text-gold'
              >
                See case studies
              </Link>
            </div>
          </div>
          <div className='fade-up relative' style={{ "--d": "250ms" }}>
            <div className='relative'>
              <span
                className='absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-gold'
                aria-hidden='true'
              />
              <span
                className='absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-gold'
                aria-hidden='true'
              />
              <Photo
                id='hero'
                label='A consultant facilitating a workshop'
                swatch={["#1f3a52", "#0c1a29"]}
                priority
                sizes='(min-width:640px) 40vw, 100vw'
                className='aspect-[4/5] w-full'
              />
            </div>
            <div className='absolute -bottom-8 -left-4 w-[78%] border border-paper/15 bg-night/95 p-4 backdrop-blur sm:-left-10'>
              <ProcessMap />
            </div>
          </div>
        </div>
      </section>

      {/* Start strip */}
      <div className='relative z-10 mx-auto -mt-14 max-w-6xl px-6'>
        <StartStrip />
      </div>

      {/* Stats */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className='border-t-2 border-gold pt-4'
            >
              <p className='font-display text-6xl leading-none text-deep'>
                <Counter n={s.n} suffix={s.suffix} />
              </p>
              <p className='mt-2 font-body text-sm text-muted'>{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className='mt-6 font-body text-xs text-muted/70'>
          Figures are illustrative, for the demo.
        </p>
      </section>

      {/* Services */}
      <section className='border-y border-line bg-tint'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <SectionHead eyebrow='Services' title='Six ways we help' />
          <ServiceExplorer />
          <Link
            href='/services'
            className='mt-8 inline-block font-body text-sm underline underline-offset-4'
          >
            All services
          </Link>
        </div>
      </section>

      {/* Sectors ticker */}
      <div
        className='ticker-wrap overflow-hidden border-b border-line bg-paper py-4'
        aria-hidden='true'
      >
        <div className='ticker flex w-max gap-12 whitespace-nowrap font-display text-2xl text-ink/70'>
          {[0, 1].map((k) =>
            sectors.map((s) => (
              <span key={k + s} className='flex items-center gap-12'>
                {s}
                <span className='text-gold'>◆</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* How it works */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead eyebrow='How it works' title='Four steps, no surprises' />
        <ProcessLine steps={process} />
      </section>

      {/* Recent work */}
      <section className='bg-deep text-paper'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <SectionHead
            eyebrow='Recent work'
            title='Results you can point to'
            light
          />
          <div className='grid gap-8 sm:grid-cols-3'>
            {caseStudies.map((c, i) => {
              const m = caseMetrics[c.slug];
              return (
                <Reveal key={c.slug} delay={i * 90}>
                  <Link
                    href='/case-studies'
                    className='group block h-full border-t border-paper/25 pt-5'
                  >
                    <p className='mb-4 font-display text-6xl leading-none text-gold transition-transform duration-500 group-hover:translate-x-1'>
                      {m.big}
                    </p>
                    <p className='mb-3 font-body text-xs text-paper/60'>
                      {m.label}
                    </p>
                    <p className='mb-2 font-body text-xs uppercase tracking-widest text-gold'>
                      {c.sector}
                    </p>
                    <p className='font-display text-2xl leading-snug transition-colors group-hover:text-gold'>
                      {c.title}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead
          eyebrow='Why Northgate'
          title='Independent, hands-on and quick to start'
        />
        <Compare />
      </section>

      {/* Testimonials */}
      <section className='border-t border-line bg-tint'>
        <div className='mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-2'>
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              as='figure'
              delay={i * 100}
              className='border-l-2 border-accent pl-6'
            >
              <blockquote className='font-display text-3xl leading-snug'>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className='mt-3 font-body text-sm text-muted'>
                {t.name}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='mb-8 flex flex-wrap items-end justify-between gap-4'>
          <SectionHead
            eyebrow='Insights'
            title='Short, practical writing'
            className='mb-0'
          />
          <Link
            href='/insights'
            className='font-body text-sm font-semibold text-accent-deep underline underline-offset-4'
          >
            All insights →
          </Link>
        </div>
        <div className='grid gap-px border border-line bg-line sm:grid-cols-3'>
          {insights.slice(0, 3).map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 80}
              className='group bg-paper p-6 transition-colors hover:bg-deep hover:text-paper'
            >
              <p className='mb-3 font-body text-xs uppercase tracking-widest text-accent-deep transition-colors group-hover:text-gold'>
                {a.tag} · {a.read}
              </p>
              <h3 className='text-2xl leading-snug'>{a.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-accent text-white'>
        <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center'>
          <h2 className='max-w-lg text-4xl leading-tight'>
            Thirty minutes could save months of rework.
          </h2>
          <Link
            href='/book'
            className='bg-night px-7 py-3.5 font-body text-sm font-semibold text-paper transition-colors hover:bg-gold hover:text-night'
          >
            Book a call
          </Link>
        </div>
      </section>
    </>
  );
}
