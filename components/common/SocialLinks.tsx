import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/cn";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function SocialLinks({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = ICONS[link.icon];
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
