import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Download, Star, ArrowRight, Quote } from "lucide-react";
import { categories } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colours Advertising Agency — Printing, Signage & Branding in Abu Dhabi" },
      { name: "description", content: "Full-service printing, signage, branding, vehicle wraps, exhibition stands and promotional gifts from Musaffah, Abu Dhabi." },
      { property: "og:title", content: "Colours Advertising Agency — Abu Dhabi" },
      { property: "og:description", content: "Printing, signage, branding and promotional services across the UAE." },
    ],
  }),
  component: HomePage,
});

const videos = [
  { title: "Vehicle wrap, end to end", duration: "1:24", color: "bg-c-coral" },
  { title: "Exhibition stand build", duration: "2:08", color: "bg-c-cobalt text-c-cream" },
  { title: "Inside our print shop", duration: "1:46", color: "bg-c-marigold" },
  { title: "LED signage install", duration: "0:58", color: "bg-c-teal text-c-cream" },
];


const reviews = [
  {
    quote: "Colours turned around 200 branded gift boxes for our launch in 4 days. Quality was spotless and the team kept us in the loop the whole time.",
    name: "Hanan A.", role: "Marketing Lead, Etihad Mall Tenant",
  },
  {
    quote: "We've used Colours for vehicle wraps on our entire fleet. Three years in, the wraps still look factory-fresh.",
    name: "Rashid M.", role: "Operations Director, Logistics Co.",
  },
  {
    quote: "From logo to signage to printed menus — they handled the whole opening of our restaurant. Easy to work with and very fairly priced.",
    name: "Layla S.", role: "Owner, Café Olea",
  },
];

const stats = [
  { n: "12+", l: "Years in Abu Dhabi" },
  { n: "850+", l: "Brands served" },
  { n: "6", l: "Service categories" },
  { n: "24/7", l: "Production lines" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden mesh-bg">
        {/* Floating color blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 size-[36rem] rounded-full bg-c-coral/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -top-20 right-0 size-[28rem] rounded-full bg-c-marigold/35 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 size-[30rem] rounded-full bg-c-cobalt/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 right-10 size-[26rem] rounded-full bg-c-mint/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 md:pt-28 md:pb-32">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-c-ink/15 bg-c-paper/70 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-c-ink/70">
            <span className="size-2 rounded-full bg-grad-aurora" /> Advertising Agency · Musaffah, Abu Dhabi
          </p>
          <h1 className="font-display text-[12vw] leading-[0.95] md:text-[8.5rem]">
            Printing, signage<br />
            &amp; branding with<br />
            <span className="italic text-c-coral">colour</span>,
            <span className="italic text-c-cobalt"> craft</span> &amp;
            <span className="italic text-c-marigold"> care</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-c-ink/70">
            One studio for everything your brand puts in front of people — from a single business card to a fleet of branded trucks. Based in Musaffah, delivering across the UAE.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-c-ink px-6 py-3 text-sm text-c-cream transition hover:shadow-glow-coral hover:-translate-y-0.5">
              Explore services <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <a href="#brochure" className="inline-flex items-center gap-2 rounded-full border border-c-ink/20 bg-c-paper/70 backdrop-blur px-6 py-3 text-sm hover:border-c-ink transition">
              <Download size={16} /> Download brochure
            </a>
          </div>

          {/* Color chip strip */}
          <div className="mt-14 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-c-ink/60">
            <span className="opacity-70">Pantone-true output ·</span>
            {[
              { c: "bg-c-coral", n: "Coral" },
              { c: "bg-c-marigold", n: "Marigold" },
              { c: "bg-c-cobalt", n: "Cobalt" },
              { c: "bg-c-mint", n: "Mint" },
              { c: "bg-c-magenta", n: "Magenta" },
              { c: "bg-c-plum", n: "Plum" },
              { c: "bg-c-teal", n: "Teal" },
              { c: "bg-c-gold", n: "Gold" },
            ].map((s) => (
              <span key={s.n} className="inline-flex items-center gap-2 rounded-full bg-c-paper/80 backdrop-blur border border-c-ink/10 px-3 py-1">
                <span className={`size-2.5 rounded-full ${s.c}`} /> {s.n}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-c-ink/15 bg-c-ink text-c-cream py-5 overflow-hidden">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-2xl md:text-3xl">
            {[...Array(2)].flatMap((_, j) =>
              [
                { label: "Offset Printing", dot: "bg-c-coral" },
                { label: "LED Signage", dot: "bg-c-mint" },
                { label: "Vehicle Wraps", dot: "bg-c-marigold" },
                { label: "Brand Identity", dot: "bg-c-magenta" },
                { label: "Exhibition Stands", dot: "bg-c-cobalt" },
                { label: "Corporate Gifts", dot: "bg-c-teal" },
                { label: "Large Format", dot: "bg-c-gold" },
                { label: "3D Letters", dot: "bg-c-plum" },
              ].map((c, i) => (
                <span key={`${j}-${i}`} className="flex items-center gap-10">
                  {c.label} <span className={`size-2.5 rounded-full ${c.dot}`} />
                </span>
              ))
            )}
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">What we do</p>
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl">Six things, done properly.</h2>
          </div>
          <Link to="/services" className="text-sm underline-offset-4 hover:underline self-start md:self-auto">
            All services →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/services/$slug" params={{ slug: c.slug }}
              className={`group relative overflow-hidden rounded-3xl ${c.color} p-7 transition hover:-translate-y-1`}
            >
              <p className="text-xs uppercase tracking-widest opacity-60">0{i + 1}</p>
              <h3 className="font-display text-3xl mt-2">{c.name}</h3>
              <p className="mt-3 text-sm opacity-80 line-clamp-3">{c.desc}</p>
              <ArrowRight size={20} className="mt-8 opacity-70 group-hover:translate-x-1 transition" />
            </Link>
          ))}
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="bg-c-ink text-c-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-c-cream/50">Behind the scenes</p>
              <h2 className="font-display text-4xl md:text-6xl">Watch how we make it.</h2>
            </div>
            <p className="max-w-sm text-c-cream/70 text-sm">Short videos from our production floor, install crew and design studio.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((v, i) => (
              <button key={i} className={`group relative aspect-[3/4] overflow-hidden rounded-3xl ${v.color} text-left p-5 flex flex-col justify-between hover:-translate-y-1 transition`}>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest opacity-70">Reel · {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs opacity-70">{v.duration}</span>
                </div>
                <div className="size-14 rounded-full bg-c-ink/90 text-c-cream grid place-items-center group-hover:scale-110 transition">
                  <Play size={20} fill="currentColor" />
                </div>
                <p className="font-display text-2xl">{v.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BROCHURE */}
      <section id="brochure" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Brochure</p>
            <h2 className="font-display text-4xl md:text-6xl">Take the full menu home.</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Our 24-page brochure covers every service, sample finishes, lead times and indicative pricing. Updated quarterly.
            </p>
            <a href="/brochure.pdf" download className="mt-8 inline-flex items-center gap-2 rounded-full bg-c-ink px-6 py-3 text-sm text-c-cream hover:bg-accent transition">
              <Download size={16} /> Download brochure (PDF, 8MB)
            </a>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] rounded-3xl bg-grad-citrus p-8 flex flex-col justify-between rotate-2 hover:rotate-0 transition shadow-card">
              <p className="font-display text-5xl leading-none text-c-ink">Colours<span className="text-c-magenta">.</span></p>
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-c-coral" />
                <span className="size-3 rounded-full bg-c-cobalt" />
                <span className="size-3 rounded-full bg-c-mint" />
                <span className="size-3 rounded-full bg-c-magenta" />
                <span className="size-3 rounded-full bg-c-plum" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-c-ink/60">Services brochure</p>
                <p className="font-display text-2xl text-c-ink">Edition 04 · 2026</p>
              </div>
              <div className="absolute -bottom-4 -right-4 size-24 rounded-full bg-c-ink grid place-items-center text-c-cream font-display text-2xl rotate-12 shadow-glow-coral">
                PDF
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-c-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl md:text-6xl text-c-ink">{s.n}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Reviews</p>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl">Kind words from folks we've worked with.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <article key={i} className="rounded-3xl border border-border p-7 bg-card">
              <div className="flex gap-1 text-c-marigold mb-4">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <Quote size={28} className="text-accent mb-3" />
              <p className="text-base leading-relaxed">{r.quote}</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-medium">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl bg-c-coral p-10 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl">Got a project in mind?</h2>
          <p className="mt-4 max-w-xl mx-auto text-c-ink/80">Tell us what you need — we'll get back within one working day with a clear quote.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-c-ink px-6 py-3 text-sm text-c-cream hover:bg-c-cream hover:text-c-ink transition">
            Start your enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
