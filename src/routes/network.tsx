import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "@/components/site/Reveal";
import { brandColors } from "@/lib/brand";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Network — Bharat EV Charging Map & Corridors" },
      {
        name: "description",
        content:
          "Bharat EV's growing charging network: national highway corridors, metro hubs and fleet depots across India.",
      },
      { property: "og:title", content: "Bharat EV Network" },
      {
        property: "og:description",
        content: "National highway corridors, metro hubs and fleet depots across India.",
      },
    ],
  }),
  component: NetworkPage,
});

const corridors = [
  { route: "NH-48 · Delhi — Mumbai", sites: 24, status: "LIVE" },
  { route: "NH-44 · Delhi — Chennai", sites: 19, status: "LIVE" },
  { route: "NH-16 · Kolkata — Chennai", sites: 14, status: "BUILD" },
  { route: "NE-4 · Bengaluru — Chennai", sites: 8, status: "LIVE" },
  { route: "NH-27 · Porbandar — Silchar", sites: 11, status: "PLAN" },
];

function NetworkPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">The Network</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            An energy highway across India.
          </h1>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            ["480+", "Active chargers"],
            ["62", "Cities covered"],
            ["5", "National corridors"],
            ["99.2%", "Network uptime"],
          ].map(([v, l]) => (
            <motion.div
              key={l}
              variants={staggerItem}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="font-display text-4xl font-extrabold text-brand">{v}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {l}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-border/70 bg-surface-1 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Live corridors
            </h2>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
            {corridors.map((c, i) => (
              <Reveal key={c.route} delay={i * 0.05}>
                <div className="group grid items-center gap-2 border-b border-border/70 px-6 py-5 transition-colors last:border-0 hover:bg-brand-soft md:grid-cols-[1fr_auto_auto]">
                  <p className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-brand">
                    {c.route}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:px-10">
                    {c.sites} sites
                  </p>
                  <span
                    className="justify-self-start rounded px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest md:justify-self-end"
                    style={
                      c.status === "LIVE"
                        ? { background: brandColors.light, color: brandColors.primaryDeep }
                        : c.status === "BUILD"
                          ? { background: "rgba(242,106,12,0.12)", color: brandColors.accent }
                          : { background: "rgba(16,48,107,0.08)", color: brandColors.secondary }
                    }
                  >
                    {c.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-sm-brand"
            >
              Request corridor access <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
