import Link from "next/link";
import { localeLabel, locales } from "@/i18n/config";
import { RedirectToLocale } from "./redirect-to-locale";

export default function RootPage() {
  return (
    <main className="grid min-h-screen place-items-center">
      <RedirectToLocale />
      {/* Fallback when JavaScript is off */}
      <ul className="flex gap-6 font-semibold">
        {locales.map((locale) => (
          <li key={locale}>
            <Link href={`/${locale}`} className="link">
              {localeLabel[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
