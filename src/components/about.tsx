import type { Dictionary } from "@/i18n";

export function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="container-site py-20">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="card space-y-4 p-6 text-lg leading-relaxed text-muted md:p-8">
          {t.about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div className="grid gap-6">
          <div className="card p-6 md:p-8">
            <h3 className="mb-4 text-lg font-semibold">{t.about.languagesTitle}</h3>
            <ul className="space-y-2">
              {t.about.languages.map((lang) => (
                <li key={lang.name} className="flex justify-between gap-4">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 md:p-8">
            <h3 className="mb-4 text-lg font-semibold">{t.about.educationTitle}</h3>
            <ul className="space-y-4">
              {t.about.education.map((item) => (
                <li key={item.school}>
                  <p className="font-medium">{item.school}</p>
                  <p className="text-sm text-muted">
                    {item.course} · {item.years}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
