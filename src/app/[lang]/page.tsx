import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { profile } from "@/content/data";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Header locale={lang} t={t} />
      <main>
        <Hero t={t} />
        <Experience locale={lang} t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <footer className="container-site py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
      </footer>
    </>
  );
}
