import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/bharat-ev-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-brand/15 bg-surface-2">
      <div className="energy-hairline absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <img
            src={logoAsset.url}
            alt="Bharat EV — Charging the Nation"
            className="h-20 w-auto object-contain"
            loading="lazy"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Building India's energy highway — a nationwide network of fast, reliable EV charging
            infrastructure. Charging the nation, one route at a time.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand">Navigate</p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
            {[
              { to: "/", label: "Home" },
              { to: "/solutions", label: "Solutions" },
              { to: "/network", label: "Network" },
              { to: "/about", label: "About" },
              { to: "/partners", label: "Partners" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/70 transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand">Legal</p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer Legal">
            {[
              { to: "/terms-and-conditions", label: "Terms & Conditions" },
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/refund-policy", label: "Refund Policy" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/70 transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand">Contact</p>
          <div className="mt-4 space-y-2.5 text-sm text-foreground/70">
            <p>hello@bharatev.in</p>
            <p>+91 98765 43210</p>
            <p>New Delhi · Mumbai · Bengaluru</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Bharat EV. All rights reserved.</span>
          <span className="text-brand">Charging the Nation</span>
        </div>
      </div>
    </footer>
  );
}
