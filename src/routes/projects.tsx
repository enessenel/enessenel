import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import optocoderImg from "@/assets/proj-optocoder.jpg";
import novosparcImg from "@/assets/proj-novosparc.png";
import protbertImg from "@/assets/proj-protbert.jpg";
import flowimgImg from "@/assets/proj-flowimg.jpg";
import ultrasoundImg from "@/assets/proj-ultrasound.jpg";
import cartitudeImg from "@/assets/proj-cartitude.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Enes Senel" },
      { name: "description", content: "In-depth project stories from Enes Senel: Optocoder, novoSpaRc, ProtBERT for anti-insecticidal proteins, flow-imaging deep learning, ultrasound needle tracking, and CARTITUDE-1 biomarker analysis." },
      { property: "og:title", content: "Projects — Enes Senel" },
      { property: "og:description", content: "Stories behind the open-source tools and research projects." },
    ],
  }),
  component: Projects,
});

type Link = { label: string; href: string };

type Project = {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  role: string;
  image: string;
  imageAlt: string;
  story: string[];
  details: { label: string; value: string }[];
  tags: string[];
  links?: Link[];
};

const projects: Project[] = [
  {
    slug: "optocoder",
    name: "Optocoder",
    tagline: "Reading barcodes off a microscope.",
    period: "2020 — 2022",
    role: "Lead author · PhD project",
    image: optocoderImg,
    imageAlt: "Abstract illustration of fluorescent bead arrays",
    story: [
      "Optical sequencing-based spatial transcriptomics platforms (like Slide-Seq) record where every transcript came from by repeatedly imaging a slide of millions of barcoded beads. Turning those imaging cycles back into accurate barcodes is surprisingly hard — fluorescence bleeds, phasing drifts, and beads light up unevenly across cycles.",
      "Optocoder is a Python pipeline that handles the whole decoding journey: aligning cycles, calling bases, modelling phasing/prephasing, and — when Illumina ground-truth is available — training a small ML module to push accuracy further. It was built around the realities of the Rajewsky Lab's wet-lab pipeline and is published in NAR Bioinformatics.",
    ],
    details: [
      { label: "Stack", value: "Python · NumPy · scikit-learn · YAML configs" },
      { label: "Output", value: "Decoded bead-to-barcode tables ready for downstream spatial analysis" },
      { label: "License", value: "GPL-3.0" },
    ],
    tags: ["Spatial transcriptomics", "Imaging", "Machine learning", "Open source"],
    links: [
      { label: "GitHub", href: "https://github.com/rajewsky-lab/optocoder" },
      { label: "Paper (NAR Bioinformatics)", href: "https://academic.oup.com/nargab/article/4/4/lqac042/6611715" },
    ],
  },
  {
    slug: "novosparc",
    name: "novoSpaRc",
    tagline: "Putting cells back where they came from.",
    period: "2020 — 2021",
    role: "Co-first author",
    image: novosparcImg,
    imageAlt: "novoSpaRc spatial reconstruction visualization",
    story: [
      "Single-cell RNA-seq tells you what every cell is doing, but dissociation throws away where each cell was sitting in the tissue. novoSpaRc reconstructs that spatial structure de novo, using optimal transport to find the arrangement of cells that best explains both their expression similarity and any partial spatial reference you can provide.",
      "I co-led the 2021 release published in Nature Protocols — focused on scalability, making the algorithm tractable on larger tissues and higher-resolution maps, and a tutorial-driven API biologists actually use. The library has grown a real community (133★, 42 forks at last check) and is taught in spatial-omics courses.",
    ],
    details: [
      { label: "Method", value: "Optimal transport over expression + reference manifolds" },
      { label: "Stack", value: "Python · Jupyter · POT · scanpy-compatible" },
      { label: "Companion paper", value: "Gene Expression Cartography, Nature (2019)" },
    ],
    tags: ["Spatial reconstruction", "Optimal transport", "Open source"],
    links: [
      { label: "GitHub", href: "https://github.com/rajewsky-lab/novosparc" },
      { label: "Nature Protocols paper", href: "https://www.nature.com/articles/s41596-021-00573-7" },
      { label: "Docs", href: "https://novosparc.readthedocs.io/" },
    ],
  },
  {
    slug: "protbert",
    name: "ProtBERT for anti-insecticidals",
    tagline: "Protein language models meet agricultural biology.",
    period: "Feb 2023 — Apr 2023",
    role: "Visiting scientist, Hebrew University of Jerusalem",
    image: protbertImg,
    imageAlt: "Abstract protein chain with attention pattern",
    story: [
      "During a research visit at the Hebrew University of Jerusalem, I built a machine-learning pipeline that uses pre-trained protein language models (ProtBERT) to identify novel anti-insecticidal proteins directly from raw sequence data.",
      "The interesting part wasn't the model — it was the integration. I combined transformer embeddings with biological domain knowledge so predictions could be interpreted by biologists and prioritised for experimental validation rather than treated as a black-box ranking.",
    ],
    details: [
      { label: "Models", value: "ProtBERT (HuggingFace) + custom classification heads" },
      { label: "Inputs", value: "Raw amino-acid sequences from environmental samples" },
      { label: "Goal", value: "Shortlist candidates for wet-lab validation" },
    ],
    tags: ["LLMs", "Proteomics", "AgBio", "Research visit"],
  },
  {
    slug: "flow-imaging",
    name: "Flow-imaging deep learning",
    tagline: "Counting what shouldn't be there.",
    period: "Apr 2019 — Sep 2019",
    role: "ML Research Student, Coriolis Pharma",
    image: flowimgImg,
    imageAlt: "Abstract particles in suspension",
    story: [
      "Cell-based medicinal products must be screened for unwanted particulate impurities. Flow imaging microscopy generates thousands of particle images per sample — far too many for manual review, and too varied for classical thresholding to do reliably.",
      "I built an end-to-end deep-learning system at Coriolis Pharma: data ingestion, training, evaluation, and a clean Python package wrapped around PyTorch/TensorFlow so scientists could retrain and audit it. The work was later published in Cytotherapy as part of a collaboration with Leiden University.",
    ],
    details: [
      { label: "Stack", value: "Python · PyTorch · TensorFlow · classical CV preprocessing" },
      { label: "Domain", value: "Cell therapy QC / particulate analysis" },
      { label: "Paper", value: "Grabarek, Senel et al., Cytotherapy (2021)" },
    ],
    tags: ["Computer vision", "Pharma QC", "Deep learning"],
  },
  {
    slug: "ultrasound",
    name: "Ultrasound needle tracking",
    tagline: "Robotic biopsy, in real time.",
    period: "2014 — 2016",
    role: "Undergraduate researcher, Ozyegin Robotics Lab",
    image: ultrasoundImg,
    imageAlt: "Abstract ultrasound texture with trajectory line",
    story: [
      "My first taste of research was building real-time needle-tip localization for an autonomous robotic biopsy system. The robot followed an ultrasound image stream; my algorithms tracked the needle inside that stream so the controller could keep it on target.",
      "I wrote the C++/CUDA software interface clinicians used during testing, did the Gabor-filter work for needle detection in 2D ultrasound, and contributed to four conference and journal papers (ICRA 2016, ICRA 2017, ICAR 2015, Mechatronics 2019, plus a 2020 TJEECS paper on curved-needle localization).",
    ],
    details: [
      { label: "Stack", value: "C++ · CUDA · OpenCV" },
      { label: "Application", value: "Image-guided biopsy robotics" },
      { label: "Publications", value: "ICRA × 2, ICAR, Mechatronics, TJEECS" },
    ],
    tags: ["Medical robotics", "Computer vision", "Real-time systems"],
  },
  {
    slug: "cartitude",
    name: "CARTITUDE-1 biomarker analysis",
    tagline: "Single-cell signals behind a CAR-T response.",
    period: "2024 — 2025",
    role: "Data Scientist → Senior Scientist, J&J Innovative Medicine",
    image: cartitudeImg,
    imageAlt: "Abstract single-cell clustering visualization",
    story: [
      "CARTITUDE-1 is the phase 1b/2 study of ciltacabtagene autoleucel (cilta-cel) in relapsed/refractory multiple myeloma. I contributed to the biomarker work — integrating single-cell transcriptomic, proteomic, and clinical readouts to understand which patients respond and why.",
      "The collaboration spans clinical, translational, and manufacturing teams; the manuscript is currently under revision at Blood Cancer Discovery.",
    ],
    details: [
      { label: "Modalities", value: "scRNA-seq · CITE-seq · clinical metadata" },
      { label: "Pipelines", value: "Python · Nextflow · scanpy/scvi-tools" },
      { label: "Status", value: "Manuscript under revision — Blood Cancer Discovery" },
    ],
    tags: ["Single-cell", "Multi-omics", "Cell therapy", "Clinical"],
  },
];

function Projects() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Projects"
        title="The stories behind the code."
        lead="A working portfolio of open-source bioinformatics tools, industry ML systems, and research collaborations — each with the context that gives the code meaning."
      />

      <section className="container-prose pb-24">
        <div className="space-y-16">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-24 gap-8 border-t border-border pt-12 md:grid-cols-12 md:gap-12"
            >
              <div
                className={`md:col-span-6 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--sienna)_55%,transparent)]">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {p.details.map((d) => (
                    <div
                      key={d.label}
                      className="rounded-xl border border-border bg-card/60 px-4 py-3"
                    >
                      <dt className="eyebrow">{d.label}</dt>
                      <dd className="mt-1 text-sm text-foreground">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="md:col-span-6">
                <p className="eyebrow">{p.period} · {p.role}</p>
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-foreground md:text-4xl">
                  {p.name}
                </h2>
                <p className="mt-2 font-display text-xl text-sienna">{p.tagline}</p>
                <div className="mt-6 space-y-4 text-foreground/90">
                  {p.story.map((para, idx) => (
                    <p key={idx} className="leading-relaxed">{para}</p>
                  ))}
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {p.links && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {l.label} <span aria-hidden>→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
