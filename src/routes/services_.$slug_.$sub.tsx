import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { categories, type Category, type Subcategory } from "@/data/services";

export const Route = createFileRoute("/services_/$slug_/$sub")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    const subcategory = category.subcategories.find((s) => s.slug === params.sub);
    if (!subcategory) throw notFound();
    return { category, subcategory };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.subcategory.name} — ${loaderData.category.name} | Colours Advertising` },
          { name: "description", content: loaderData.subcategory.desc },
          { property: "og:title", content: `${loaderData.subcategory.name} — Colours Advertising` },
          { property: "og:description", content: loaderData.subcategory.desc },
        ]
      : [{ title: "Service not found" }],
  }),
  component: SubcategoryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-display text-5xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block underline">Back to services</Link>
    </div>
  ),
});

const benefits = [
  "Free design proofs before production",
  "Same-day quotes, transparent pricing",
  "In-house production — no middlemen",
  "Delivery and install across the UAE",
];

function SubcategoryPage() {
  const { category, subcategory } = Route.useLoaderData() as {
    category: Category;
    subcategory: Subcategory;
  };
  const siblings = category.subcategories.filter((s) => s.slug !== subcategory.slug);

  return (
    <div>
      <section className={category.color}>
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-28">
          <div className="flex flex-wrap items-center gap-2 text-sm opacity-80">
            <Link to="/services" className="hover:underline inline-flex items-center gap-1">
              <ArrowLeft size={14} /> Services
            </Link>
            <span>/</span>
            <Link to="/services/$slug" params={{ slug: category.slug }} className="hover:underline">
              {category.name}
            </Link>
          </div>
          <h1 className="font-display text-5xl md:text-8xl mt-6 max-w-3xl leading-[0.95]">
            {subcategory.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg opacity-85">{subcategory.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-c-ink text-c-cream px-6 py-3 text-sm">
              Request a quote
            </Link>
            <Link to="/services/$slug" params={{ slug: category.slug }} className="rounded-full border border-current px-6 py-3 text-sm">
              All {category.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Overview</p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              {subcategory.name.toLowerCase()}, done right.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {subcategory.desc} Our team handles design, production, and delivery in-house at our Musaffah facility — so quality, timelines and pricing stay in our control. Whether it's a one-off prototype or a recurring corporate order, we'll match the spec sheet and the brand exactly.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Share your artwork, sizes and quantities — we'll send back a quote, a digital proof and a production timeline within hours.
            </p>
          </div>

          <aside className="md:col-span-4">
            <div className="sticky top-24 rounded-3xl bg-c-ink text-c-cream p-7">
              <h3 className="font-display text-2xl">Why Colours</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Check size={18} className="text-c-marigold shrink-0 mt-0.5" />
                    <span className="text-c-cream/80">{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 block text-center rounded-full bg-c-marigold text-c-ink px-5 py-3 text-sm">
                Request a quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-20">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">More from {category.name}</p>
          <h2 className="font-display text-3xl md:text-5xl mb-8">Related services.</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {siblings.slice(0, 6).map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug/$sub"
                params={{ slug: category.slug, sub: s.slug }}
                className="rounded-2xl border border-border p-6 bg-card hover:border-c-ink transition"
              >
                <p className="font-display text-c-coral text-sm">0{i + 1}</p>
                <h3 className="font-display text-2xl mt-1">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm">
                  View <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
