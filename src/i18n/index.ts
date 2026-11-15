import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { fr } from "./fr";
import { uk } from "./uk";

const dictionaries: Record<Locale, Dictionary> = { en, fr, uk };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
