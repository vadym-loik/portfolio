import { intlLocale, type Locale } from "@/i18n/config";

/** "2025-06" → "Jun 2025" (en), "juin 2025" (fr), "черв. 2025" (uk) */
export function formatMonth(yearMonth: string, locale: Locale): string {
  const [year, month] = yearMonth.split("-").map(Number);
  const format = new Intl.DateTimeFormat(intlLocale[locale], { month: "short", year: "numeric", timeZone: "UTC" });
  // Only month and year: Ukrainian adds " р." ("year") after the number
  return format
    .formatToParts(new Date(Date.UTC(year, month - 1)))
    .filter((part) => part.type === "month" || part.type === "year")
    .map((part) => part.value)
    .join(" ");
}

/** Full years from "YYYY-MM" until today (the build date) */
export function yearsSince(yearMonth: string): number {
  const [year, month] = yearMonth.split("-").map(Number);
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.floor(months / 12);
}
