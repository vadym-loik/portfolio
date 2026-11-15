"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Private mode: the choice is not saved, the toggle still works
    }
  }

  return (
    <button type="button" onClick={toggle} className="icon-btn" aria-label={label} title={label}>
      {/* CSS shows the right icon, so the server HTML matches any theme */}
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}
