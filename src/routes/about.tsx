import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Education — Enes Senel" },
      { name: "description", content: "About Enes Senel — PhD in Computational Biology (Humboldt Berlin / Max Delbrück Center), MSc Computer Science (TU Munich), BSc Computer Science (Ozyegin University)." },
      { property: "og:title", content: "About & Education — Enes Senel" },
      { property: "og:description", content: "Academic background and story." },
    ],
  }),
  component: About,
});

const education = [
  {
    year: "2019 — 2026 (exp.)",
    degree: "Ph.D. in Computational Biology",
    school: "Humboldt University of Berlin · Max Delbrück Center",
    detail:
      "Thesis: Computational modelling and machine learning for spatial transcriptomics and cell–cell interactions. Focus: ML, bioinformatics, transcriptomics.",
  },
  {
    year: "2016 — 2019",
    degree: "M.Sc. in Computer Science",
    school: "Technical University of Munich",
    detail:
      "Thesis: Analysis of activity-dependent proteomic changes associated with homeostatic scaling. DAAD MSc Scholarship. Focus: ML, AI, bioinformatics.",
  },
  {
    year: "2012 — 2016",
    degree: "B.Sc. in Computer Science",
    school: "Ozyegin University, Istanbul",
    detail:
      "Thesis: A standalone application for a 2D ultrasound-guided medical robotic system. Focus: software development, medical robotics, computer vision.",
  },
];

const tools = ["Python", "C++", "Java", "PyTorch", "TensorFlow", "Keras", "R", "SQL", "Nextflow", "scanpy"];
const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "Advanced" },
  { name: "Turkish", level: "Native" },
];

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="A computer scientist who treats software like a research instrument."
        lead="I'm Enes — Senior Scientist at Johnson & Johnson Innovative Medicine. I lead ML and computational biology programs in oncology and immunology, but my background spans medical robotics, computer vision, neuroscience, and open-source tools. I care about reproducibility, careful statistics, and shipping systems other people actually want to use."
      />

      <section className="container-prose grid gap-12 pb-16 md:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90 md:col-span-7">
          <p>
            I trained as a computer scientist in Istanbul and Munich. My first
            research years were in a robotics lab building real-time
            computer-vision systems for image-guided biopsy robots, then
            deep-learning pipelines for pharmaceutical quality control, and
            multi-omics integration in computational neuroscience.
          </p>
          <p>
            I moved to Berlin for a PhD in computational biology at the Max
            Delbrück Center, working on spatial transcriptomics and the
            algorithms that let us reconstruct tissue from single-cell data —
            shipping open-source tools used by labs and industry.
          </p>
          <p>
            Today I lead multi-omics projects in drug discovery, mentoring
            junior scientists and bridging computational, experimental, and
            clinical teams. I'm equally interested in roles that lean toward
            ML engineering, applied research leadership, or domain-bridging
            scientific work outside biology.
          </p>
        </div>
        <aside className="space-y-5 md:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow">Toolbox</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground">
              {tools.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow">Languages</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between">
                  <span>{l.name}</span>
                  <span className="text-muted-foreground">{l.level}</span>
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
              className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[200px_1fr] md:gap-8 md:p-8"
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

      <section className="container-prose pb-24">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-3xl font-medium">Service</h2>
          <span className="eyebrow">Community</span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow">2022 — 2023</p>
            <h3 className="mt-3 font-display text-xl font-medium text-foreground">Helmholtz Juniors — Member</h3>
            <p className="mt-3 text-muted-foreground">
              Elected representative for ~8,000 PhD students across the
              Helmholtz Association. Contributed to the 2021 PhD survey analysis
              and per-center reports.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="eyebrow">2020 — 2023</p>
            <h3 className="mt-3 font-display text-xl font-medium text-foreground">MDC PhD Representatives — Awareness team</h3>
            <p className="mt-3 text-muted-foreground">
              Worked on improving contracts, salaries, and working conditions
              for doctoral students at the Max Delbrück Center.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
