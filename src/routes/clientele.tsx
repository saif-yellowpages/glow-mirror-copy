import { createFileRoute } from "@tanstack/react-router";
import { clientLogos } from "@/data/client-logos";

export const Route = createFileRoute("/clientele")({
  head: () => ({
    meta: [
      { title: "Clientele — Colours Advertising Agency" },
      { name: "description", content: "Brands, restaurants, banks, malls and government bodies across the UAE who trust Colours Advertising for printing, signage and branding." },
      { property: "og:title", content: "Clientele — Colours Advertising" },
      { property: "og:description", content: "Brands across the UAE who work with Colours Advertising." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Clientele — Colours Advertising" },
      { name: "twitter:description", content: "Brands across the UAE who work with Colours Advertising." },
    ],
  }),
  component: ClientelePage,
});

const caseStudies = [
  { brand: "Café Olea", project: "Full restaurant brand rollout", scope: "Identity · Signage · Menus · Uniforms", color: "bg-c-coral" },
  { brand: "Bin Hamoodah", project: "12-truck fleet wrap", scope: "Vehicle Branding · Install", color: "bg-c-cobalt text-c-cream" },
  { brand: "Yas Marina Tenant", project: "Exhibition booth, GITEX 2025", scope: "Stand design · Fabrication · Print", color: "bg-c-marigold" },
];

function ClientelePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-c-cobalt text-c-cream">
        <div className="absolute inset-y-0 right-0 w-2/5 bg-c-marigold" aria-hidden="true" />
        <div className="absolute -right-16 top-1/2 size-72 -translate-y-1/2 rounded-full border-[48px] border-c-coral" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
          <p className="mb-4 text-xs uppercase tracking-widest text-c-cream/70">Clientele</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-8xl">
            Trusted by <span className="italic text-c-marigold">leading brands</span> across the UAE.
          </h1>
          <p className="mt-8 max-w-xl text-c-cream/80">
            From neighbourhood cafés to government bodies — we treat every job, big or small, with the same care.
          </p>
        </div>
      </section>

      {/* LOGOS GRID */}
      <section className="bg-c-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Our clients</p>
          <h2 className="mb-12 max-w-3xl font-display text-3xl md:text-5xl">A selection of brands we've worked with.</h2>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clientLogos.map((client, index) => (
              <figure key={`${client.name}-${index}`} className="group grid aspect-square place-items-center bg-card p-5 transition-colors hover:bg-background md:p-7">
                <img
                  src={client.src}
                  alt={`${client.name} logo`}
                  className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading={index < 12 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption className="sr-only">{client.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Recent work</p>
        <h2 className="font-display text-3xl md:text-5xl mb-12">A few we're proud of.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <article key={cs.brand} className={`${cs.color} rounded-3xl p-7 aspect-[4/5] flex flex-col justify-between`}>
              <p className="text-xs uppercase tracking-widest opacity-70">{cs.scope}</p>
              <div>
                <p className="opacity-70 text-sm">{cs.brand}</p>
                <h3 className="font-display text-3xl mt-1">{cs.project}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
