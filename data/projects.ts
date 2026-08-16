import type { Project } from "@/types";

/**
 * No projects were listed on the source resume. These entries are sample
 * placeholders only — visibly flagged via `isPlaceholder` in the UI (a
 * "Sample" badge on the card and "replace with your work" note in the
 * modal) — so replace them with real project data before publishing.
 */
export const projects: Project[] = [
  {
    id: "sample-dashboard",
    title: "Sample Project — Admin Dashboard",
    description:
      "An internal admin dashboard for managing users, orders, and analytics in one place, replacing a set of disconnected spreadsheets the team relied on before.",
    role: "Built the dashboard front-end end-to-end — component architecture, data tables, charts, and role-based views — working from Figma designs.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    categories: ["Dashboard", "React"],
    keyFeatures: [
      "Sortable, filterable data tables for users and orders",
      "Interactive charts summarizing daily and monthly activity",
      "Role-based views that show or hide sections based on permissions",
      "Dark mode and a responsive layout down to tablet width",
    ],
    results:
      "Cut the time it took the ops team to find and act on an order from several minutes of spreadsheet searching to a few seconds.",
    githubUrl: undefined,
    liveUrl: undefined,
    isPlaceholder: true,
  },
  {
    id: "sample-landing",
    title: "Sample Project — Marketing Landing Page",
    description:
      "A conversion-focused marketing landing page for a SaaS product launch, built for speed and search visibility from day one.",
    role: "Implemented the full page in Next.js from a static design file, including SEO metadata, animations, and the responsive layout.",
    technologies: ["Next.js", "TypeScript", "CSS Modules"],
    categories: ["Landing Page", "Next.js"],
    keyFeatures: [
      "Server-rendered pages for fast first paint and strong SEO",
      "Scroll-triggered section animations that respect reduced motion",
      "Fully responsive hero, feature, and pricing sections",
      "Structured metadata and Open Graph tags for social sharing",
    ],
    results: "Shipped with a 95+ Lighthouse performance score on mobile.",
    githubUrl: undefined,
    liveUrl: undefined,
    isPlaceholder: true,
  },
  {
    id: "sample-app",
    title: "Sample Project — API-Driven Web App",
    description:
      "A React application for tracking and managing personal tasks and projects, backed by a REST API with real-time-feeling updates.",
    role: "Built the front-end architecture, including the authentication flow, API integration layer, and global state management.",
    technologies: ["React.js", "Zustand", "REST APIs", "Firebase"],
    categories: ["React"],
    keyFeatures: [
      "Email/password authentication with persisted sessions",
      "Optimistic UI updates for creating and completing tasks",
      "Reusable form and modal components shared across the app",
      "Cached data for the most recently viewed lists to smooth over slow connections",
    ],
    results: "Brought perceived action latency to near-zero for common actions like completing a task.",
    githubUrl: undefined,
    liveUrl: undefined,
    isPlaceholder: true,
  },
];

export const projectCategories = [
  "All",
  "React",
  "Next.js",
  "Dashboard",
  "Landing Page",
] as const;
