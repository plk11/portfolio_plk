import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { personalInfo, socialLinks } from "@/data/portfolio";

const github = socialLinks.find((link) => link.icon === "github");
const linkedin = socialLinks.find((link) => link.icon === "linkedin");

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  ...(github
    ? [
        {
          icon: Github,
          label: "GitHub",
          value: "Connect on GitHub",
          href: github.href,
          external: true,
        },
      ]
    : []),
  ...(linkedin
    ? [
        {
          icon: Linkedin,
          label: "LinkedIn",
          value: "Connect on LinkedIn",
          href: linkedin.href,
          external: true,
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section id="contact" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have an opportunity or project in mind? Reach out directly through any of the channels below — I typically respond within a day or two."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {CONTACT_METHODS.map((method, index) => (
          <Reveal key={method.label} delay={index * 60}>
            <a
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-muted"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <method.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">{method.label}</p>
                <p className="font-medium text-foreground">{method.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
