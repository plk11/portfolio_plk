"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { projectCategories, projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        {project.isPlaceholder ? (
          <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
            Sample
          </span>
        ) : null}
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  const allPlaceholder = projects.every((project) => project.isPlaceholder);

  return (
    <section id="projects" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of work demonstrating component architecture, API integration, and UI craft."
        />
      </Reveal>

      {allPlaceholder ? (
        <Reveal>
          <p className="mt-6 rounded-xl border border-dashed border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
            These are sample placeholders — swap them for real projects in{" "}
            <code className="rounded bg-card px-1.5 py-0.5 font-mono text-xs">data/projects.ts</code>.
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 60}>
            <ProjectCard project={project} onSelect={setSelectedProject} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
