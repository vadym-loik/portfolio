export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before the page paints, so there is no flash of the wrong theme.
 * Saved choice first, then the system setting.
 */
export const themeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;
