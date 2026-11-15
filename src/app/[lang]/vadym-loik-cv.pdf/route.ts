import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/cv/cv-document";
import { getDictionary } from "@/i18n";
import { hasLocale, locales } from "@/i18n/config";

// Built once at `next build`: the static export saves /en/vadym-loik-cv.pdf and /fr/vadym-loik-cv.pdf
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: RouteContext<"/[lang]/vadym-loik-cv.pdf">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return new Response(null, { status: 404 });

  // Called as a function: renderToBuffer needs the <Document> element itself (CvDocument has no hooks)
  const pdf = await renderToBuffer(CvDocument({ locale: lang, t: getDictionary(lang) }));
  return new Response(new Uint8Array(pdf), { headers: { "Content-Type": "application/pdf" } });
}
