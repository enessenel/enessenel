import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work History — Enes Senel" },
      { name: "description", content: "Professional roles and industry experience of Enes Senel across biotech and pharma." },
      { property: "og:title", content: "Work History — Enes Senel" },
      { property: "og:description", content: "Roles across biotech and pharma." },
    ],
  }),
  component: Work,
});

const roles = [
  {
    period: "2023 — Present",
    role: "Senior Scientist, Computational Biology",
    company: "Helix Therapeutics",
    location: "Berlin, DE",
    bullets: [
      "Lead a 4-person team building multi-omics pipelines that triage 200+ targets per quarter.",
      "Designed a transformer-based perturbation model adopted by three discovery programs.",
      "Partner with chemistry and biology leads to translate signals into validated hypotheses.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Computational Biologist",
    company: "Insitro",
    location: "Remote",
    bullets: [
      "Built scalable single-cell and spatial workflows on Nextflow + AWS Batch.",
      "Contributed core modules to internal target-discovery platform.",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Research Scientist (PhD)",
    company: "Max Planck Institute",
    location: "Munich, DE",
    bullets: [
      "Published in Nature Methods and Cell Systems on regulatory network inference.",
      "TA for graduate-level statistical genomics course.",
    ],
  },
];

function Work() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Work"
        title="A decade of shipping science."
        lead="From academic labs to fast-moving biotech — the same instinct: build the smallest tool that answers the right question."
      />

      <section className="container-prose pb-24">
        <ol className="space-y-6">
          {roles.map((r) => (
            <li
              key={r.role + r.company}
              className="rounded-2xl border border-border bg-card p-7 md:p-9"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground">{r.role}</h3>
                  <p className="mt-1 text-sienna">{r.company} · {r.location}</p>
                </div>
                <p className="eyebrow">{r.period}</p>
              </div>
              <ul className="mt-5 space-y-2.5">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-foreground/90">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
