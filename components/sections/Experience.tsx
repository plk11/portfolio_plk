import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've Worked" />
      </Reveal>

      <ol className="mt-10 space-y-8">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 80}>
            <li className="relative rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">{item.position}</h3>
                <span className="text-sm font-medium text-muted-foreground">{item.duration}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{item.company}</p>
              {item.progression ? (
                <p className="mt-1 text-sm text-muted-foreground">{item.progression}</p>
              ) : null}

              <ul className="mt-5 space-y-3">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
