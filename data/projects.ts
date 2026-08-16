import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    description:
      "An internal admin dashboard for managing users, content, and day-to-day operations, built as a production React/Next.js application with a component-driven UI.",
    role: "Built the dashboard front end — component architecture, data tables, charts, and role-based views — and integrated it with REST APIs for live data.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    categories: ["Dashboard", "React", "Next.js"],
    keyFeatures: [
      "Sortable, filterable data tables for managing records at scale",
      "Charts and summary views for day-to-day activity",
      "Role-based views that adapt to what each user is allowed to see",
      "Responsive layout that holds up down to tablet width",
    ],
  },
  {
    id: "marketing-landing-pages",
    title: "Marketing Landing Pages",
    description:
      "A set of conversion-focused marketing and product landing pages, built with SEO and page speed as first-class requirements rather than an afterthought.",
    role: "Implemented the pages in Next.js from design files, including SEO metadata, structured content, and a fully responsive layout.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "CSS Modules"],
    categories: ["Landing Page", "Next.js"],
    keyFeatures: [
      "Server-rendered pages for fast first paint and strong SEO",
      "Structured metadata and Open Graph tags for social sharing",
      "Semantic, accessible markup with a clean heading hierarchy",
      "Fully responsive hero, feature, and CTA sections",
    ],
    results:
      "Ran technical SEO audits on each page — metadata, heading structure, image alt text, load performance — and fixed issues found along the way.",
  },
  {
    id: "business-website",
    title: "Business Website",
    description:
      "A full multi-page business website covering everything from information architecture to on-page SEO, built to be fast, accessible, and easy to maintain.",
    role: "Owned the front-end build end-to-end and ran SEO/performance audits across the site post-launch.",
    technologies: ["React.js", "Next.js", "REST APIs", "Tailwind CSS"],
    categories: ["Website", "Next.js"],
    keyFeatures: [
      "Reusable page and section components shared across the site",
      "REST API integration for dynamic content",
      "On-page SEO — metadata, semantic HTML, and structured headings",
      "Performance tuning for loading speed and Core Web Vitals",
    ],
    results:
      "Audited the site with Lighthouse and browser dev tools, then addressed the SEO and performance issues that came out of it.",
  },
];

export const projectCategories = [
  "All",
  "React",
  "Next.js",
  "Dashboard",
  "Landing Page",
  "Website",
] as const;
