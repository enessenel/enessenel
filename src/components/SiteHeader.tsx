import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Download } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
] as const;

const CV_HREF = "/enes-senel-cv.pdf";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Enes Senel<span className="text-accent">.</span>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CV_HREF}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
          >
            <Download className="h-3.5 w-3.5" /> CV
          </a>
          <a
            href="mailto:enes.senel@proton.me"
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container-prose flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
              <a
                href={CV_HREF}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="mailto:enes.senel@proton.me"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-prose flex flex-col gap-3 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Enes Senel · Berlin, Germany</p>
        <div className="flex flex-wrap gap-5">
          <a href={CV_HREF} download className="link-underline inline-flex items-center gap-1.5">
            <Download className="h-3.5 w-3.5" /> Download CV (PDF)
          </a>
          <a href="https://github.com/enessenel" target="_blank" rel="noreferrer" className="link-underline">GitHub</a>
          <a href="mailto:enes.senel@proton.me" className="link-underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
