import Image from "next/image";
import photo from "@/assets/vadym-loik.webp";
import { profile } from "@/content/data";
import { cvPath } from "@/cv/file";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { basePath } from "@/lib/base-path";
import { yearsSince } from "@/lib/dates";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MapPinIcon, MailIcon } from "./icons";

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  const years = yearsSince(profile.careerStart);

  return (
    <section id="top" className="container-site grid items-center gap-12 pt-16 pb-20 md:grid-cols-[1fr_auto] md:pt-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium">
          <MapPinIcon />
          {t.hero.location}
        </p>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">{t.name}</h1>
        <p className="mt-3 text-2xl font-semibold text-accent-strong md:text-3xl">{t.hero.role}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {/* PDF made at build time from the site data (src/cv) */}
          <a href={`${basePath}${cvPath(locale)}`} download className="btn btn-primary">
            <DownloadIcon />
            {t.hero.cv}
          </a>
          <a href="#contact" className="btn btn-outline">
            <MailIcon />
            {t.hero.contact}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-64 md:w-80">
        {/* Soft pastel blob behind the photo */}
        <div aria-hidden="true" className="absolute -inset-4 rotate-6 rounded-[3rem] bg-accent opacity-60" />
        <Image
          src={photo}
          alt={t.hero.photoAlt}
          priority
          sizes="(min-width: 768px) 320px, 256px"
          className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover"
        />
        <div className="card absolute -bottom-6 -left-6 px-5 py-3 shadow-lg">
          <p className="text-3xl font-bold text-accent-strong">{years}+</p>
          <p className="text-sm text-muted">{t.hero.yearsLabel}</p>
        </div>
      </div>
    </section>
  );
}
