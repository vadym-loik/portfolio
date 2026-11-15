import { Manrope } from "next/font/google";

// Manrope has Latin and Cyrillic letters (English, French and Ukrainian)
export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});
