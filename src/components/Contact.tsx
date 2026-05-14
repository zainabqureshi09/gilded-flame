import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">VISIT</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Find <span className="text-gradient-gold italic font-serif-luxe">us</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-2xl overflow-hidden h-[400px]"
          >
            <iframe
              title="GB Flame & Flavor Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=67.0%2C24.85%2C67.1%2C24.95&layer=mapnik"
              className="w-full h-full grayscale-[50%] contrast-125"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <Item icon={MapPin} title="Address" text="DHA Phase 6, Karachi, Pakistan" />
            <Item icon={Phone} title="Phone" text="+92 300 0000000" />
            <Item icon={Mail} title="Email" text="hello@gbflame.com" />
            <div className="pt-4 border-t border-border">
              <div className="text-xs uppercase tracking-widest text-cream/60 mb-3">Follow</div>
              <div className="flex gap-3">
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-background hover:shadow-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-gold text-background">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-cream/50">{title}</div>
        <div className="text-cream">{text}</div>
      </div>
    </div>
  );
}
