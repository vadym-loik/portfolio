import { en, type Dictionary } from "./en";

const name = en.name;

export const fr: Dictionary = {
  name,
  meta: {
    title: `${name} — Développeur Full-stack`,
    description:
      "Développeur full-stack en France : React, Next.js, Vue.js, TypeScript, Node.js, SQL. Expérience en C#, Blazor et .NET.",
  },
  nav: {
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    about: "À propos",
    contact: "Contact",
    theme: "Changer le thème de couleur",
    language: "Langue",
  },
  hero: {
    role: "Développeur Full-stack",
    location: "France",
    intro:
      "Je crée des applications web rapides, claires et fiables, de l'interface à la base de données. Je travaille avec React, Next.js, Vue.js, TypeScript et Node.js.",
    yearsLabel: "ans d'expérience",
    photoAlt: `Photo de ${name}`,
    cv: "Télécharger le CV",
    contact: "Me contacter",
  },
  experience: {
    title: "Expérience",
    present: "Aujourd'hui",
    via: "via",
    remote: "À distance",
    nda: "Stack et détails du projet sous NDA.",
    items: {
      stellantis:
        "Développement full-stack d'applications web internes pour un groupe automobile international. Travail en équipe agile, de l'interface jusqu'au serveur.",
      insight:
        "Développement de l'interface d'applications web avec C#, Blazor et .NET. Mises en page responsives avec Tailwind CSS.",
      hopways:
        "Développement d'une application web de facturation avec Next.js : interface, modèle de données et base MySQL sur PlanetScale.",
      marte:
        "Développement de sites et d'applications web : front-end avec Vue.js, back-end avec Node.js, bases de données SQL et NoSQL.",
    },
  },
  projects: {
    title: "Projets",
    featured: "À la une",
    site: "Site",
    code: "Code",
    trainingTitle: "Projets de formation",
    trainingIntro: "Projets du parcours OpenClassrooms « Développeur intégrateur web ».",
    items: {
      snugglepaws:
        "Site d'une marque de laisses pour chiens vendues sur Amazon. Deux langues (EN/FR) avec une boutique par marché, un blog et un espace admin pour gérer les produits et les articles. Connexion sécurisée, Row Level Security dans la base, en-têtes de sécurité et CI à chaque push.",
      hopways:
        "Application web de facturation pour Hopways, réalisée avec Next.js, Tailwind CSS et une base MySQL sur PlanetScale.",
      groupomania:
        "Réseau social d'entreprise : publications, images, likes et comptes utilisateurs. Front-end Vue.js et API REST avec Express et MariaDB.",
      piiquante: "API REST sécurisée pour une application d'avis sur des sauces : authentification JWT, envoi d'images, likes.",
      kanap: "Site e-commerce en JavaScript natif : pages produits, panier et formulaire de commande avec validation.",
      ohmyfood: "Site de réservation de restaurants, mobile first, avec animations CSS et Sass.",
      optimize: "Audit et corrections SEO, performance et accessibilité d'un site existant.",
    },
  },
  skills: {
    title: "Compétences",
    groups: {
      frontend: "Front-end",
      backend: "Back-end",
      databases: "Bases de données",
      tools: "Outils & hébergement",
    },
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Avant le code, j'ai travaillé 10 ans dans le fitness à Kyiv : d'abord coach sportif, puis manager fitness chez EuroGYM. J'y ai appris à diriger une équipe, à échanger avec les clients et à atteindre des objectifs étape par étape.",
      "En 2022, je me suis reconverti dans le développement web. J'ai terminé le parcours OpenClassrooms « Développeur intégrateur web » et une formation React.js au GRETA 92. Depuis, je travaille sur de vrais produits pour des entreprises en France.",
      "J'ai aussi un master en génie électrique de l'Université nationale de l'aviation (Kyiv).",
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Ukrainien", level: "langue maternelle" },
      { name: "Russe", level: "langue maternelle" },
      { name: "Anglais", level: "professionnel" },
      { name: "Français", level: "intermédiaire" },
      { name: "Roumain", level: "notions" },
    ],
    educationTitle: "Formation",
    education: [
      { school: "GRETA 92", course: "JavaScript — React.js", years: "2023 – 2024" },
      { school: "OpenClassrooms", course: "Développeur intégrateur web", years: "2022 – 2023" },
      { school: "Université nationale de l'aviation", course: "Master, génie électrique", years: "2006 – 2012" },
    ],
  },
  contact: {
    title: "Travaillons ensemble",
    text: "Vous avez un projet ou une offre d'emploi ? Écrivez-moi.",
    email: "Envoyer un e-mail",
  },
  cv: {
    summaryTitle: "Profil",
  },
  footer: {
    rights: "Tous droits réservés.",
  },
};
