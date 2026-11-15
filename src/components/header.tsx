import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export const sectionIds = ["experience", "projects", "skills", "about", "contact"] as const;

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-full bg-accent text-sm text-[#101813]">VL</span>
          <span className="hidden sm:inline">Vadym Loik</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium text-muted">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-accent-strong">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} label={t.nav.language} />
          <ThemeToggle label={t.nav.theme} />
        </div>
      </div>
    </header>
  );
}
