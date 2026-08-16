export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  progression?: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export interface Service {
  title: string;
  description: string;
}

export type ProjectCategory =
  | "React"
  | "Next.js"
  | "Dashboard"
  | "Landing Page";

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  categories: ProjectCategory[];
  keyFeatures: string[];
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
}
