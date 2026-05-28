import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work History — Enes Senel" },
      { name: "description", content: "Professional roles of Enes Senel: Johnson & Johnson Innovative Medicine, Max Delbrück Center, Hebrew University of Jerusalem, Coriolis Pharma, Max Planck Institute, Ozyegin Robotics Lab." },
      { property: "og:title", content: "Work History — Enes Senel" },
      { property: "og:description", content: "A decade across biotech, pharma, and research labs." },
    ],
  }),
  component: Work,
});

const roles = [
  {
    period: "Aug 2025 — Present",
    role: "Senior Scientist",
    company: "Johnson & Johnson Innovative Medicine",
    location: "Berlin, Germany",
    bullets: [
      "Leading single-cell multi-omics analysis projects in oncology and immunology, integrating transcriptomic, proteomic, and spatial datasets to uncover immune mechanisms and inform therapeutic strategy from discovery through product development.",
      "Mentoring junior scientists and managing consultants; fostering cross-functional collaboration and technical excellence.",
      "Contributing to strategic planning, experimental design, and translational initiatives — bridging computational insights with experimental validation.",
    ],
  },
  {
    period: "Oct 2023 — Jul 2025",
    role: "Data Scientist",
    company: "Johnson & Johnson Innovative Medicine",
    location: "Berlin, Germany",
    bullets: [
      "Developed automated high-throughput pipelines for large-scale single-cell RNA, protein, and multi-modal analyses using Python and Nextflow — enabling rapid, reproducible decision-making across clinical and manufacturing programs.",
      "Led single-cell analysis projects across clinical and manufacturing programs, delivering insights to guide biomarker discovery and process optimization.",
    ],
  },
  {
    period: "Oct 2019 — Sep 2023",
    role: "Doctoral Researcher",
    company: "Max Delbrück Center for Molecular Medicine",
    location: "Berlin, Germany",
    bullets: [
      "Developed Optocoder, a machine-learning pipeline for optical sequencing-based spatial transcriptomics platforms — accurate decoding of barcoded transcripts from imaging data.",
      "Improved performance and scalability of novoSpaRc, a model for reconstructing spatial tissue architecture from single-cell transcriptomic data, enabling application to larger tissues and high-resolution spatial maps.",
    ],
  },
  {
    period: "Feb 2023 — Apr 2023",
    role: "Visiting Scientist",
    company: "The Hebrew University of Jerusalem",
    location: "Rehovot, Israel",
    bullets: [
      "Built an ML pipeline leveraging pre-trained large language models (ProtBERT) to identify and predict novel anti-insecticidal proteins from raw sequence data; integrated biological domain knowledge to guide interpretability and experimental validation.",
    ],
  },
  {
    period: "Apr 2019 — Sep 2019",
    role: "Machine Learning Research Student",
    company: "Coriolis Pharma GmbH",
    location: "Munich, Germany",
    bullets: [
      "Developed deep-learning solutions for automated particle detection and classification from flow microscopy images.",
      "Created an integrated Python/PyTorch/TensorFlow package handling data processing, model training, analysis, and evaluation.",
    ],
  },
  {
    period: "May 2018 — Sep 2019",
    role: "Research Assistant",
    company: "Max Planck Institute for Brain Research",
    location: "Frankfurt am Main, Germany",
    bullets: [
      "Used supervised ML to investigate activity-dependent changes in the proteome.",
      "Designed an analysis pipeline combining domain adaptation and multimodal integration for proteomic and transcriptomic data.",
    ],
  },
  {
    period: "2014 — 2016",
    role: "Undergraduate Research Assistant",
    company: "Ozyegin University Robotics Lab",
    location: "Istanbul, Turkey",
    bullets: [
      "Developed real-time needle tip localization and tracking algorithms using ultrasound imaging — enabling autonomous robotic control for image-guided biopsy.",
      "Built an end-user C++/CUDA software interface to guide the biopsy robot with real-time image analysis feedback.",
    ],
  },
];

function Work() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Work"
        title="A decade of shipping science."
        lead="From robotics labs to spatial transcriptomics to clinical-stage cell therapy — the same instinct: build the smallest tool that answers the right question."
      />

      <section className="container-prose pb-24">
        <ol className="space-y-6">
          {roles.map((r) => (
            <li
              key={r.role + r.company + r.period}
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
