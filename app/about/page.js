import Link from "next/link";
import Photo from "../_components/Photo";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className='mx-auto grid max-w-6xl items-start gap-14 px-6 py-16 sm:grid-cols-[1fr_1.2fr]'>
      <Photo
        id='about'
        label='Naomi Ellis, principal consultant'
        swatch={["#e6ece9", "#1f7a7a"]}
        priority
        sizes='(min-width:640px) 40vw, 100vw'
        className='aspect-[4/5] w-full'
      />
      <div className='max-w-prose sm:pt-4'>
        <h1 className='mb-6 text-5xl'>About Northgate</h1>
        <p className='mb-4 font-body leading-relaxed text-muted'>
          Northgate Analysis is run by Naomi Ellis, a business analyst with more
          than twelve years in financial services, logistics and the non-profit
          sector. She holds CBAP and Professional Scrum Master credentials.
        </p>
        <p className='mb-4 font-body leading-relaxed text-muted'>
          The work is simple to describe: sit with the people who know the
          problem, write down what is true, and give your team something they
          can build from.
        </p>
        <p className='mb-8 font-body leading-relaxed text-muted'>
          Naomi is a fictional consultant created for this demo.
        </p>
        <div className='mb-8 flex flex-wrap gap-2'>
          {[
            "CBAP",
            "PSM II",
            "Agile coaching",
            "Process mapping",
            "Workshop facilitation",
          ].map((t) => (
            <span
              key={t}
              className='border border-line bg-white px-3 py-1 font-body text-xs transition-colors hover:border-accent'
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href='/book'
          className='bg-accent px-7 py-3.5 font-body text-sm font-medium text-white transition-colors hover:bg-accent-deep'
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
