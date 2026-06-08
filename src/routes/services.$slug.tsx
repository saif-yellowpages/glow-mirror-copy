import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { categories, type Category } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} — Colours Advertising` },
          { name: "description", content: loaderData.category.desc },
          { property: "og:title", content: `${loaderData.category.name} — Colours Advertising` },
          { property: "og:description", content: loaderData.category.desc },
        ]
      : [{ title: "Service not found" }],
  }),
  component: CategoryPage,
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

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: Category };

  return (
    <div>
      <section className={`${category.color}`}>
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-28">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100">
            <ArrowLeft size={16} /> All services
          </Link>
          <h1 className="font-display text-5xl md:text-8xl mt-6 max-w-3xl leading-[0.95]">{category.name}</h1>
          <p className="mt-4 italic text-xl md:text-2xl opacity-80">{category.tagline}</p>
          <p className="mt-6 max-w-2xl">{category.desc}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Sub-categories</p>
            <h2 className="font-display text-3xl md:text-5xl mb-10">Everything we make in {category.name.toLowerCase()}.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.subcategories.map((s, i) => (
                <article key={s.slug} className="rounded-2xl border border-border p-6 bg-card hover:border-c-ink transition">
                  <p className="font-display text-c-coral text-sm">0{i + 1}</p>
                  <h3 className="font-display text-2xl mt-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm hover:text-accent">
                    Get a quote <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
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

      {/* Other categories */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Explore more</p>
        <h2 className="font-display text-3xl md:text-5xl mb-8">Other services.</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.filter((c) => c.slug !== category.slug).slice(0, 3).map((c) => (
            <Link key={c.slug} to="/services/$slug" params={{ slug: c.slug }}
                  className={`${c.color} rounded-2xl p-6 hover:-translate-y-1 transition`}>
              <h3 className="font-display text-2xl">{c.name}</h3>
              <p className="text-sm opacity-80 mt-1">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
