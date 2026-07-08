import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import hubImg from "@/assets/build-hub.jpg";
import corridorImg from "@/assets/build-corridor.jpg";
import fleetImg from "@/assets/build-fleet.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Bharat EV Charging Infrastructure" },
      {
        name: "description",
        content:
          "City charging hubs, highway corridors and fleet depot electrification — Bharat EV's full-stack charging solutions.",
      },
      { property: "og:title", content: "Bharat EV Solutions" },
      {
        property: "og:description",
        content: "City hubs, highway corridors and fleet depots — full-stack EV charging.",
      },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    n: "01",
    t: "City Charging Hubs",
    img: hubImg,
    alt: "DC fast charging hub",
    d: "High-throughput DC plazas in urban cores — retail-adjacent, driver-friendly, built for 15-minute turnarounds.",
    points: ["60–240 kW DC fast charging", "Retail & lounge integration", "Dynamic load management"],
  },
  {
    n: "02",
    t: "Highway Energy Corridors",
    img: corridorImg,
    alt: "Highway charging corridor",
    d: "Charging every 60 km on national corridors, with grid-tied storage where the network needs resilience.",
    points: ["Corridor spacing ≤ 60 km", "Battery-buffered sites", "24/7 monitored uptime"],
  },
  {
    n: "03",
    t: "Fleet & Depot Charging",
    img: fleetImg,
    alt: "Electric bus depot charging",
    d: "Depot electrification for buses, logistics and last-mile fleets — scheduling, telemetry and energy billing included.",
    points: ["Overnight + opportunity charging", "Fleet energy dashboards", "Grid-aware scheduling"],
  },
];

function SolutionsPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">Solutions</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            Full-stack charging, engineered for India.
          </h1>
        </Reveal>
      </section>

      {solutions.map((s, i) => (
        <section key={s.n} className={i % 2 ? "bg-surface-1 border-y border-border/70" : ""}>
          <div
            className={`mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8 ${
              i % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img
                  src={s.img}
                  alt={s.alt}
                  width={960}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-x-0 top-0 h-0.5 bg-brand" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-display text-6xl font-extrabold text-secondary/20">{s.n}</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground md:text-4xl">
                {s.t}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{s.d}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-sm-brand"
              >
                Discuss this solution <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </main>
  );
}
