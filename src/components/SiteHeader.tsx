import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
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
        <a
          href="mailto:enes.senel@proton.me"
          className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-prose flex flex-col gap-2 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Enes Senel · Berlin, Germany</p>
        <div className="flex gap-5">
          <a href="https://enessenel.github.io" target="_blank" rel="noreferrer" className="link-underline">Website</a>
          <a href="https://github.com/enessenel" target="_blank" rel="noreferrer" className="link-underline">GitHub</a>
          <a href="mailto:enes.senel@proton.me" className="link-underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
