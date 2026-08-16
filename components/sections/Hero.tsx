import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { personalInfo, socialLinks } from "@/data/portfolio";

const github = socialLinks.find((link) => link.icon === "github");
const linkedin = socialLinks.find((link) => link.icon === "linkedin");

export function Hero() {
  return (
    <section id="hero" className="section-container flex flex-col-reverse items-center gap-12 pt-16 pb-20 md:flex-row md:gap-16 md:pt-24 md:pb-28">
      <div className="flex-1 text-center md:text-left">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-wider text-accent uppercase">
            {personalInfo.title}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            {personalInfo.heroHeadline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:mx-0">
            {personalInfo.heroSubheadline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex items-center justify-center gap-2 md:justify-start">
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
            ) : null}
            {linkedin ? (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            ) : null}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-[16px] w-[16px]" />
              Resume
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="shrink-0">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent-soft blur-2xl"
          />
          <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl ring-1 ring-accent/15 sm:w-80 md:w-64 lg:w-80 xl:w-96">
            <Image
              src={personalInfo.photoUrl}
              alt={`Portrait of ${personalInfo.name}`}
              fill
              sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 20rem, (min-width: 768px) 16rem, (min-width: 640px) 20rem, 18rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
