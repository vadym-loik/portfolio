/**
 * Facts that are the same in every language: links, dates, stacks.
 * Texts in each language are in src/i18n/en.ts and src/i18n/fr.ts.
 */
import type { StaticImageData } from "next/image";
import chas from "@/assets/projects/chas.webp";
import dolicare from "@/assets/projects/dolicare.webp";
import snugglepaws from "@/assets/projects/snugglepaws.webp";
import hopways from "@/assets/projects/hopways-facture.webp";
import groupomania from "@/assets/projects/groupomania.webp";
import piiquante from "@/assets/projects/piiquante.webp";
import kanap from "@/assets/projects/kanap.webp";
import ohmyfood from "@/assets/projects/ohmyfood.webp";
import optimize from "@/assets/projects/optimize.webp";

const phone = "+33 7 68 85 69 44";

export const profile = {
  email: "loikfit@gmail.com",
  phone,
  whatsapp: `https://wa.me/${phone.replace(/\D/g, "")}`,
  linkedin: "https://www.linkedin.com/in/vadym-loik-651ba27b/",
  github: "https://github.com/vadym-loik",
  website: "https://vadym-loik.github.io/portfolio/",
  /** First job as a developer: used for "X+ years of experience" */
  careerStart: "2022-06",
};

export type ExperienceId = "stellantis" | "insight" | "hopways" | "marte";

export type Experience = {
  id: ExperienceId;
  company: string;
  /** Company where the work is done (consulting mission) */
  client?: string;
  role: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM"; no value = current job */
  end?: string;
  location: string;
  /** Remote work from France */
  remote?: boolean;
  /** No value = stack is not public (NDA) */
  stack?: string[];
};

export const experience: Experience[] = [
  {
    id: "stellantis",
    company: "Dunasys",
    client: "Stellantis",
    role: "Full-stack Developer",
    start: "2025-06",
    location: "Poissy, France",
  },
  {
    id: "insight",
    company: "Insight Assessment",
    role: "Front-end Developer",
    start: "2024-05",
    end: "2025-06",
    location: "USA",
    remote: true,
    stack: ["C#", "Blazor", ".NET", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "hopways",
    company: "Hopways",
    role: "Full-stack Developer",
    start: "2023-12",
    end: "2024-01",
    location: "Paris, France",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "PlanetScale", "MySQL"],
  },
  {
    id: "marte",
    company: "Marte Conseil",
    role: "Web Developer",
    start: "2022-06",
    end: "2023-09",
    location: "Paris, France",
    stack: ["JavaScript", "Vue.js", "Node.js", "SQL", "NoSQL", "HTML", "CSS"],
  },
];

export type ProjectId =
  | "chas"
  | "dolicare"
  | "snugglepaws"
  | "hopways"
  | "groupomania"
  | "piiquante"
  | "kanap"
  | "ohmyfood"
  | "optimize";

export type Project = {
  id: ProjectId;
  title: string;
  image: StaticImageData;
  stack: string[];
  site?: string;
  code?: string;
  /** Built for my own use, not for a client */
  personal?: boolean;
};

/** Real projects, newest first */
export const projects: Project[] = [
  {
    id: "chas",
    title: "Chas",
    image: chas,
    stack: ["React Native", "Expo", "Expo Router", "TypeScript", "Android", "iOS", "GitHub Actions"],
    code: "https://github.com/vadym-loik/chasApp",
    personal: true,
  },
  {
    id: "dolicare",
    title: "DoliCare",
    image: dolicare,
    stack: ["Kotlin", "Jetpack Compose", "Android", "Firebase", "Cloud Firestore", "GitHub Actions"],
    personal: true,
  },
  {
    id: "snugglepaws",
    title: "Snuggle Paws",
    image: snugglepaws,
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Netlify", "GitHub Actions"],
    site: "https://snugglepaws.fr",
  },
  {
    id: "hopways",
    title: "Hopways Facture",
    image: hopways,
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "PlanetScale", "MySQL"],
  },
];

/** Training projects (OpenClassrooms) */
export const trainingProjects: Project[] = [
  {
    id: "groupomania",
    title: "Groupomania",
    image: groupomania,
    stack: ["Vue.js", "Pinia", "Node.js", "Express", "MariaDB", "Sequelize"],
    code: "https://github.com/vadym-loik/Groupomania",
  },
  {
    id: "piiquante",
    title: "Piiquante",
    image: piiquante,
    stack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    code: "https://github.com/vadym-loik/Piiquante-main",
  },
  {
    id: "kanap",
    title: "Kanap",
    image: kanap,
    stack: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/vadym-loik/kanap",
  },
  {
    id: "ohmyfood",
    title: "OhMyFood",
    image: ohmyfood,
    stack: ["HTML", "Sass"],
    site: "https://vadym-loik.github.io/ohMyFood2/",
    code: "https://github.com/vadym-loik/ohMyFood2",
  },
  {
    id: "optimize",
    title: "Optimize",
    image: optimize,
    stack: ["HTML", "CSS", "SEO"],
    site: "https://vadym-loik.github.io/optimize/",
    code: "https://github.com/vadym-loik/optimize",
  },
];

export type SkillGroupId = "frontend" | "backend" | "databases" | "tools";

export const skills: Record<SkillGroupId, string[]> = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt",
    "Pinia",
    "Tailwind CSS",
    "Sass",
    "Blazor",
  ],
  backend: ["Node.js", "Express", "C#", ".NET", "Supabase", "REST API"],
  databases: ["SQL", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Mongoose", "Drizzle ORM", "Sequelize"],
  tools: ["Git", "GitHub", "GitHub Actions", "Netlify", "Vercel", "Vite", "Claude Code"],
};
