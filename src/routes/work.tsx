import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work History — Enes Senel" },
      { name: "description", content: "Senior Scientist with a decade leading computational biology, single-cell multi-omics, and ML pipelines across Johnson & Johnson, Max Delbrück Center, Max Planck, and Coriolis Pharma." },
      { property: "og:title", content: "Work History — Enes Senel" },
      { property: "og:description", content: "Leadership in computational biology, single-cell multi-omics, and translational ML — from discovery through clinical and manufacturing programs." },
    ],
  }),
  component: Work,
});

type Role = {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  bullets: string[];
  skills: string[];
};

const roles: Role[] = [
  {
    period: "Aug 2025 — Present",
    role: "Senior Scientist, Computational Biology",
    company: "Johnson & Johnson Innovative Medicine",
    location: "Berlin, Germany",
    summary:
      "Technical lead for single-cell multi-omics in oncology and immunology, from discovery through product development.",
    bullets: [
      "Lead single-cell multi-omics programs (transcriptomics, proteomics, spatial) that feed target selection, mechanism-of-action work, and translational strategy for oncology and immunology assets.",
      "Set the analytical direction across several parallel projects: defining standards, reviewing methodology, and agreeing deliverables with clinical and discovery stakeholders.",
      "Mentor junior scientists and manage external consultants, mostly through code review, design discussions, and onboarding.",
      "Work with wet-lab, clinical, and CMC teams to turn analyses into experimental designs and go/no-go decisions.",
    ],
    skills: ["Team leadership", "Scientific strategy", "Single-cell multi-omics", "Oncology & immunology", "Stakeholder management", "Mentorship"],
  },
  {
    period: "Oct 2023 — Jul 2025",
    role: "Data Scientist, Computational Biology",
    company: "Johnson & Johnson Innovative Medicine",
    location: "Berlin, Germany",
    summary:
      "Built the team's production analysis infrastructure and led single-cell projects across clinical and manufacturing programs.",
    bullets: [
      "Built automated Nextflow/Python pipelines for scRNA-seq, CITE-seq, and multi-modal analyses, replacing manual workflows that previously took days per dataset.",
      "Led the single-cell analyses behind biomarker discovery for a clinical-stage cell therapy and process characterisation for CMC, including work that went into regulatory documentation.",
      "Set up the team's reproducibility conventions — containerisation, version-controlled pipelines, shared QC standards — now the default for new projects.",
      "Reviewed colleagues' analyses as the team's main technical reviewer.",
    ],
    skills: ["Pipeline architecture", "Nextflow", "Python", "scRNA-seq / CITE-seq", "Reproducibility", "Cell therapy biomarkers", "CMC analytics"],
  },
  {
    period: "Oct 2019 — Sep 2023",
    role: "Doctoral Researcher — Computational Biology",
    company: "Max Delbrück Center for Molecular Medicine",
    location: "Berlin, Germany",
    summary:
      "PhD on open-source methods for spatial transcriptomics, now used by labs in academia and industry.",
    bullets: [
      "Designed and led Optocoder, a machine-learning pipeline for decoding barcoded transcripts from imaging-based spatial transcriptomics. Published in NAR Genomics & Bioinformatics and used by external labs.",
      "Rewrote novoSpaRc (optimal-transport reconstruction of tissue architecture from scRNA-seq) for scale, making it usable on whole-tissue datasets. Co-authored the Nature Protocols paper.",
      "Co-inventor on a US patent for 3D spatial gene-expression reconstruction.",
      "Handled the full cycle for both tools: problem framing, method development, benchmarking, release, documentation, and user support.",
    ],
    skills: ["Method development", "Spatial transcriptomics", "Optimal transport", "Open-source ownership", "Scientific writing", "Patents"],
  },
  {
    period: "Feb 2023 — Apr 2023",
    role: "Visiting Scientist",
    company: "The Hebrew University of Jerusalem",
    location: "Rehovot, Israel",
    bullets: [
      "Ran an independent short-term project applying protein language models (ProtBERT) to find candidate anti-insecticidal proteins from raw sequence data, combining transfer learning with biological priors to prioritise candidates for validation.",
    ],
    summary: "Short collaboration applying protein language models to agricultural biotech.",
    skills: ["Protein language models", "Transfer learning", "Cross-disciplinary collaboration"],
  },
  {
    period: "Apr 2019 — Sep 2019",
    role: "Machine Learning Research Engineer",
    company: "Coriolis Pharma GmbH",
    location: "Munich, Germany",
    summary:
      "Deep-learning system for pharmaceutical quality control.",
    bullets: [
      "Developed deep-learning models for automated particle detection and classification from flow-microscopy images used in biopharmaceutical QC.",
      "Packaged the whole thing — ingestion, training, evaluation, reporting — as a Python/PyTorch/TensorFlow tool that internal scientists could run themselves.",
    ],
    skills: ["Deep learning", "Computer vision", "PyTorch / TensorFlow", "Pharma QC", "Productization"],
  },
  {
    period: "May 2018 — Sep 2019",
    role: "Research Assistant — Computational Neuroscience",
    company: "Max Planck Institute for Brain Research",
    location: "Frankfurt am Main, Germany",
    summary: "Multi-omics integration for activity-dependent neuroscience.",
    bullets: [
      "Applied supervised ML to activity-dependent changes in the neuronal proteome.",
      "Built a multimodal integration and domain-adaptation pipeline linking proteomic and transcriptomic datasets — the cross-modality work I still rely on today.",
    ],
    skills: ["Multi-omics integration", "Domain adaptation", "Supervised ML"],
  },
  {
    period: "2014 — 2016",
    role: "Undergraduate Research Assistant — Medical Robotics",
    company: "Ozyegin University Robotics Lab",
    location: "Istanbul, Turkey",
    summary: "Real-time perception for an image-guided biopsy robot.",
    bullets: [
      "Developed real-time needle-tip localisation and tracking from ultrasound imaging for autonomous robotic control during biopsy.",
      "Wrote the C++/CUDA interface connecting real-time image analysis to robot control.",
    ],
    skills: ["Real-time computer vision", "C++ / CUDA", "Medical robotics"],
  },
];

function Work() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Work"
        title="A decade of leading computational biology."
        lead="From robotics labs to spatial transcriptomics to clinical-stage cell therapy — building teams, methods, and pipelines that turn data into decisions."
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

              {r.summary && (
                <p className="mt-4 text-foreground/80 italic">{r.summary}</p>
              )}

              <ul className="mt-5 space-y-2.5">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-foreground/90">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {r.skills && r.skills.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
