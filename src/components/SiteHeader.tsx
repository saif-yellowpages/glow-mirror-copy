import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { categories, contactInfo, socialLinks } from "@/data/services";
import logoAsset from "@/assets/colours-logo.png.asset.json";
const logo = logoAsset.url;

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/clientele", label: "Clientele" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Colours Advertising Agency — Home">
          <img src={logo} alt="Colours Advertising Agency" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-foreground/80 transition hover:text-accent"
              activeProps={{ className: "text-accent font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-full bg-c-ink px-5 py-2.5 text-sm text-c-cream transition hover:bg-accent"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 text-base">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-border/50 last:border-0"
                activeProps={{ className: "text-accent font-medium" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-c-ink px-5 py-3 text-center text-sm text-c-cream"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-c-ink text-c-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl md:text-5xl leading-none">
            Let's add some<br />
            <span className="italic text-c-marigold">colour</span> to your brand.
          </p>
          <p className="mt-4 max-w-md text-sm text-c-cream/70">
            Printing, signage, branding & promotional services from Musaffah, Abu Dhabi — delivered across the UAE.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-c-marigold px-6 py-3 text-sm text-c-ink"
          >
            Start a project →
          </Link>
        </div>

        <div className="md:col-span-3 text-sm">
          <p className="mb-4 text-c-cream/50 uppercase tracking-widest text-xs">Services</p>
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/services/$slug" params={{ slug: c.slug }} className="hover:text-c-marigold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 text-sm">
          <p className="mb-4 text-c-cream/50 uppercase tracking-widest text-xs">Visit</p>
          <p className="text-c-cream/80">{contactInfo.address}</p>
        </div>

        <div className="md:col-span-2 text-sm">
          <p className="mb-4 text-c-cream/50 uppercase tracking-widest text-xs">Reach us</p>
          <a href={`tel:${contactInfo.phone}`} className="block hover:text-c-marigold">{contactInfo.phone}</a>
          <a href={`mailto:${contactInfo.email}`} className="block hover:text-c-marigold mt-1">{contactInfo.email}</a>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.url} aria-label={s.name}
                 className="size-9 grid place-items-center rounded-full bg-c-cream/10 text-xs hover:bg-c-marigold hover:text-c-ink transition">
                {s.name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-c-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-c-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Colours Advertising Agency. All rights reserved.</p>
          <p>Musaffah · Abu Dhabi · UAE</p>
        </div>
      </div>
    </footer>
  );
}
