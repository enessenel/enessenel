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
      "Technical lead for single-cell multi-omics in oncology and immunology — shaping computational strategy from discovery through product development.",
    bullets: [
      "Lead end-to-end single-cell multi-omics programs (transcriptomics, proteomics, spatial) that directly inform target selection, mechanism-of-action narratives, and translational strategy for oncology and immunology assets.",
      "Set the analytical direction across multiple parallel projects — defining standards, reviewing methodology, and aligning computational deliverables with clinical and discovery stakeholders.",
      "Mentor junior scientists and manage external consultants; grow team capability through code review, design discussions, and structured onboarding.",
      "Partner with wet-lab, clinical, and CMC teams to translate computational insights into experimental designs and go/no-go decisions on assets in development.",
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
      "Architected and shipped automated high-throughput Nextflow/Python pipelines for scRNA-seq, CITE-seq, and multi-modal analyses — turning week-long manual workflows into reproducible runs and enabling consistent decision-making across programs.",
      "Led single-cell analyses underpinning biomarker discovery for a clinical-stage cell therapy and process characterization for CMC, contributing directly to regulatory-grade documentation.",
      "Established team conventions for reproducibility (containerization, version-controlled pipelines, QC standards) adopted as the default for new projects.",
      "Acted as the go-to technical reviewer for colleagues' analyses, raising the bar on rigor and reproducibility across the group.",
    ],
    skills: ["Pipeline architecture", "Nextflow", "Python", "scRNA-seq / CITE-seq", "Reproducibility", "Cell therapy biomarkers", "CMC analytics"],
  },
  {
    period: "Oct 2019 — Sep 2023",
    role: "Doctoral Researcher — Computational Biology",
    company: "Max Delbrück Center for Molecular Medicine",
    location: "Berlin, Germany",
    summary:
      "PhD developing and scaling open-source methods for spatial transcriptomics, adopted by labs and industry worldwide.",
    bullets: [
      "Designed and led Optocoder, a machine-learning pipeline for decoding barcoded transcripts from imaging-based spatial transcriptomics — published in NAR Genomics & Bioinformatics and adopted by external labs.",
      "Re-architected novoSpaRc (optimal-transport reconstruction of tissue architecture from scRNA-seq) for scalability, unlocking application to whole-tissue datasets; co-authored Nature Protocols paper.",
      "Co-inventor on a US patent for 3D spatial gene-expression reconstruction.",
      "Owned the full research lifecycle: problem framing, method development, benchmarking, open-source release, documentation, and supporting external users.",
    ],
    skills: ["Method development", "Spatial transcriptomics", "Optimal transport", "Open-source ownership", "Scientific writing", "Patents"],
  },
  {
    period: "Feb 2023 — Apr 2023",
    role: "Visiting Scientist",
    company: "The Hebrew University of Jerusalem",
    location: "Rehovot, Israel",
    bullets: [
      "Led an independent short-term project applying protein language models (ProtBERT) to discover novel anti-insecticidal proteins from raw sequence data — combining transfer learning with biological priors to guide downstream experimental validation.",
    ],
    summary: "Independent collaboration applying protein LLMs to agricultural biotech discovery.",
    skills: ["Protein language models", "Transfer learning", "Cross-disciplinary collaboration"],
  },
  {
    period: "Apr 2019 — Sep 2019",
    role: "Machine Learning Research Engineer",
    company: "Coriolis Pharma GmbH",
    location: "Munich, Germany",
    summary:
      "Delivered a production-ready deep-learning system for pharmaceutical QC.",
    bullets: [
      "Developed and shipped deep-learning models for automated particle detection and classification from flow-microscopy images used in biopharmaceutical QC.",
      "Built an end-to-end Python/PyTorch/TensorFlow package covering data ingestion, training, evaluation, and reporting — handed off to internal scientists as a self-serve tool.",
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
      "Applied supervised ML to investigate activity-dependent changes in the neuronal proteome.",
      "Designed a multimodal integration and domain-adaptation pipeline bridging proteomic and transcriptomic datasets — foundational experience in cross-modality reasoning later applied to industry.",
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
      "Developed real-time needle-tip localization and tracking from ultrasound imaging, enabling autonomous robotic control for image-guided biopsy.",
      "Built a C++/CUDA software interface coupling real-time image analysis with robot control — first exposure to shipping latency-critical scientific software.",
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
