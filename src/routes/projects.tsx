import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Enes Senel" },
      { name: "description", content: "Open-source tools and research projects by Enes Senel: Optocoder, novoSpaRc, ML for medical robotics, and more." },
      { property: "og:title", content: "Projects — Enes Senel" },
      { property: "og:description", content: "Open-source tools and research projects." },
    ],
  }),
  component: Projects,
});

type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  span?: string;
  accent?: boolean;
};

const projects: Project[] = [
  {
    name: "Optocoder",
    blurb:
      "Machine-learning pipeline for optical sequencing-based spatial transcriptomics — accurate decoding of barcoded transcripts directly from imaging data. Published in NAR Bioinformatics.",
    tags: ["Python", "Spatial transcriptomics", "Open source"],
    href: "https://github.com/rajewsky-lab/optocoder",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    name: "novoSpaRc",
    blurb:
      "Flexible spatial reconstruction of single-cell gene expression using optimal transport. Co-first author; published in Nature Protocols.",
    tags: ["Python", "Optimal transport", "Open source"],
    href: "https://github.com/rajewsky-lab/novosparc",
  },
  {
    name: "3D tissue expression IP",
    blurb:
      "US patent for a method and system to computationally reconstruct 3D tissue gene-expression data (US20240257914A1).",
    tags: ["Patent", "Spatial"],
  },
  {
    name: "ProtBERT for anti-insecticidals",
    blurb:
      "Pipeline using pre-trained protein LLMs (ProtBERT) to identify novel anti-insecticidal proteins from raw sequence data, with biological priors for interpretability.",
    tags: ["LLMs", "Proteomics"],
  },
  {
    name: "Flow-imaging deep learning",
    blurb:
      "Deep-learning system for automated particle detection and classification in cell-based medicinal products from flow microscopy images.",
    tags: ["PyTorch", "Cytotherapy"],
  },
  {
    name: "Ultrasound needle tracking",
    blurb:
      "Real-time needle tip localization in 2D ultrasound for robotic biopsy — C++/CUDA implementation feeding live feedback to clinicians.",
    tags: ["C++", "CUDA", "Robotics"],
  },
];

function Projects() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Projects"
        title="Tools I've built, mostly for science."
        lead="A mix of open-source bioinformatics tools, ML systems for industry collaborations, and research code that escaped the lab notebook."
      />

      <section className="container-prose pb-24">
        <div className="grid auto-rows-[minmax(200px,auto)] gap-5 md:grid-cols-3">
          {projects.map((p) => {
            const Inner = (
              <>
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
                      p.accent ? "text-primary-foreground/85" : "text-muted-foreground"
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
              </>
            );

            const classes = `group flex flex-col justify-between rounded-2xl border border-border p-6 transition-shadow hover:shadow-[0_25px_60px_-35px_color-mix(in_oklab,var(--sienna)_60%,transparent)] ${
              p.accent
                ? "bg-gradient-to-br from-primary to-sienna text-primary-foreground"
                : "bg-card"
            } ${p.span ?? ""}`;

            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className={classes}>
                {Inner}
              </a>
            ) : (
              <article key={p.name} className={classes}>
                {Inner}
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
