"use client";

import Link from "next/link";
import { LOCALE_STORAGE_KEY, locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="flex rounded-full bg-surface-soft p-1 text-xs font-semibold">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <Link
                href={`/${locale}`}
                hrefLang={locale}
                lang={locale}
                aria-current={active ? "page" : undefined}
                scroll={false}
                onClick={() => {
                  try {
                    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
                  } catch {
                    // Private mode: the choice is not saved
                  }
                }}
                className={`block rounded-full px-3 py-1.5 uppercase transition-colors ${
                  active ? "bg-accent-strong text-on-accent" : "text-muted hover:text-ink"
                }`}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
