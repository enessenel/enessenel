import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Enes Senel" },
      { name: "description", content: "Selected publications and research interests of Enes Senel in computational biology and machine learning." },
      { property: "og:title", content: "Research — Enes Senel" },
      { property: "og:description", content: "Publications and research interests." },
    ],
  }),
  component: Research,
});

const interests = [
  "Foundation models for cellular biology",
  "Causal inference from perturbation screens",
  "Spatial transcriptomics & tissue architecture",
  "Reproducible bioinformatics workflows",
];

const papers = [
  {
    year: "2025",
    title: "Latent representations of large-scale perturbation atlases",
    venue: "Nature Methods (in review)",
    authors: "Senel E., Hartmann A., et al.",
    href: "#",
  },
  {
    year: "2024",
    title: "Spatial deconvolution at scale: a probabilistic framework",
    venue: "Cell Systems",
    authors: "Senel E., Patel R., Vogel L.",
    href: "#",
  },
  {
    year: "2023",
    title: "Graph neural networks for context-specific regulatory inference",
    venue: "Bioinformatics",
    authors: "Senel E., Hartmann A.",
    href: "#",
  },
  {
    year: "2022",
    title: "Benchmarking trajectory inference in single-cell genomics",
    venue: "Nature Methods",
    authors: "Vogel L., Senel E., et al.",
    href: "#",
  },
];

function Research() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Research"
        title="Questions that keep me up."
        lead="My research sits at the intersection of probabilistic modeling and modern functional genomics, with a soft spot for methods that make biology more legible."
      />

      <section className="container-prose pb-12">
        <div className="grid gap-3 md:grid-cols-2">
          {interests.map((i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
            >
              <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-foreground">{i}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-3xl font-medium">Selected publications</h2>
          <span className="eyebrow">Peer-reviewed</span>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {papers.map((p) => (
            <li key={p.title} className="grid gap-2 py-6 md:grid-cols-[80px_1fr] md:gap-8">
              <span className="eyebrow self-start md:pt-1">{p.year}</span>
              <div>
                <a href={p.href} className="font-display text-xl font-medium text-foreground link-underline">
                  {p.title}
                </a>
                <p className="mt-1 text-sienna">{p.venue}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
