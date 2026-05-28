import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Enes Senel" },
      { name: "description", content: "Open-source and side projects by Enes Senel in computational biology, ML, and data tooling." },
      { property: "og:title", content: "Projects — Enes Senel" },
      { property: "og:description", content: "Open-source and side projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "scOmics",
    blurb: "Notebook-first analysis toolkit for single-cell multi-omics. Opinionated defaults, batteries included.",
    tags: ["Python", "Open source", "1.2k ★"],
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    name: "VariantLens",
    blurb: "Browser-based variant prioritization with offline-capable annotation.",
    tags: ["TypeScript", "WASM"],
  },
  {
    name: "PathwayBench",
    blurb: "A reproducible benchmark suite for pathway-level inference methods.",
    tags: ["Nextflow", "R"],
  },
  {
    name: "Field Notes",
    blurb: "An essay series on craft, taste, and tooling in modern computational biology.",
    tags: ["Writing"],
  },
  {
    name: "Atlas Cards",
    blurb: "Tiny visual summaries of public single-cell atlases — for teaching and lab onboarding.",
    tags: ["Design", "Education"],
  },
];

function Projects() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Projects"
        title="Things I made, mostly on weekends."
        lead="A mix of open-source tools, internal experiments that escaped, and writing. Some are maintained, some are warmly retired."
      />

      <section className="container-prose pb-24">
        <div className="grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className={`group flex flex-col justify-between rounded-2xl border border-border p-6 transition-shadow hover:shadow-[0_25px_60px_-35px_color-mix(in_oklab,var(--sienna)_60%,transparent)] ${
                p.accent
                  ? "bg-gradient-to-br from-primary to-sienna text-primary-foreground"
                  : "bg-card"
              } ${p.span ?? ""}`}
            >
              <div>
                <h3
                  className={`font-display text-2xl font-medium ${
                    p.accent ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    p.accent ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {p.blurb}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs ${
                      p.accent
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
