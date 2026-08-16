"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="project-modal-title" className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            {project.isPlaceholder ? (
              <span className="mt-2 inline-block rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                Sample project — replace with your work
              </span>
            ) : null}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Overview</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">My Role</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.role}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Technologies</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Key Features</h4>
            <ul className="mt-2 space-y-2">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.results ? (
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Results</h4>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.results}</p>
            </div>
          ) : null}
        </div>

        {project.githubUrl || project.liveUrl ? (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
