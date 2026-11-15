/**
 * The CV as a PDF. Built at `next build` from the same data as the site:
 * src/content/data.ts and the dictionaries in src/i18n.
 */
import path from "node:path";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { experience, profile, projects, skills, type SkillGroupId } from "@/content/data";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { formatMonth } from "@/lib/dates";

// Same font as the site (Manrope, Latin + Cyrillic in one file).
// Static TTF files made from the Google Fonts variable font; license in fonts/OFL.txt.
const fontDir = path.join(process.cwd(), "src/cv/fonts");
Font.register({
  family: "Manrope",
  fonts: [400, 500, 600, 700].map((fontWeight) => ({
    src: path.join(fontDir, `manrope-${fontWeight}.ttf`),
    fontWeight,
  })),
});
// Keep words whole (no hyphenation)
Font.registerHyphenationCallback((word) => [word]);

// Light theme colors of the site (src/app/globals.css)
const color = {
  ink: "#1c2b21",
  muted: "#56695b",
  accent: "#2f7048",
  soft: "#e6f1e4",
  chip: "#d6ecd8",
  line: "#d3e4d2",
};

const s = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "Manrope",
    fontSize: 9,
    lineHeight: 1.45,
    color: color.ink,
  },
  main: { flex: 1, paddingVertical: 32, paddingHorizontal: 28 },
  side: { width: 196, backgroundColor: color.soft, paddingVertical: 32, paddingHorizontal: 16 },
  name: { fontSize: 24, fontWeight: 700, lineHeight: 1.1 },
  role: { fontSize: 12, fontWeight: 600, color: color.accent, marginTop: 4 },
  section: { marginTop: 16 },
  title: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: color.accent,
    paddingBottom: 3,
    marginBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: color.line,
  },
  item: { marginBottom: 9 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  itemTitle: { fontSize: 10, fontWeight: 600 },
  meta: { color: color.muted, fontSize: 8.5 },
  text: { color: color.muted, marginTop: 2 },
  stack: { fontSize: 8, color: color.accent, fontWeight: 500, marginTop: 3 },
  italic: { fontSize: 8, color: color.muted, marginTop: 3 },
  link: { color: color.ink, textDecoration: "none" },
  contact: { marginBottom: 4, fontSize: 8.5 },
  label: { fontSize: 7.5, color: color.muted, textTransform: "uppercase", letterSpacing: 0.5 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
  chip: { backgroundColor: color.chip, borderRadius: 6, paddingVertical: 1.5, paddingHorizontal: 5, fontSize: 7.5 },
  groupTitle: { fontSize: 8.5, fontWeight: 600, marginTop: 6, marginBottom: 3 },
});

/** "https://www.linkedin.com/in/x/" → "linkedin.com/in/x" */
function shortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.title}>{title}</Text>
      {children}
    </View>
  );
}

export function CvDocument({ locale, t }: { locale: Locale; t: Dictionary }) {
  const contacts = [
    { label: "E-mail", text: profile.email, href: `mailto:${profile.email}` },
    { label: "WhatsApp", text: profile.phone, href: profile.whatsapp },
    { label: "LinkedIn", text: shortUrl(profile.linkedin), href: profile.linkedin },
    { label: "GitHub", text: shortUrl(profile.github), href: profile.github },
    { label: "Portfolio", text: shortUrl(profile.website), href: `${profile.website}${locale}/` },
  ];
  const skillGroups = Object.entries(skills) as [SkillGroupId, string[]][];

  return (
    <Document title={`${t.name} — CV`} author={t.name} subject={t.hero.role} language={locale}>
      <Page size="A4" style={s.page}>
        <View style={s.main}>
          <Text style={s.name}>{t.name}</Text>
          <Text style={s.role}>{t.hero.role}</Text>
          <Text style={[s.meta, { marginTop: 2 }]}>{t.hero.location}</Text>

          <Section title={t.cv.summaryTitle}>
            <Text style={s.text}>{t.hero.intro}</Text>
          </Section>

          <Section title={t.experience.title}>
            {experience.map((job) => (
              <View key={job.id} style={s.item} wrap={false}>
                <View style={s.row}>
                  <Text style={s.itemTitle}>{job.role}</Text>
                  <Text style={s.meta}>
                    {formatMonth(job.start, locale)} – {job.end ? formatMonth(job.end, locale) : t.experience.present}
                  </Text>
                </View>
                <Text style={s.meta}>
                  {job.client ? `${job.client} · ${t.experience.via} ${job.company}` : job.company} · {job.location}
                  {job.remote ? ` · ${t.experience.remote}` : ""}
                </Text>
                <Text style={s.text}>{t.experience.items[job.id]}</Text>
                {job.stack ? (
                  <Text style={s.stack}>{job.stack.join(" · ")}</Text>
                ) : (
                  <Text style={s.italic}>{t.experience.nda}</Text>
                )}
              </View>
            ))}
          </Section>

          <Section title={t.projects.title}>
            {projects.map((project) => (
              <View key={project.id} style={s.item} wrap={false}>
                <View style={s.row}>
                  <Text style={s.itemTitle}>{project.title}</Text>
                  {project.site && (
                    <Link src={project.site} style={[s.meta, s.link]}>
                      {shortUrl(project.site)}
                    </Link>
                  )}
                </View>
                <Text style={s.text}>{t.projects.items[project.id]}</Text>
                <Text style={s.stack}>{project.stack.join(" · ")}</Text>
              </View>
            ))}
          </Section>
        </View>

        <View style={s.side}>
          {contacts.map((c) => (
            <View key={c.label} style={s.contact}>
              <Text style={s.label}>{c.label}</Text>
              <Link src={c.href} style={s.link}>
                {c.text}
              </Link>
            </View>
          ))}

          <Section title={t.skills.title}>
            {skillGroups.map(([id, items]) => (
              <View key={id}>
                <Text style={s.groupTitle}>{t.skills.groups[id]}</Text>
                <View style={s.chips}>
                  {items.map((item) => (
                    <Text key={item} style={s.chip}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </Section>

          <Section title={t.about.languagesTitle}>
            {t.about.languages.map((lang) => (
              <View key={lang.name} style={s.row}>
                <Text>{lang.name}</Text>
                <Text style={s.meta}>{lang.level}</Text>
              </View>
            ))}
          </Section>

          <Section title={t.about.educationTitle}>
            {t.about.education.map((item) => (
              <View key={item.school} style={{ marginBottom: 5 }}>
                <Text style={{ fontWeight: 600 }}>{item.school}</Text>
                <Text style={s.meta}>{item.course}</Text>
                <Text style={s.meta}>{item.years}</Text>
              </View>
            ))}
          </Section>
        </View>
      </Page>
    </Document>
  );
}
