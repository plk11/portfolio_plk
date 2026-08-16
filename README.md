# Palak Dhaliwal — Frontend Developer Portfolio

A production-quality personal portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4, generated strictly from [Palak Dhaliwal's resume](public/Palak_Dhaliwal_Frontend_Developer_.pdf).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Server & Client Components)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- [lucide-react](https://lucide.dev) for icons
- Hand-rolled theming (no runtime dependency) and scroll-reveal (IntersectionObserver-based)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the development server        |
| `npm run build` | Production build                    |
| `npm run start` | Serve the production build          |
| `npm run lint`  | Run ESLint                          |
| `npm run format`| Format the codebase with Prettier   |

## Project Structure

```
app/                  Routes, layout, metadata, sitemap/robots
components/
  layout/              Navbar, Footer
  sections/            Hero, About, Skills, Experience, Projects, ProjectModal, Services, Contact
  ui/                  Button, SectionHeading, Badge, Reveal
  common/              ThemeToggle, SocialLinks
data/                  portfolio.ts (resume content), projects.ts (project data)
hooks/                 useTheme, useInView, useActiveSection
lib/                   cn (classname helper)
types/                 Shared TypeScript types
```

Content lives in `data/portfolio.ts` and `data/projects.ts`, kept separate from the UI components that render it.

## Contact Section

No SMTP or email-provider account is configured, so instead of a contact form, `components/sections/Contact.tsx` shows direct links — email, GitHub, LinkedIn — that all work with zero backend (`mailto:` and plain external links). A phone number is present in `data/portfolio.ts` (`personalInfo.phone`) but intentionally not rendered anywhere yet.

If you'd rather add a real contact form later, wire up a provider and it'll fit the existing section layout:

- **[Resend](https://resend.com)** — add an `app/api/contact/route.ts` Route Handler, read `RESEND_API_KEY` from `.env.local` on the server.
- **[Formspree](https://formspree.io)** — point a form directly at your Formspree endpoint (no server code needed).
- **[EmailJS](https://www.emailjs.com)** — call it client-side with your public keys (no secret keys are ever safe in client code).

Never hardcode API keys — read them from `process.env` on the server only.

## Environment Variables

Copy `.env.example` to `.env.local` and set your real deployed domain:

```
NEXT_PUBLIC_SITE_URL=https://your-domain-here.com
```

This drives canonical URLs, `sitemap.xml`, `robots.txt`, and Open Graph metadata.

## Deployment

Deploy to [Vercel](https://vercel.com/new) (recommended) or any Node host that supports Next.js:

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` as an environment variable on your hosting platform before deploying.

## Placeholders to Replace

The source resume had no listed projects and no GitHub/LinkedIn URLs. These were resolved as follows — double-check before publishing:

- **Projects** (`data/projects.ts`): 3 real entries — Admin Dashboard, Marketing Landing Pages, Business Website — written from the project *types* described, without specific client names, screenshots, or GitHub/live links (none were provided). Add `githubUrl`/`liveUrl` and swap in real screenshots/specifics once you're ready to publish.
- **Phone number**: kept in `data/portfolio.ts` (`personalInfo.phone`) but not shown on the page. Add it back to `components/sections/Contact.tsx` (and `data/portfolio.ts`'s `socialLinks`) whenever you're ready to publish it.
- **Site URL**: set `NEXT_PUBLIC_SITE_URL` in `.env.local` / your hosting provider to your real domain.
- **Favicon**: `app/favicon.ico` is still the default Next.js icon — replace it with your own.
- **Open Graph image**: `app/opengraph-image.tsx` generates a simple text-based social preview image; customize or replace with a designed image if you want.
- **GitHub / LinkedIn**: already wired to `https://github.com/Palak1115` and `https://www.linkedin.com/in/palak-dhaliwal-b70956326/` in `data/portfolio.ts` — confirm these are current.
- **Contact form**: there isn't one — the Contact section links directly to email/phone/GitHub/LinkedIn instead. See "Contact Section" above if you want a real form wired to a provider later.
