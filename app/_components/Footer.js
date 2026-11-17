import Link from "next/link";
import { site } from "../_libs/site";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className='bg-night text-paper'>
      <div className='mx-auto grid max-w-6xl gap-10 px-6 py-14 font-body text-sm text-paper/65 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]'>
        <div>
          <p className='mb-3 font-display text-2xl text-paper'>{site.name}</p>
          <p className='max-w-xs'>{site.tagline}</p>
        </div>
        <div>
          <p className='mb-3 font-semibold text-paper'>Contact</p>
          {site.contact.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
        <div>
          <p className='mb-3 font-semibold text-paper'>Explore</p>
          <ul className='space-y-1'>
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className='transition-colors hover:text-gold'
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href='/book' className='transition-colors hover:text-gold'>
                Book a call
              </Link>
            </li>
          </ul>
        </div>
        <Newsletter />
      </div>
      <div className='border-t border-paper/10 px-6 py-5 text-center font-body text-xs leading-relaxed text-paper/45'>
        {site.disclaimer}
        <br />
        &copy; {new Date().getFullYear()} {site.name} — demo site
      </div>
    </footer>
  );
}
