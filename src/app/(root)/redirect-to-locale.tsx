"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { defaultLocale, hasLocale, LOCALE_STORAGE_KEY } from "@/i18n/config";

/** Saved choice first, then the browser language, then English */
function preferredLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (hasLocale(saved)) return saved;
  } catch {
    // Private mode: no saved choice
  }
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return hasLocale(browser) ? browser : defaultLocale;
}

export function RedirectToLocale() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${preferredLocale()}`);
  }, [router]);
  return null;
}
