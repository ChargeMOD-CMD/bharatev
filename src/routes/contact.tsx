import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bharat EV — Start a Charging Project" },
      {
        name: "description",
        content:
          "Talk to Bharat EV about charging hubs, highway corridors, fleet depots or hosting partnerships.",
      },
      { property: "og:title", content: "Contact Bharat EV" },
      {
        property: "og:description",
        content: "Start a charging infrastructure project with Bharat EV.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="pt-28 md:pt-36">
      <section className="mx-auto grid max-w-7xl gap-14 px-4 pb-24 md:grid-cols-[1fr_1.1fr] md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">Contact</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
            Let's route some energy.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Whether you're planning a corridor, electrifying a fleet or hosting a hub — our team
            responds within one business day.
          </p>
          <div className="mt-10 space-y-4 font-mono text-sm text-foreground/80">
            <p><span className="text-brand">E</span> — hello@bharatev.in</p>
            <p><span className="text-brand">T</span> — +91 98765 43210</p>
            <p><span className="text-brand">HQ</span> — New Delhi · Mumbai · Bengaluru</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-xl border border-brand/30 bg-brand-soft p-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                ✓
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                Message received.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form
              className="rounded-xl border border-border bg-card p-7 md:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </span>
                  <input
                    required
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/25"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/25"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  I'm interested in
                </span>
                <select
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/25"
                  defaultValue="hub"
                >
                  <option value="hub">City charging hub</option>
                  <option value="corridor">Highway corridor</option>
                  <option value="fleet">Fleet / depot charging</option>
                  <option value="host">Hosting a location</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="mt-5 block">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/25"
                  placeholder="Tell us about your project…"
                />
              </label>
              <div className="energy-hairline my-7" />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-sm-brand"
              >
                Send Message
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </main>
  );
}
