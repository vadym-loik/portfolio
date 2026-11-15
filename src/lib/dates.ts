import { intlLocale, type Locale } from "@/i18n/config";

/** "2025-06" → "Jun 2025" (en) or "juin 2025" (fr) */
export function formatMonth(yearMonth: string, locale: Locale): string {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(intlLocale[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1)),
  );
}

/** Full years from "YYYY-MM" until today (the build date) */
export function yearsSince(yearMonth: string): number {
  const [year, month] = yearMonth.split("-").map(Number);
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.floor(months / 12);
}
