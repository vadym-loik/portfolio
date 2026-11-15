import { skills, type SkillGroupId } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { StackList } from "./stack-list";

export function Skills({ t }: { t: Dictionary }) {
  const groups = Object.entries(skills) as [SkillGroupId, string[]][];

  return (
    <section id="skills" className="container-site py-20">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map(([id, items]) => (
          <div key={id} className="card p-6 md:p-8">
            <h3 className="mb-5 text-lg font-semibold">{t.skills.groups[id]}</h3>
            <StackList items={items} />
          </div>
        ))}
      </div>
    </section>
  );
}
