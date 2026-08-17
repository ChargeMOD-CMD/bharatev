import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import heroImg from "@/assets/hero-highway.jpg";
import hubImg from "@/assets/build-hub.jpg";
import corridorImg from "@/assets/build-corridor.jpg";
import fleetImg from "@/assets/build-fleet.jpg";
import indiaImg from "@/assets/india-mobility.jpg";
import { brandColors } from "@/lib/brand";
import { Reveal, fadeLeft, fadeRight, staggerContainer, staggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat EV — India's Energy Highway | EV Charging Network" },
      {
        name: "description",
        content:
          "Power the journey. Bharat EV builds fast, reliable EV charging infrastructure across India's highways, cities and fleets.",
      },
      { property: "og:title", content: "Bharat EV — India's Energy Highway" },
      {
        property: "og:description",
        content:
          "Power the journey. Fast, reliable EV charging infrastructure across India's highways, cities and fleets.",
      },
    ],
  }),
  component: Index,
});

/* ---------------------------------- HERO ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(900px 500px at 15% 0%, rgba(31,158,40,0.10), transparent 60%),
            radial-gradient(700px 400px at 90% 20%, rgba(242,106,12,0.07), transparent 60%),
            var(--gradient-brand-background)`,
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-28">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">
              Bharat EV · Energy Highway
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-8xl">
              POWER
              <br />
              THE
              <br />
              <span className="text-brand">JOURNEY.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              A nationwide charging network engineered for India's electric future — from
              expressway corridors to city hubs and fleet depots.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/network"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-md-brand"
              >
                Explore the Network <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-brand/40 px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                About Us
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal variants={fadeRight}>
          <div className="glass-surface relative overflow-hidden rounded-xl p-3 glow-sm-brand">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="EV charging plaza along an Indian expressway"
                width={1920}
                height={1080}
                className="aspect-[16/11] w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(10,27,61,0.45) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                    Route NH-48 · Delhi → Mumbai
                  </p>
                  <p className="font-display text-lg font-bold text-white">Energy Corridor 01</p>
                </div>
                <span className="rounded bg-brand px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                  Live
                </span>
              </div>
            </div>
            {/* energy line with moving pulse */}
            <div className="relative mx-1 mt-3 h-px bg-brand/25">
              <div
                className="absolute top-1/2 h-1.5 w-10 -translate-y-1/2 rounded-full animate-pulse-x"
                style={
                  {
                    background: `linear-gradient(90deg, transparent, ${brandColors.accent})`,
                    "--pulse-distance": "min(70vw, 480px)",
                  } as React.CSSProperties
                }
              />
            </div>
            <div className="grid grid-cols-3 gap-2 px-1 py-3">
              {[
                ["480+", "Chargers"],
                ["62", "Cities"],
                ["24/7", "Uptime Ops"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-xl font-bold text-secondary">{v}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- ENERGY STATEMENT ----------------------------- */

function EnergyStatement() {
  return (
    <section className="relative border-y border-border/70 bg-surface-1 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[auto_1fr] md:px-8">
        <div className="relative hidden w-px bg-brand/25 md:block">
          <div
            className="absolute left-1/2 top-0 h-10 w-1 -translate-x-1/2 rounded-full animate-pulse-y"
            style={
              {
                background: `linear-gradient(180deg, transparent, ${brandColors.accent})`,
                "--pulse-distance": "260px",
              } as React.CSSProperties
            }
          />
        </div>
        <div>
          <Reveal variants={fadeLeft}>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
              MOBILITY
              <br />
              IS CHANGING.
            </h2>
          </Reveal>
          <Reveal variants={fadeLeft} delay={0.15}>
            <h2 className="mt-10 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              <span className="text-secondary">ENERGY</span>
              <br />
              MUST <span className="text-brand">MOVE</span>
              <br />
              WITH IT.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHAT WE BUILD ------------------------------ */

const builds = [
  {
    n: "01",
    title: "City Charging Hubs",
    desc: "High-density DC fast charging plazas in metros, engineered for turnaround speed.",
    img: hubImg,
    alt: "DC fast charging hub with green charging pillars",
  },
  {
    n: "02",
    title: "Highway Corridors",
    desc: "Expressway charging every 60 km — so intercity travel never waits for energy.",
    img: corridorImg,
    alt: "Highway-side EV charging corridor",
  },
  {
    n: "03",
    title: "Fleet Depots",
    desc: "Depot-scale charging for buses, logistics and last-mile electric fleets.",
    img: fleetImg,
    alt: "Electric bus fleet depot with chargers",
  },
];

function WhatWeBuild() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">What We Build</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Infrastructure for the electric decade.
            </h2>
          </div>
          <Link
            to="/solutions"
            className="hidden shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary transition-colors hover:text-brand md:inline-flex"
          >
            All solutions <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <motion.div
        className="mt-14 grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {builds.map((b) => (
          <motion.article
            key={b.n}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:glow-md-brand"
          >
            <div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
            <div className="relative overflow-hidden">
              <img
                src={b.img}
                alt={b.alt}
                width={960}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(10,27,61,0.5))" }}
              />
              <span className="absolute bottom-3 left-4 font-display text-5xl font-extrabold text-white/70 transition-colors group-hover:text-brand-glow">
                {b.n}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-brand">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <Link
                to="/solutions"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary transition-all group-hover:gap-3 group-hover:text-brand"
              >
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------ ENERGY ROUTE ------------------------------- */

function EnergyRouteVisual() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-surface-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">The Energy Route</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            One network. Every route.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <svg
            viewBox="0 0 1200 320"
            className="w-full"
            role="img"
            aria-label="Abstract charging route map from Delhi to Chennai"
          >
            {/* secondary faint routes */}
            <path
              d="M0 260 C 260 240, 420 120, 640 150 S 1050 60, 1200 90"
              fill="none"
              stroke={brandColors.primary}
              strokeOpacity="0.18"
              strokeWidth="1.5"
            />
            <path
              d="M0 90 C 220 130, 480 250, 760 230 S 1080 260, 1200 240"
              fill="none"
              stroke={brandColors.primary}
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
            {/* main route */}
            <motion.path
              d="M0 180 C 240 140, 440 220, 660 180 S 1000 120, 1200 160"
              fill="none"
              stroke={brandColors.primary}
              strokeWidth="3"
              style={{ filter: `drop-shadow(0 0 8px rgba(31,158,40,0.4))` }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* moving pulse */}
            <circle r="6" fill={brandColors.accent}>
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M0 180 C 240 140, 440 220, 660 180 S 1000 120, 1200 160"
              />
            </circle>
            {/* route points */}
            {[
              { x: 90, y: 168, label: "DELHI", active: true },
              { x: 380, y: 186, label: "JAIPUR" },
              { x: 660, y: 180, label: "MUMBAI", active: true },
              { x: 900, y: 146, label: "HYDERABAD" },
              { x: 1120, y: 152, label: "CHENNAI" },
            ].map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="7" fill={brandColors.secondary} />
                <circle cx={p.x} cy={p.y} r="3" fill="#fff" />
                <text
                  x={p.x}
                  y={p.y + 32}
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="12"
                  letterSpacing="2"
                  fill={p.active ? brandColors.primary : "#5A6B7F"}
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ WHY BHARAT EV ------------------------------ */

const whys = [
  {
    n: "01",
    t: "Indian-grid engineered",
    d: "Hardware and load management designed for Indian power conditions, heat and uptime realities.",
  },
  {
    n: "02",
    t: "Corridor-first strategy",
    d: "We build along movement — highways, freight lanes and transit routes — not just parking lots.",
  },
  {
    n: "03",
    t: "Open to every vehicle",
    d: "CCS2, Bharat AC/DC and fleet-specific standards on one interoperable network.",
  },
  {
    n: "04",
    t: "Energy intelligence",
    d: "Live routing, demand prediction and grid-aware charging across the entire network.",
  },
];

function WhyBharatEV() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">Why Bharat EV</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Built for India. Built to move.
        </h2>
      </Reveal>
      <div className="mt-12 divide-y divide-brand/15 border-y border-brand/15">
        {whys.map((w, i) => (
          <Reveal key={w.n} delay={i * 0.06}>
            <div className="group grid gap-3 py-8 transition-colors md:grid-cols-[100px_1fr_1.2fr] md:items-baseline">
              <span className="font-display text-2xl font-extrabold text-secondary/50 transition-colors group-hover:text-secondary">
                {w.n}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-brand">
                {w.t}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:border-l md:border-brand/20 md:pl-8">
                {w.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ CHARGING FLOW ------------------------------ */

const steps = [
  { n: "01", t: "Locate", d: "Find the nearest live charger on your route." },
  { n: "02", t: "Plug In", d: "Tap, plug and authenticate in seconds." },
  { n: "03", t: "Charge", d: "DC fast charging with live progress tracking." },
  { n: "04", t: "Move", d: "Pay automatically and get back on the road." },
];

function ChargingFlow() {
  return (
    <section className="border-y border-border/70 bg-surface-1 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">Charging Flow</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            From arrival to departure in four moves.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-brand/25 md:left-0 md:top-5 md:h-px md:w-full" />
          <motion.div
            className="grid gap-10 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((s, i) => (
              <motion.div key={s.n} variants={staggerItem} className="relative pl-12 md:pl-0 md:pt-12">
                <span
                  className={`absolute left-4 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background md:left-0 md:top-5 md:-translate-y-1/2 md:translate-x-0 ${
                    i === 0 ? "bg-brand glow-sm-brand" : "bg-secondary"
                  }`}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-brand">{s.n}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- PARTNER DESTINATIONS --------------------------- */

const destinations = ["Highway Plazas", "Malls & Retail", "Hotels & Resorts", "Office Parks", "Residential Towers", "Fuel Stations"];

function PartnerDestinations() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: `linear-gradient(135deg, ${brandColors.primaryDeep}, ${brandColors.primary})` }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] tech-grid" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-8">
        <Reveal variants={fadeLeft}>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/80">
            Partner Destinations
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            YOUR LOCATION
            <br />
            COULD POWER
            <br />
            THE NEXT JOURNEY.
          </h2>
          <Link
            to="/partners"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 font-mono text-sm uppercase tracking-widest text-primary transition-transform hover:scale-[1.02]"
          >
            Host a Charging Hub <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal variants={fadeRight}>
          <ul className="divide-y divide-white/20 border-y border-white/20">
            {destinations.map((d) => (
              <li key={d}>
                <Link
                  to="/partners"
                  className="group flex items-center justify-between py-5 font-display text-xl font-bold text-white/85 transition-colors hover:text-white md:text-2xl"
                >
                  {d}
                  <ArrowUpRight className="h-5 w-5 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- INDIA MOBILITY ------------------------------ */

function IndiaMobility() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={indiaImg}
        alt="Aerial view of an Indian expressway interchange at golden hour"
        width={1920}
        height={960}
        loading="lazy"
        className="h-[70vh] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(10,27,61,0.55), rgba(31,158,40,0.18) 60%, rgba(10,27,61,0.65))`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <p className="animate-drift absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[16vw] font-extrabold uppercase leading-none text-white/[0.06]">
          Charging the Nation · Charging the Nation ·
        </p>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand-glow">
              28.6139° N · 77.2090° E — India in motion
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
              The world's largest mobility shift starts here.
            </h2>
            <div className="mt-7 h-px w-40 bg-brand" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FINAL CTA -------------------------------- */

function FinalCta() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: brandColors.darker }}
    >
      {/* diagonal energy line */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-px w-[140%] -rotate-6"
        style={{ background: `linear-gradient(90deg, transparent, ${brandColors.primary}, transparent)` }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            READY TO <span className="text-brand-glow">MOVE</span>
            <br />
            <span className="text-brand">ENERGY?</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-md-brand"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/network"
              className="inline-flex items-center gap-2 rounded-md border border-brand/50 px-8 py-4 font-mono text-sm uppercase tracking-widest text-white transition-colors hover:border-brand-glow hover:text-brand-glow"
            >
              View the Network
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.bpm.bharatev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand/50 bg-background/10 backdrop-blur-sm px-8 py-4 font-mono text-sm uppercase tracking-widest text-white transition-colors hover:border-brand-glow hover:text-brand-glow"
            >
              Get Android App
            </a>
            <a
              href="https://apps.apple.com/in/app/bharat-ev/id6796278883"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand/50 bg-background/10 backdrop-blur-sm px-8 py-4 font-mono text-sm uppercase tracking-widest text-white transition-colors hover:border-brand-glow hover:text-brand-glow"
            >
              Get iOS App
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <EnergyStatement />
      <WhatWeBuild />
      <EnergyRouteVisual />
      <WhyBharatEV />
      <ChargingFlow />
      <PartnerDestinations />
      <IndiaMobility />
      <FinalCta />
    </main>
  );
}
