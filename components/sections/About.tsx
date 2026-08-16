import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education, personalInfo } from "@/data/portfolio";

const STATS = [
  { label: "Years of experience", value: "~2" },
  { label: "Core stack", value: "React & Next.js" },
  { label: "Focus", value: "Component-driven UI" },
];

export function About() {
  return (
    <section id="about" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="About" title="About Me" />
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <p className="text-base leading-8 text-muted-foreground">{personalInfo.summary}</p>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">{education.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.institution} · {education.duration}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{education.score}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-5">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
