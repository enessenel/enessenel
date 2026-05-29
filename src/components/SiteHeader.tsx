import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Download, ChevronDown } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
] as const;

const CV_SHORT = "/enes-senel-cv-short.pdf";
const CV_FULL = "/enes-senel-cv.pdf";

function CvMenu({ onSelect }: { onSelect?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
      >
        <Download className="h-3.5 w-3.5" /> CV
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-lg"
        >
          <a
            href={CV_SHORT}
            download
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setOpen(false);
              onSelect?.();
            }}
            className="block px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
          >
            <div className="font-medium">Short CV · 2 pages</div>
            <div className="text-xs text-muted-foreground">Focused highlights</div>
          </a>
          <a
            href={CV_FULL}
            download
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setOpen(false);
              onSelect?.();
            }}
            className="block border-t border-border px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
          >
            <div className="font-medium">Full CV</div>
            <div className="text-xs text-muted-foreground">Complete history</div>
          </a>
        </div>
      )}
    </div>
  );
}

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
          <CvMenu />
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
                href={CV_SHORT}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <Download className="h-4 w-4" /> Short CV (2 pages)
              </a>
              <a
                href={CV_FULL}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <Download className="h-4 w-4" /> Full CV
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
          <a href={CV_SHORT} download className="link-underline inline-flex items-center gap-1.5">
            <Download className="h-3.5 w-3.5" /> Short CV
          </a>
          <a href={CV_FULL} download className="link-underline inline-flex items-center gap-1.5">
            <Download className="h-3.5 w-3.5" /> Full CV
          </a>
          <a href="https://github.com/enessenel" target="_blank" rel="noreferrer" className="link-underline">GitHub</a>
          <a href="mailto:enes.senel@proton.me" className="link-underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
