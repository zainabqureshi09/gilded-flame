import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gold-divider mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-gold" />
              <div className="font-cinzel text-sm tracking-[0.2em] text-cream">
                GB <span className="text-gradient-gold">FLAME</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed font-serif-luxe italic">
              Where every bite feels like luxury. Karachi's most cinematic
              dining.
            </p>
          </div>

          <FooterCol title="Explore" links={["About", "Dishes", "Menu", "Gallery"]} />
          <FooterCol title="Visit" links={["DHA Phase 6", "Karachi, Pakistan", "+92 300 0000000", "hello@gbflame.com"]} />
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

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-cinzel text-xs tracking-[0.3em] text-gold mb-4">{title.toUpperCase()}</div>
      <ul className="space-y-2 text-sm text-cream/70">
        {links.map((l) => (
          <li key={l} className="hover:text-gold transition-colors cursor-pointer">{l}</li>
        ))}
      </ul>
    </div>
  );
}
