"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "#value", label: "The Math" },
  { href: "#how", label: "How It Works" },
  { href: "#station", label: "The Station" },
  { href: "#vote", label: "Vote Your City" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-200 ease-digital ${
          scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-white"
        }`}
      >
        <nav className="mx-auto flex max-w-[1060px] items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" aria-label="The Fuel Club home">
            <Wordmark />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel transition-colors hover:text-club-red"
              >
                {link.label}
              </a>
            ))}
            <a href="#waitlist" className="btn-primary !h-10 !px-6 !text-xs">
              Join
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-6 bg-asphalt transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-asphalt transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-asphalt transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* The double rule anchors the nav — the lit, breathing signature */}
      <hr className="dbl dbl-lit animate-breathe" aria-hidden="true" />

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-200 ease-digital md:hidden ${
          open ? "max-h-96 border-b border-stroke py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-card px-3 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-steel hover:bg-porcelain"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Join The Club
          </a>
        </div>
      </div>
    </header>
  );
}
