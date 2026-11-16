import Image from "next/image";
import { projects, trainingProjects, type Project } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { StackList } from "./stack-list";

function ProjectLinks({ project, t }: { project: Project; t: Dictionary }) {
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      {project.site && (
        <a href={project.site} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
          {t.projects.site}
          <ArrowUpRightIcon />
        </a>
      )}
      {project.code && (
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
          <GitHubIcon className="size-4" />
          {t.projects.code}
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, t, featured }: { project: Project; t: Dictionary; featured: boolean }) {
  return (
    <article className="card group grid overflow-hidden md:grid-cols-2">
      <div className="overflow-hidden bg-surface-soft">
        <Image
          src={project.image}
          alt=""
          sizes="(min-width: 768px) 560px, 100vw"
          className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        {(featured || project.personal) && (
          <div className="flex flex-wrap gap-2">
            {featured && <span className="chip bg-accent font-semibold text-[#101813]">{t.projects.featured}</span>}
            {project.personal && <span className="chip">{t.projects.personal}</span>}
          </div>
        )}
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="leading-relaxed text-muted">{t.projects.items[project.id]}</p>
        <StackList items={project.stack} />
        <div className="mt-auto pt-2">
          <ProjectLinks project={project} t={t} />
        </div>
      </div>
    </article>
  );
}

export function Projects({ t }: { t: Dictionary }) {
  return (
    <section id="projects" className="container-site py-20">
      <h2 className="section-title">{t.projects.title}</h2>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} t={t} featured={index === 0} />
        ))}
      </div>

      <h3 className="mt-16 text-xl font-semibold">{t.projects.trainingTitle}</h3>
      <p className="mt-1 text-muted">{t.projects.trainingIntro}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainingProjects.map((project) => (
          <li key={project.id} className="card flex flex-col gap-3 p-5">
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-sm leading-relaxed text-muted">{t.projects.items[project.id]}</p>
            <p className="text-xs font-medium text-muted">{project.stack.join(" · ")}</p>
            <div className="mt-auto">
              <ProjectLinks project={project} t={t} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
