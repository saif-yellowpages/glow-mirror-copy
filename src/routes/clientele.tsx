import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clientele")({
  head: () => ({
    meta: [
      { title: "Clientele — Colours Advertising Agency" },
      { name: "description", content: "Brands, restaurants, banks, malls and government bodies across the UAE who trust Colours Advertising for printing, signage and branding." },
      { property: "og:title", content: "Clientele — Colours Advertising" },
      { property: "og:description", content: "Brands across the UAE who work with Colours Advertising." },
    ],
  }),
  component: ClientelePage,
});

const sectors = [
  { name: "Hospitality", color: "bg-c-coral", count: "120+" },
  { name: "Real Estate", color: "bg-c-marigold", count: "80+" },
  { name: "Government", color: "bg-c-cobalt text-c-cream", count: "35+" },
  { name: "Retail", color: "bg-c-mint", count: "200+" },
  { name: "Healthcare", color: "bg-c-plum text-c-cream", count: "60+" },
  { name: "Education", color: "bg-c-cream border border-border", count: "45+" },
];

const clients = [
  "Al Noor Group", "Etihad Mall", "Bait Al Khair", "Emirates Steel",
  "Al Foah Dates", "Abu Dhabi Ports", "Yas Marina", "ADNOC Distribution",
  "Royal Catering", "Liwa Hotel", "Al Ain Mall", "Cleveland Clinic",
  "Bin Hamoodah", "Khalifa University", "Daman", "Reem Hospital",
  "Café Olea", "Mubadala", "Aldar", "Etihad Rail",
];

const caseStudies = [
  { brand: "Café Olea", project: "Full restaurant brand rollout", scope: "Identity · Signage · Menus · Uniforms", color: "bg-c-coral" },
  { brand: "Bin Hamoodah", project: "12-truck fleet wrap", scope: "Vehicle Branding · Install", color: "bg-c-cobalt text-c-cream" },
  { brand: "Yas Marina Tenant", project: "Exhibition booth, GITEX 2025", scope: "Stand design · Fabrication · Print", color: "bg-c-marigold" },
];

function ClientelePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-28">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Clientele</p>
        <h1 className="font-display text-5xl md:text-8xl max-w-3xl leading-[0.95]">
          Trusted by <span className="italic text-c-marigold">850+ brands</span> across the UAE.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          From neighbourhood cafés to government bodies — we treat every job, big or small, with the same care.
        </p>
      </section>

      {/* SECTORS */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {sectors.map((s) => (
            <div key={s.name} className={`${s.color} rounded-3xl aspect-square p-6 flex flex-col justify-between`}>
              <p className="font-display text-5xl md:text-6xl">{s.count}</p>
              <p className="font-display text-2xl">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS GRID */}
      <section className="bg-c-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl mb-12">A selection of brands we've worked with.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {clients.map((c) => (
              <div key={c} className="bg-background aspect-[3/2] grid place-items-center p-4 text-center text-sm font-medium text-muted-foreground hover:bg-card hover:text-foreground transition">
                {c}
              </div>
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
