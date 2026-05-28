import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Education — Enes Senel" },
      { name: "description", content: "About Enes Senel and academic background in computational biology, bioinformatics, and molecular biology." },
      { property: "og:title", content: "About & Education — Enes Senel" },
      { property: "og:description", content: "Academic background and story." },
    ],
  }),
  component: About,
});

const education = [
  {
    year: "2018 — 2022",
    degree: "Ph.D. in Computational Biology",
    school: "Max Planck Institute",
    detail: "Dissertation on graph neural networks for gene regulatory inference. Advisor: Prof. A. Hartmann.",
  },
  {
    year: "2016 — 2018",
    degree: "M.Sc. in Bioinformatics",
    school: "ETH Zürich",
    detail: "Thesis on probabilistic models for single-cell trajectories. Graduated with distinction.",
  },
  {
    year: "2012 — 2016",
    degree: "B.Sc. in Molecular Biology & Genetics",
    school: "Boğaziçi University",
    detail: "Minor in Mathematics. Undergraduate research in transcriptomics.",
  },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="A scientist who treats software like a research instrument."
        lead="I'm Enes — I work on the messy seam between biology and code. I care about reproducibility, careful statistics, and tools that other scientists actually enjoy using."
      />

      <section className="container-prose grid gap-12 pb-16 md:grid-cols-12">
        <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            I grew up curious about how living systems organize themselves, and
            ended up in the part of biology where the answers live inside
            terabytes of sequencing reads.
          </p>
          <p>
            Today I lead computational projects in drug discovery, translating
            multi-omics signals into target hypotheses, then iterating with wet-lab
            colleagues until the models earn their keep.
          </p>
          <p>
            When I'm not at a terminal, I'm probably baking sourdough, hiking, or
            tinkering with an old film camera.
          </p>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow">Toolbox</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground">
              {["Python", "R", "Nextflow", "PyTorch", "Scanpy", "DuckDB", "Snakemake", "AWS"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="container-prose pb-24">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-3xl font-medium">Education</h2>
          <span className="eyebrow">Three chapters</span>
        </div>
        <ol className="mt-8 space-y-6">
          {education.map((e) => (
            <li
              key={e.degree}
              className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[180px_1fr] md:gap-8 md:p-8"
            >
              <span className="eyebrow self-start">{e.year}</span>
              <div>
                <h3 className="font-display text-xl font-medium text-foreground">{e.degree}</h3>
                <p className="mt-1 text-sienna">{e.school}</p>
                <p className="mt-3 text-muted-foreground">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
