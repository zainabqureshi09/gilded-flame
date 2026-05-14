import { motion } from "framer-motion";
import interior from "@/assets/interior-1.jpg";
import chef from "@/assets/chef.jpg";
import flames from "@/assets/gallery-flames.jpg";
import { Counter } from "./Counter";

const stats = [
  { n: 50, suffix: "K+", label: "Happy Customers" },
  { n: 80, suffix: "+", label: "Signature Dishes" },
  { n: 12, suffix: "", label: "Expert Chefs" },
  { n: 12, suffix: "+", label: "Years of Experience" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        {/* Image collage */}
        <div className="relative h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-3/5 h-3/5 overflow-hidden rounded-2xl shadow-luxe"
          >
            <img
              src={interior}
              alt="Interior"
              className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-3/5 h-3/5 overflow-hidden rounded-2xl shadow-luxe border-2 border-gold/20"
          >
            <img
              src={chef}
              alt="Chef"
              className="h-full w-full object-cover hover:scale-110 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-40 h-40 overflow-hidden rounded-full shadow-flame border-4 border-background"
          >
            <img src={flames} alt="Flames" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-cinzel text-xs tracking-[0.3em] text-gold">OUR STORY</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              A legacy of <span className="text-gradient-gold italic font-serif-luxe">flavor</span>,
              forged in fire.
            </h2>
            <div className="gold-divider my-8 w-24" />
            <p className="text-cream/70 leading-relaxed text-lg">
              For over a decade, GB Flame & Flavor has reimagined the art of dining — blending the
              soul of authentic Chinese kitchens with modern fine-dining precision. Every dish is a
              ritual of fire, spice and craft.
            </p>
            <p className="mt-4 text-cream/60 leading-relaxed">
              From hand-pulled noodles to slow-charred BBQ platters, we serve moments worth
              remembering, in a setting designed to feel like cinema.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="font-display text-4xl text-gradient-gold">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-cream/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
