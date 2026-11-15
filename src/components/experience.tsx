import { experience } from "@/content/data";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { formatMonth } from "@/lib/dates";
import { StackList } from "./stack-list";

export function Experience({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section id="experience" className="container-site py-20">
      <h2 className="section-title">{t.experience.title}</h2>

      <ol className="relative space-y-6 border-l-2 border-line pl-6 md:pl-8">
        {experience.map((job) => {
          const current = !job.end;
          return (
            <li key={job.id} className="relative">
              {/* Timeline dot: filled for the current job */}
              <span
                aria-hidden="true"
                className={`absolute top-7 -left-[calc(1.5rem+7px)] size-3 rounded-full border-2 border-accent-strong md:-left-[calc(2rem+7px)] ${
                  current ? "bg-accent-strong" : "bg-bg"
                }`}
              />
              <article className="card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-sm font-medium text-muted">
                    {formatMonth(job.start, locale)} – {job.end ? formatMonth(job.end, locale) : t.experience.present}
                  </p>
                </div>
                <p className="mt-1 font-medium text-accent-strong">
                  {job.client ? (
                    <>
                      {job.client} <span className="font-normal text-muted">· {t.experience.via} {job.company}</span>
                    </>
                  ) : (
                    job.company
                  )}
                  <span className="font-normal text-muted">
                    {" "}
                    · {job.location}
                    {job.remote && ` · ${t.experience.remote}`}
                  </span>
                </p>
                <p className="mt-4 leading-relaxed text-muted">{t.experience.items[job.id]}</p>
                <div className="mt-5">
                  {job.stack ? (
                    <StackList items={job.stack} />
                  ) : (
                    <p className="text-sm text-muted italic">{t.experience.nda}</p>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
