import { Boxes, Code2, Gauge, LayoutTemplate, Plug, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/portfolio";

const ICONS = [Code2, LayoutTemplate, Boxes, Plug, Workflow, Gauge];

export function Services() {
  return (
    <section id="services" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Services" title="What I Do" />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <Reveal key={service.title} delay={index * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
