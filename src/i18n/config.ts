export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** localStorage key: the language that the visitor chose last */
export const LOCALE_STORAGE_KEY = "locale";

export function hasLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}

/** Date formats per language */
export const intlLocale: Record<Locale, string> = { en: "en-US", fr: "fr-FR" };
