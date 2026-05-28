import type { ReactNode } from "react";
import { SiteHeader, SiteFooter } from "./SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="container-prose pt-16 pb-10 md:pt-24 md:pb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          {lead}
        </p>
      )}
    </section>
  );
}
