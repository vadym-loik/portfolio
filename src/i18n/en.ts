import type { ExperienceId, ProjectId, SkillGroupId } from "@/content/data";

export const en = {
  meta: {
    title: "Vadym Loik — Full-stack Developer",
    description:
      "Full-stack developer in France: React, Next.js, Vue.js, TypeScript, Node.js, SQL. Experience with C#, Blazor and .NET.",
  },
  nav: {
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    theme: "Change the color theme",
    language: "Language",
  },
  hero: {
    role: "Full-stack Developer",
    location: "France",
    intro:
      "I build fast, clear and reliable web applications, from the user interface to the database. I work with React, Next.js, Vue.js, TypeScript and Node.js.",
    yearsLabel: "years of experience",
    photoAlt: "Photo of Vadym Loik",
    cv: "Download CV",
    contact: "Contact me",
  },
  experience: {
    title: "Experience",
    present: "Present",
    via: "via",
    remote: "Remote",
    nda: "Stack and project details are under NDA.",
    items: {
      stellantis:
        "Full-stack development of internal web applications for a global automotive group. Work in an agile team, from the user interface to the server side.",
      insight:
        "Development of the user interface of web applications with C#, Blazor and .NET. Responsive layouts with Tailwind CSS.",
      hopways:
        "Development of an invoicing web application with Next.js: user interface, data model and MySQL database on PlanetScale.",
      marte:
        "Development of websites and web applications: front end with Vue.js, server side with Node.js, SQL and NoSQL databases.",
    } satisfies Record<ExperienceId, string>,
  },
  projects: {
    title: "Projects",
    featured: "Featured",
    site: "Website",
    code: "Code",
    trainingTitle: "Training projects",
    trainingIntro: "Projects from the OpenClassrooms “Web Developer” program.",
    items: {
      snugglepaws:
        "Website of a dog leash brand that sells on Amazon. Two languages (EN/FR) with a separate store for each market, a blog and an admin panel to manage products and posts. Secure sign-in, Row Level Security in the database, security headers and CI on every push.",
      hopways:
        "Invoicing web application for Hopways, built with Next.js, Tailwind CSS and a MySQL database on PlanetScale.",
      groupomania:
        "Internal social network: posts, images, likes and user accounts. Vue.js front end and REST API with Express and MariaDB.",
      piiquante: "Secure REST API for a sauce review app: authentication with JWT, image upload, likes.",
      kanap: "E-commerce site in vanilla JavaScript: product pages, cart and order form with validation.",
      ohmyfood: "Mobile-first restaurant booking site with CSS animations and Sass.",
      optimize: "SEO, performance and accessibility audit and fixes of an existing website.",
    } satisfies Record<ProjectId, string>,
  },
  skills: {
    title: "Skills",
    groups: {
      frontend: "Front end",
      backend: "Back end",
      databases: "Databases",
      tools: "Tools & hosting",
    } satisfies Record<SkillGroupId, string>,
  },
  about: {
    title: "About",
    paragraphs: [
      "Before code, I worked 10 years in fitness in Kyiv: first as a personal trainer, then as a fitness manager at EuroGYM. There I learned to lead a team, talk with clients and reach goals step by step.",
      "In 2022 I moved to web development. I completed the OpenClassrooms “Web Developer” program and a React.js course at GRETA 92. Since then I have worked on real products for companies in France.",
      "I also have a Master's degree in Electrical Engineering from the National Aviation University (Kyiv).",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Ukrainian", level: "native" },
      { name: "Russian", level: "native" },
      { name: "English", level: "professional" },
      { name: "French", level: "working" },
      { name: "Romanian", level: "basic" },
    ],
    educationTitle: "Education",
    education: [
      { school: "GRETA 92", course: "JavaScript — React.js", years: "2023 – 2024" },
      { school: "OpenClassrooms", course: "Web Developer (Développeur intégrateur web)", years: "2022 – 2023" },
      { school: "National Aviation University", course: "Master's degree, Electrical Engineering", years: "2006 – 2012" },
    ],
  },
  contact: {
    title: "Let's work together",
    text: "Do you have a project or a job offer? Write to me.",
    email: "Send an e-mail",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;
