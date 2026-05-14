import { motion } from "framer-motion";
import { Leaf, ChefHat, Sparkles, ShieldCheck, Users, Zap } from "lucide-react";

const items = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from premium farms." },
  { icon: ChefHat, title: "Professional Chefs", desc: "Decades of fine-dining mastery." },
  { icon: Sparkles, title: "Premium Taste", desc: "Layered flavor in every bite." },
  { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "Spotless, certified, transparent." },
  { icon: Users, title: "Family Environment", desc: "A warm welcome, every visit." },
  { icon: Zap, title: "Fast Service", desc: "Quick without ever feeling rushed." },
];

export function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">WHY US</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Six reasons we're{" "}
            <span className="text-gradient-gold italic font-serif-luxe">different</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:border-gold/40 hover:-translate-y-1"
            >
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"
                style={{ background: "radial-gradient(circle, #D4AF37, transparent)" }}
              />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold text-background shadow-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-cream group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-cream/60">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
