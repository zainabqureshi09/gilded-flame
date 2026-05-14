import { Flame, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const explore = [
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Offers", to: "/offers" },
  { label: "Reservation", to: "/reservation" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gold-divider mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-gold" />
              <div className="font-cinzel text-sm tracking-[0.2em] text-cream">
                GB <span className="text-gradient-gold">FLAME</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed font-serif-luxe italic">
              Where every bite feels like luxury. Karachi's most cinematic
              dining destination.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: MessageCircle, href: "https://wa.me/923000000000" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-background"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-cinzel text-xs tracking-[0.3em] text-gold mb-4">EXPLORE</div>
            <ul className="space-y-2 text-sm text-cream/70">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-cinzel text-xs tracking-[0.3em] text-gold mb-4">VISIT</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>DHA Phase 6, Karachi, Pakistan</li>
              <li>
                <a href="tel:+923000000000" className="hover:text-gold transition-colors">
                  +92 300 0000000
                </a>
              </li>
              <li>
                <a href="mailto:hello@gbflame.com" className="hover:text-gold transition-colors">
                  hello@gbflame.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-cinzel text-xs tracking-[0.3em] text-gold mb-4">HOURS</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Mon – Thu · 12pm – 11pm</li>
              <li>Fri – Sun · 12pm – 1am</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} GB Flame & Flavor. All rights reserved.</div>
          <div className="font-cinzel tracking-[0.3em]">CRAFTED · WITH · FIRE</div>
        </div>
      </div>
    </footer>
  );
}
