import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import indiaImg from "@/assets/india-mobility.jpg";
import kapilImg from "@/assets/kapil-md.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bharat EV — Charging the Nation" },
      {
        name: "description",
        content:
          "Bharat EV is building India's energy highway — the charging backbone for the country's electric mobility shift.",
      },
      { property: "og:title", content: "About Bharat EV" },
      {
        property: "og:description",
        content: "The team building India's EV charging backbone.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand">About Bharat EV</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
            We build the roads energy travels on.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Bharat EV exists for one reason: India's electric future needs an energy highway. We
            design, build and operate charging infrastructure that keeps the nation moving —
            reliably, at scale, everywhere journeys happen.
          </p>
        </Reveal>
      </section>

      <section className="relative overflow-hidden border-y border-border/70">
        <img
          src={indiaImg}
          alt="Indian expressway interchange from above"
          width={1920}
          height={960}
          loading="lazy"
          className="h-[46vh] w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,27,61,0.4), rgba(31,158,40,0.15))" }}
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-3 md:px-8 md:py-28">
        {[
          {
            n: "01",
            t: "Mission",
            d: "Make range anxiety obsolete by putting reliable fast charging within reach of every Indian journey.",
          },
          {
            n: "02",
            t: "Vision",
            d: "A single interoperable energy network spanning highways, cities and fleets — charging the nation.",
          },
          {
            n: "03",
            t: "Values",
            d: "Uptime over promises. Indian-grid engineering. Open standards. Infrastructure that outlasts hype.",
          },
        ].map((v, i) => (
          <Reveal key={v.n} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-card p-8 transition-shadow hover:glow-sm-brand">
              <span className="font-display text-3xl font-extrabold text-secondary/40">{v.n}</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">{v.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              <div className="mt-6 h-0.5 w-12 bg-brand" />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Managing Director Section */}
      <section className="border-t border-border/70 bg-card/30 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand text-center">
              Leadership
            </p>
            <h2 className="mt-4 text-center font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Meet Our Managing Director
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-10 rounded-2xl border border-border bg-card p-10 shadow-lg md:flex-row md:gap-14">
              {/* Photo */}
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-1 rounded-full opacity-60"
                  style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-secondary))" }}
                />
                <img
                  src={kapilImg}
                  alt="Kapil — Managing Director, Bharat EV"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="relative h-48 w-48 rounded-full object-cover object-top ring-4 ring-background"
                />
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                  Managing Director
                </span>
                <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground">
                  Kapil
                </h3>
                <div className="mt-3 h-0.5 w-12 bg-brand md:mx-0 mx-auto" />
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                  Driving Bharat EV's vision of a fully-charged India, Kapil leads the company's
                  strategic direction, partnerships and infrastructure expansion across the nation's
                  highways and urban corridors.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
