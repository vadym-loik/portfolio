export const locales = ["en", "fr", "uk"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** localStorage key: the language that the visitor chose last */
export const LOCALE_STORAGE_KEY = "locale";

export function hasLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}

/** Short name in the language switcher ("UK" would read as United Kingdom) */
export const localeLabel: Record<Locale, string> = { en: "EN", fr: "FR", uk: "UA" };

/** Date formats per language */
export const intlLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR", uk: "uk-UA" };
