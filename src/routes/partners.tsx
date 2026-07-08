import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Hotel, Landmark, ShoppingBag, Truck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner With Bharat EV — Host a Charging Hub" },
      {
        name: "description",
        content:
          "Turn your location into an energy destination. Partner with Bharat EV to host charging infrastructure with zero capex options.",
      },
      { property: "og:title", content: "Partner With Bharat EV" },
      {
        property: "og:description",
        content: "Turn your location into an energy destination.",
      },
    ],
  }),
  component: PartnersPage,
});

const types = [
  { icon: Landmark, t: "Highway Plazas", d: "Anchor a corridor site with guaranteed traffic." },
  { icon: ShoppingBag, t: "Malls & Retail", d: "Convert charge time into dwell time and footfall." },
  { icon: Hotel, t: "Hotels & Resorts", d: "Destination charging your guests will book for." },
  { icon: Building2, t: "Office Parks", d: "Workplace charging as an amenity and ESG win." },
  { icon: Truck, t: "Fleet Operators", d: "Depot electrification with energy-as-a-service." },
  { icon: Zap, t: "Fuel Stations", d: "Future-proof forecourts with EV fast charging." },
];

function PartnersPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">Partners</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            Your location could power the next journey.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We fund, build and operate the chargers. You bring the location. Together we turn
            parking spots into energy destinations.
          </p>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {types.map((p) => (
            <motion.div
              key={p.t}
              variants={staggerItem}
              className="group rounded-xl border border-border bg-card p-7 transition-shadow hover:glow-sm-brand"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-foreground group-hover:text-brand">
                {p.t}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-border/70 bg-surface-1 py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Zero-capex hosting. Shared revenue.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Site survey to live chargers in under 90 days, with full operations handled by
              Bharat EV.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-md-brand"
            >
              Apply to Host <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
