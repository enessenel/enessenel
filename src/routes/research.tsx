import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Publications — Enes Senel" },
      { name: "description", content: "Selected publications, patents and research interests of Enes Senel in computational biology, spatial transcriptomics, single-cell analysis, and machine learning." },
      { property: "og:title", content: "Research & Publications — Enes Senel" },
      { property: "og:description", content: "Publications, patents, and research interests." },
    ],
  }),
  component: Research,
});

const interests = [
  "Spatial transcriptomics & tissue architecture",
  "Single-cell and multi-omics integration",
  "Machine learning for cell–cell interactions",
  "Reproducible bioinformatics pipelines",
];

type Pub = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  status?: string;
  href?: string;
};

const papers: Pub[] = [
  {
    year: "2025",
    title:
      "Ciltacabtagene autoleucel biomarkers of response in relapsed/refractory multiple myeloma patients from CARTITUDE-1: a phase 1b/2 study",
    authors:
      "R.M. de Oca, F. Wang, M. Hao, D. Smirnov, H. Zhao, M. Gormley, E. Zudaire, S.S. Chang, B. Foulk, J. Patel, E. Senel, D. Wu, C. Davis, R. Boominathan, A. Javidi, J. Zhu, O. Lau, K. Clara-Nielsen, Y. Rajpurohit, D. Madduri, S. Jagannath, Y. Lin, A. Cohen, V. Plaks",
    venue: "Blood Cancer Discovery",
    status: "Under revision",
  },
  {
    year: "2022",
    title: "Optocoder: computational decoding of spatially indexed bead arrays",
    authors: "E. Senel, N. Rajewsky, N. Karaiskos",
    venue: "NAR Bioinformatics",
    href: "https://github.com/rajewsky-lab/optocoder",
  },
  {
    year: "2021",
    title:
      "novoSpaRc: flexible spatial reconstruction of single-cell gene expression with optimal transport",
    authors:
      "N. Moriel*, E. Senel*, N. Friedman, N. Rajewsky, N. Karaiskos, M. Nitzan",
    venue: "Nature Protocols",
    href: "https://github.com/rajewsky-lab/novosparc",
  },
  {
    year: "2021",
    title:
      "Particulate impurities in cell-based medicinal products traced by flow imaging microscopy combined with deep learning for image analysis",
    authors:
      "A.D. Grabarek, E. Senel, T. Menzen, K.H. Hoogendoorn, K. Pike-Overet, A. Hawe, W. Jiskoot",
    venue: "Cytotherapy",
  },
  {
    year: "2020",
    title:
      "Gabor filter-based localization of straight and curved needles in 2D ultrasound images",
    authors: "M. Kaya, E. Senel, O. Bebek",
    venue: "Turkish Journal of Electrical Engineering & Computer Sciences",
  },
  {
    year: "2019",
    title: "Visual needle tip tracking in 2D US guided robotic interventions",
    authors: "M. Kaya, E. Senel, A. Ahmad, O. Bebek",
    venue: "Mechatronics",
  },
  {
    year: "2017",
    title:
      "Visual tracking of multiple moving targets in 2D ultrasound guided robotic percutaneous interventions",
    authors: "M. Kaya, E. Senel, A. Ahmad, O. Bebek",
    venue: "ICRA, Singapore",
  },
  {
    year: "2016",
    title: "Visual tracking of biopsy needles in 2D ultrasound images",
    authors: "M. Kaya, E. Senel, A. Ahmad, O. Bebek",
    venue: "ICRA, Stockholm",
  },
  {
    year: "2015",
    title:
      "Real-time needle tip localization in 2D ultrasound images for robotic biopsies",
    authors: "A. Ahmad, O. Orhan, E. Senel, O. Bebek",
    venue: "ICAR, Istanbul",
  },
];

const patents = [
  {
    year: "2022",
    title: "Method and system for 3D reconstruction of tissue gene expression data",
    authors:
      "S. Abbiati, J. Alles, S. Ayoub, S. Ehrig, N. Karaiskos, G. Macino, S. Preibisch, N. Rajewsky, E. Senel, A. Woehler",
    id: "US20240257914A1",
  },
];

function Research() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Research"
        title="Questions that keep me up."
        lead="My research sits at the intersection of probabilistic modelling and modern functional genomics — with a soft spot for methods that make biology more legible."
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

      <section className="container-prose pb-16">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-3xl font-medium">Selected publications</h2>
          <span className="eyebrow">Peer-reviewed</span>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {papers.map((p) => (
            <li key={p.title} className="grid gap-2 py-6 md:grid-cols-[80px_1fr] md:gap-8">
              <span className="eyebrow self-start md:pt-1">{p.year}</span>
              <div>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-lg font-medium text-foreground link-underline md:text-xl"
                  >
                    {p.title}
                  </a>
                ) : (
                  <span className="font-display text-lg font-medium text-foreground md:text-xl">
                    {p.title}
                  </span>
                )}
                <p className="mt-1 text-sienna">
                  {p.venue}
                  {p.status && <span className="text-muted-foreground"> · {p.status}</span>}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-prose pb-24">
        <div className="flex items-baseline justify-between border-t border-border pt-10">
          <h2 className="font-display text-3xl font-medium">Patents</h2>
          <span className="eyebrow">Intellectual property</span>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {patents.map((p) => (
            <li key={p.id} className="grid gap-2 py-6 md:grid-cols-[80px_1fr] md:gap-8">
              <span className="eyebrow self-start md:pt-1">{p.year}</span>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sienna">{p.id}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.authors}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
