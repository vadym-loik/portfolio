# Vadym Loik — Portfolio

Personal portfolio site: experience, projects, skills, about and contact.

- **Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS 4
- **Languages:** English (`/en`) and French (`/fr`). The page `/` sends the visitor to the saved
  language, then to the browser language, else to English.
- **Theme:** light and dark (pastel green palette). The saved choice comes first, then the system setting.
- **Hosting:** GitHub Pages, published by GitHub Actions on every push to `main`.

## Where to change the content

| What | File |
| --- | --- |
| Links (e-mail, phone, LinkedIn, GitHub, site), dates, stacks, skills | `src/content/data.ts` |
| All texts in English | `src/i18n/en.ts` |
| All texts in French | `src/i18n/fr.ts` |
| Colors | `src/app/globals.css` (`:root` = light, `.dark` = dark) |
| Photo and project screenshots | `src/assets/` |

"X+ years of experience" is calculated at build time from `careerStart` in `src/content/data.ts`.

## CV (PDF)

The "Download CV" button gives a PDF that `next build` makes from the same data as the site
(`src/content/data.ts` and the dictionaries). There is one PDF per language:
`/en/vadym-loik-cv.pdf` and `/fr/vadym-loik-cv.pdf`. Change the site content, and the CV changes too.

- Layout: `src/cv/cv-document.tsx` ([@react-pdf/renderer](https://react-pdf.org))
- Route that writes the file: `src/app/[lang]/vadym-loik-cv.pdf/route.ts`

## Run locally

Node.js version: see `.nvmrc`.

```bash
npm install
npm run dev        # http://localhost:3000/en
npm run lint
npm run typecheck
npm run build      # static site in out/
```

## Deploy (GitHub Pages)

One time: on GitHub, open *Settings → Pages → Build and deployment → Source* and select **GitHub Actions**.

After that, every push to `main` runs `.github/workflows/deploy.yml`: lint, type check, build and deploy.
The site is at `https://vadym-loik.github.io/portfolio/`. The workflow sets the base path (`/portfolio`)
through `PAGES_BASE_PATH`, so the same code also works on a custom domain (empty base path).

The old Vue site is in the `old-vue-site` branch.
