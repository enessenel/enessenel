import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enes Senel — Senior Scientist, Computational Biology" },
      { name: "description", content: "Personal site of Enes Senel — senior scientist at Johnson & Johnson Innovative Medicine working on single-cell multi-omics, spatial transcriptomics, and machine learning for therapeutics." },
      { property: "og:title", content: "Enes Senel — Senior Scientist" },
      { property: "og:description", content: "Single-cell multi-omics, spatial transcriptomics, and ML for therapeutics." },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    eyebrow: "Focus",
    title: "Single-cell multi-omics for therapeutics",
    body: "Technical lead at J&J Innovative Medicine — setting analytical strategy for oncology and immunology programs, mentoring scientists, and translating ML into clinical and CMC decisions.",
  },
  {
    eyebrow: "Craft",
    title: "Open-source methods, built to scale",
    body: "PhD on ML for spatial transcriptomics at the Max Delbrück Center. Creator of Optocoder, core contributor to novoSpaRc — tools adopted by labs and industry. Co-inventor on a US patent.",
  },
  {
    eyebrow: "Range",
    title: "A computer scientist who travels well",
    body: "Trained in CS in Istanbul and Munich. Earlier work in real-time computer vision for image-guided biopsy robots and deep learning for pharma QC — comfortable bridging domains and shipping in new ones.",
  },
];

const recent = [
  { tag: "Paper", title: "Ciltacabtagene autoleucel biomarkers — CARTITUDE-1", year: "2025" },
  { tag: "Tool", title: "Optocoder — decoding spatially indexed bead arrays", year: "2022" },
  { tag: "Paper", title: "novoSpaRc — spatial reconstruction with optimal transport", year: "2021" },
  { tag: "Patent", title: "3D reconstruction of tissue gene expression data", year: "2022" },
];

function Home() {
  return (
    <PageShell>
      <section className="container-prose pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Berlin, Germany</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] text-foreground md:text-7xl">
              Enes Senel.
              <span className="block text-sienna">Computational biology,</span>
              <span className="block text-muted-foreground">led by machine learning.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
              Senior Scientist at Johnson &amp; Johnson Innovative Medicine,
              leading single-cell multi-omics for oncology and immunology.
              A decade of ML across spatial transcriptomics, pharma QC, and
              medical robotics — turning hard biological questions into
              decisions teams can act on.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read the research
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                About me →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--sienna)_60%,transparent)]">
              <img
                src={heroImg}
                alt="Abstract DNA illustration in autumn tones"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/95 to-transparent px-5 pt-16 pb-5">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-sienna">Currently</p>
                  <p className="mt-1 text-sm text-foreground">Berlin, Germany</p>
                </div>
                <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground">
                  J&amp;J Innovative Medicine
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-prose pb-20">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium md:text-3xl">In focus</h2>
          <span className="eyebrow">Three threads</span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_20px_50px_-30px_color-mix(in_oklab,var(--sienna)_55%,transparent)]"
            >
              <p className="eyebrow">{h.eyebrow}</p>
              <h3 className="mt-3 font-display text-xl font-medium leading-snug text-foreground">
                {h.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-2xl font-medium md:text-3xl">Recently</h2>
          <Link to="/research" className="eyebrow link-underline">All publications →</Link>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {recent.map((item) => (
            <li key={item.title} className="grid grid-cols-[80px_1fr_auto] items-baseline gap-6 py-5 md:grid-cols-[120px_1fr_auto]">
              <span className="eyebrow">{item.tag}</span>
              <span className="font-display text-lg text-foreground">{item.title}</span>
              <span className="text-sm text-muted-foreground">{item.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
