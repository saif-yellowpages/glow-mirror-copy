import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { categories, contactInfo, socialLinks } from "@/data/services";
import { submitInquiry } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Colours Advertising Agency, Musaffah Abu Dhabi" },
      { name: "description", content: "Visit our shop in Musaffah, Abu Dhabi or send an inquiry. We respond within one working day." },
      { property: "og:title", content: "Contact — Colours Advertising" },
      { property: "og:description", content: "Get in touch with Colours Advertising in Musaffah, Abu Dhabi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const submit = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await submit({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          service: String(fd.get("service") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setStatus("ok");
      setMsg(res.message);
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMsg("Something went wrong. Please try again or call us directly.");
    }
  }

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
        <h1 className="font-display text-5xl md:text-8xl max-w-3xl leading-[0.95]">
          Let's make something <span className="italic text-c-coral">colourful</span>.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          Tell us about your project — quotes, samples and timelines back within one working day.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 grid gap-10 lg:grid-cols-12">
        {/* FORM */}
        <form onSubmit={onSubmit} className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 md:p-10">
          <h2 className="font-display text-3xl mb-6">Send an inquiry</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required placeholder="Your name" />
            <Field label="Email" name="email" type="email" required placeholder="you@company.ae" />
            <Field label="Phone" name="phone" required placeholder="+971 …" />
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
              <select name="service" className="rounded-xl border border-input bg-background px-4 py-3 text-sm">
                <option value="">Choose a service</option>
                {categories.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
                <option value="Other">Other / not sure</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell us a bit about quantities, deadlines and where it's going."
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm resize-none" />
          </div>
          <button
            type="submit" disabled={status === "loading"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-c-ink px-6 py-3 text-sm text-c-cream hover:bg-accent disabled:opacity-60 transition"
          >
            <Send size={16} /> {status === "loading" ? "Sending…" : "Send inquiry"}
          </button>
          {status === "ok" && <p className="mt-4 text-sm text-c-ink bg-c-mint/60 px-4 py-3 rounded-xl">{msg}</p>}
          {status === "error" && <p className="mt-4 text-sm text-destructive">{msg}</p>}
        </form>

        {/* INFO */}
        <aside className="lg:col-span-5 space-y-4">
          <InfoBlock icon={<MapPin size={20} />} title="Visit us" body={contactInfo.address} color="bg-c-coral" />
          <InfoBlock icon={<Phone size={20} />} title="Call" body={contactInfo.phone} href={`tel:${contactInfo.phone}`} color="bg-c-marigold" />
          <InfoBlock icon={<Mail size={20} />} title="Email" body={contactInfo.email} href={`mailto:${contactInfo.email}`} color="bg-c-mint" />
          <InfoBlock icon={<Clock size={20} />} title="Hours" body="Sat–Thu · 9:00 AM – 7:00 PM" color="bg-c-cobalt text-c-cream" />

          <div className="rounded-3xl bg-c-ink text-c-cream p-6">
            <p className="font-display text-2xl mb-4">Follow us</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                   className="px-4 py-2 rounded-full bg-c-cream/10 text-sm hover:bg-c-marigold hover:text-c-ink transition">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Find us</p>
        <h2 className="font-display text-3xl md:text-5xl mb-6">Musaffah, Abu Dhabi.</h2>
        <div className="rounded-3xl overflow-hidden border border-border">
          <iframe
            title="Colours Advertising location"
            src={contactInfo.mapsEmbed}
            width="100%" height="450" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name} type={type} required={required} placeholder={placeholder}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}

function InfoBlock({ icon, title, body, href, color }: { icon: React.ReactNode; title: string; body: string; href?: string; color: string }) {
  const inner = (
    <div className={`${color} rounded-3xl p-6 flex gap-4`}>
      <div className="size-11 rounded-full bg-c-ink/10 grid place-items-center shrink-0">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest opacity-70">{title}</p>
        <p className="mt-1 font-medium">{body}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
