import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack"
          description="Technologies I use day to day, grouped by where they fit in the stack."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 60}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
