import type {
  EducationItem,
  ExperienceItem,
  Service,
  SkillGroup,
  SocialLink,
} from "@/types";

export const personalInfo = {
  name: "Palak Dhaliwal",
  title: "Frontend Developer",
  tagline: "React.js · Next.js · JavaScript / TypeScript",
  email: "dhaliwalplk11@gmail.com",
  phone: "+91 83600 55051",
  location: "India",
  summary:
    "Frontend Developer with nearly 2 years of professional experience specializing in React.js and Next.js development. Strong foundation in modern JavaScript/TypeScript, component-driven UI development, state management, and API-driven applications. Experienced in turning product designs into scalable, responsive web interfaces with a focus on clean architecture, maintainability, performance, and user experience.",
  heroHeadline: "Frontend Developer building scalable, responsive web apps",
  heroSubheadline:
    "I turn product designs into pixel-accurate, maintainable interfaces with React.js and Next.js — from reusable component systems to REST API-driven features.",
  resumeUrl: "/Palak Dhaliwal Resume.pdf",
  photoUrl: "/profile.png",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/plk11",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/palak-dhaliwal-b70956326/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js"],
  },
  {
    category: "State Management",
    skills: ["Redux Toolkit", "Context API", "Zustand"],
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "CSS Modules"],
  },
  {
    category: "API & Services",
    skills: ["REST APIs", "Firebase", "Supabase"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "AI Development Tools",
    skills: ["Claude", "ChatGPT", "Antigravity"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "SachTech Solution Private Limited",
    position: "Associate Frontend Web Developer",
    duration: "October 2024 – July 2026",
    progression: "Frontend Developer Intern → Full-Time Frontend Developer",
    achievements: [
      "Developed production web applications using React.js and Next.js, working across responsive UI development and application functionality.",
      "Designed and developed reusable UI components to maintain consistency and reduce repetitive frontend implementation.",
      "Converted UI/UX designs into pixel-accurate, responsive interfaces across desktop and mobile screen sizes.",
      "Integrated REST APIs and implemented asynchronous data flows for dynamic application features.",
      "Implemented application state management using Redux Toolkit, Context API, and Zustand.",
      "Built responsive interfaces using Tailwind CSS and CSS Modules.",
      "Worked on Next.js performance, loading speed, and SEO optimization to improve the overall application experience.",
      "Used Git, GitHub, Postman, and VS Code as part of the day-to-day development workflow.",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Panjab University",
  duration: "August 2023 – May 2026",
  score: "72.6% / 7.2 CGPA",
};

export const services: Service[] = [
  {
    title: "React & Next.js Development",
    description:
      "Building production web applications with React.js and Next.js, from component architecture to application functionality.",
  },
  {
    title: "Responsive UI Implementation",
    description:
      "Converting UI/UX designs into pixel-accurate, responsive interfaces across desktop and mobile with Tailwind CSS and CSS Modules.",
  },
  {
    title: "Reusable Component Systems",
    description:
      "Designing and developing reusable UI components to maintain consistency and cut down repetitive frontend work.",
  },
  {
    title: "REST API Integration",
    description:
      "Integrating REST APIs and implementing asynchronous data flows to power dynamic, data-driven features.",
  },
  {
    title: "Application State Management",
    description:
      "Structuring app state with Redux Toolkit, Context API, and Zustand for predictable, maintainable data flow.",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "Improving Next.js loading speed, performance, and SEO to strengthen the overall application experience.",
  },
];
