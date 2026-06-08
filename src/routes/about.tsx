import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Colours Advertising Agency" },
      { name: "description", content: "Colours Advertising Agency is a full-service printing, signage and branding agency in Musaffah, Abu Dhabi serving the UAE since 2013." },
      { property: "og:title", content: "About Us — Colours Advertising" },
      { property: "og:description", content: "Full-service advertising agency in Musaffah, Abu Dhabi." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  ["01", "One studio, end to end.", "Design, print, fabricate and install — no handoffs, no finger pointing."],
  ["02", "Show, don't promise.", "Free samples and proofs before production on every order."],
  ["03", "Treat deadlines like print runs.", "If we say Tuesday, we mean Tuesday."],
  ["04", "Materials matter.", "We test substrates, inks and adhesives so your work lasts in UAE conditions."],
];

const milestones = [
  { y: "2013", t: "Colours opens in Musaffah", c: "bg-c-coral" },
  { y: "2016", t: "Large-format printing added", c: "bg-c-marigold" },
  { y: "2019", t: "In-house design studio", c: "bg-c-cobalt text-c-cream" },
  { y: "2022", t: "Vehicle wrap bay opens", c: "bg-c-mint" },
  { y: "2025", t: "850+ UAE brands served", c: "bg-c-plum text-c-cream" },
];

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-28">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">About us</p>
        <h1 className="font-display text-5xl md:text-8xl max-w-4xl leading-[0.95]">
          A full-service advertising agency in <span className="italic text-c-coral">Abu Dhabi</span>.
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed">
            Colours started in 2013 in a small unit in Musaffah with one offset press and a stubborn belief that an advertising agency should actually make the things it sells. Twelve years on, we still do.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Today our team of designers, printers, fabricators and installers handle everything from a single business card to fleet-wide vehicle branding — for hundreds of brands across the UAE. Same building, same team, same standards.
          </p>
        </div>
      </section>

      <section className="bg-c-ink text-c-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <h2 className="font-display text-4xl md:text-6xl mb-14">How we work.</h2>
          <div className="grid gap-px bg-c-cream/10 md:grid-cols-2">
            {principles.map(([n, t, d]) => (
              <div key={n} className="bg-c-ink p-8 md:p-10">
                <p className="font-display text-c-marigold text-2xl">{n}</p>
                <h3 className="font-display text-2xl md:text-3xl mt-2">{t}</h3>
                <p className="mt-3 text-c-cream/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <h2 className="font-display text-4xl md:text-6xl mb-14">A short history.</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {milestones.map((m) => (
            <div key={m.y} className={`${m.c} rounded-3xl p-6 aspect-square flex flex-col justify-between`}>
              <p className="font-display text-3xl">{m.y}</p>
              <p className="text-sm">{m.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl bg-c-marigold p-10 md:p-14 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Want to see the workshop?</h2>
            <p className="mt-2 text-c-ink/70">Drop in to our Musaffah unit — coffee's on us.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-c-ink px-6 py-3 text-sm text-c-cream self-start">
            Book a visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
