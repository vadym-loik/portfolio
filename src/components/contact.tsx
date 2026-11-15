import { profile } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";

export function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contact" className="container-site py-20">
      <div className="rounded-[2rem] bg-accent-soft px-6 py-14 text-center md:px-16">
        <h2 className="section-title mb-4">{t.contact.title}</h2>
        <p className="mx-auto max-w-lg text-lg text-muted">{t.contact.text}</p>

        <a href={`mailto:${profile.email}`} className="btn btn-primary mt-8">
          <MailIcon />
          {t.contact.email}
        </a>
        <p className="mt-3 text-sm text-muted">{profile.email}</p>

        <div className="mt-6 flex justify-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
