import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Colours Advertising Agency" },
      { name: "description", content: "Six service categories: printing, signage, branding, vehicle branding, exhibitions and promotional gifts. All in-house in Musaffah, Abu Dhabi." },
      { property: "og:title", content: "Services — Colours Advertising" },
      { property: "og:description", content: "Printing, signage, branding, vehicle wraps, exhibitions and promotional items." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:py-28">
      <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Services</p>
      <h1 className="font-display text-5xl md:text-8xl max-w-3xl leading-[0.95]">
        Six categories. <span className="italic text-c-cobalt">One team</span>.
      </h1>
      <p className="mt-8 max-w-xl text-muted-foreground">
        Click into any category to see the full list of what we make and install. If you can't find what you're after, just ask — we probably do it.
      </p>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {categories.map((c, i) => (
          <div
            key={c.slug}
            className={`group ${c.color} rounded-3xl p-8 md:p-10 transition hover:-translate-y-1 ${i % 2 ? "md:translate-y-10" : ""}`}
          >
            <div className="flex items-start justify-between">
              <p className="text-xs uppercase tracking-widest opacity-60">0{i + 1}</p>
              <Link to="/services/$slug" params={{ slug: c.slug }} aria-label={`Open ${c.name}`}>
                <ArrowRight size={20} className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
            </div>
            <Link to="/services/$slug" params={{ slug: c.slug }} className="block">
              <h2 className="font-display text-3xl md:text-5xl mt-4 hover:underline">{c.name}</h2>
              <p className="mt-2 italic opacity-80">{c.tagline}</p>
              <p className="mt-4 text-sm opacity-75 max-w-md">{c.desc}</p>
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.subcategories.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug/$sub"
                  params={{ slug: c.slug, sub: s.slug }}
                  className="text-xs px-3 py-1 rounded-full bg-current/10 backdrop-blur-sm hover:bg-current/20 transition"
                >
                  {s.name}
                </Link>
              ))}
              {c.subcategories.length > 4 && (
                <Link
                  to="/services/$slug"
                  params={{ slug: c.slug }}
                  className="text-xs px-3 py-1 rounded-full bg-current/10 hover:bg-current/20 transition"
                >
                  +{c.subcategories.length - 4} more
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
