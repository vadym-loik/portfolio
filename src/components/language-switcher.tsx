"use client";

import { basePath } from "@/lib/base-path";
import { LOCALE_STORAGE_KEY, localeLabel, locales, type Locale } from "@/i18n/config";

/**
 * Plain links (full page load), not next/link: a client-side navigation renders <html> again
 * and removes the "dark" class that the theme script adds. A full load runs the script again.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="flex rounded-full bg-surface-soft p-1 text-xs font-semibold">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <a
                href={`${basePath}/${locale}/`}
                hrefLang={locale}
                lang={locale}
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  try {
                    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
                  } catch {
                    // Private mode: the choice is not saved
                  }
                }}
                className={`block rounded-full px-3 py-1.5 transition-colors ${
                  active ? "bg-accent-strong text-on-accent" : "text-muted hover:text-ink"
                }`}
              >
                {localeLabel[locale]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
