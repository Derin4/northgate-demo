# Northgate Analysis

A demo website for a fictional business analysis consultancy, built by [MyClickAid](https://myclickaid.com) for its portfolio gallery.

**Live demo:** https://northgate-demo.derin-obasa.workers.dev/

> **A fictional company.** Northgate Analysis, its team, services, case studies and insights are made up for this demo. No forms send data.

## What it shows

- **Home page:** an animated process map in the hero, a "What do you need help with?" topic strip that points visitors to the right service, animated counters and a process line that draws as you scroll.
- **Services:** an interactive service explorer with tabs.
- **Case studies:** a before-and-after comparison view for each project.
- **Insights:** a filterable list of articles.
- **About:** the team and approach.
- **Book a call:** a time-slot picker with a demo confirmation.
- **Details:** a newsletter form in the footer, scroll animations, reduced-motion support and keyboard-friendly menus.

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript, static export)
- [Tailwind CSS](https://tailwindcss.com/) v4
- Fonts: Instrument Serif and Hanken Grotesk, self-hosted with `@fontsource`
- Hosted on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create the production build (a static site in the `out` folder):

```bash
npm run build
```

## Project structure

```
app/
  _components/   Header, Footer, ProcessMap, ServiceExplorer, Compare, BookCall, ...
  _libs/         site.js, data.js, pictures.js, helpers.js
  _styles/       globals.css
  services/  case-studies/  insights/  about/  book/
public/          Photos (.webp)
```

## Photos

Photos are optional. Each slot shows a placeholder until you add an image. Put the files in `public/` and register them in `app/_libs/pictures.js`.

| Slot  | File            | Ratio |
| ----- | --------------- | ----- |
| Hero  | `ng-hero.webp`  | 4:5   |
| About | `ng-about.webp` | 4:5   |

## Deployment

The site is a static export (`output: "export"` in `next.config.mjs`) and deploys to Cloudflare from this repository. Every push to the main branch rebuilds and redeploys it.

## About MyClickAid

MyClickAid is a bespoke web design studio. This site is one of several demo projects that show what a custom-designed website can look like for different kinds of businesses.
