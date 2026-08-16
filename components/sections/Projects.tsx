"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, FolderGit2, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { projectCategories, projects } from "@/data/projects";
import { socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

const github = socialLinks.find((link) => link.icon === "github");

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>

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

function EmptyState() {
  return (
    <Reveal>
      <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <FolderGit2 className="h-6 w-6" />
        </span>
        <p className="mt-4 text-base font-medium text-foreground">Projects are on their way</p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          I&apos;m preparing case studies for my recent work. Check back soon, or take a
          look at my code in the meantime.
        </p>
        {github ? (
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            View GitHub
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="section-container py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of work demonstrating component architecture, API integration, and UI craft."
        />
      </Reveal>

      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <>
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
        </>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
