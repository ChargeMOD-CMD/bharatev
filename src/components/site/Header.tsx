import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/bharat-ev-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/network", label: "Network" },
  { to: "/about", label: "About" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-brand/20 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-8">
        <Link to="/" className="flex h-full shrink-0 items-center" aria-label="Bharat EV — Home">
          <img
            src={logoAsset.url}
            alt="Bharat EV — Charging the Nation"
            className="h-12 w-auto object-contain md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative font-mono text-[13px] uppercase tracking-widest text-foreground/70 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand transition-all duration-300 ${
                  pathname === item.to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/partners"
            className="hidden rounded-md bg-primary px-5 py-2.5 font-mono text-[13px] uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 glow-sm-brand lg:inline-flex"
          >
            Partner With Us
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand/30 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand/15 bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border/60 py-3.5 font-mono text-sm uppercase tracking-widest text-foreground/80"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/partners"
              className="mt-4 rounded-md bg-primary px-5 py-3 text-center font-mono text-sm uppercase tracking-widest text-primary-foreground"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
