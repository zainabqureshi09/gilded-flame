import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-32 md:pt-36 pb-20"
    >
      {/* BG image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Sizzling wok with flames"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(178,34,34,0.35), transparent 60%)",
          }}
        />
      </div>

      <Particles count={40} />

      {/* Smoke streaks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/3 h-[60vh] w-32 rotate-12 bg-gradient-to-b from-cream/10 to-transparent blur-3xl" />
        <div className="absolute top-10 right-1/4 h-[50vh] w-40 -rotate-6 bg-gradient-to-b from-gold/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] font-medium tracking-tight text-cream"
        >
          Where Every Bite
          <br />
          <span className="text-gradient-gold italic font-serif-luxe">Feels Like Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-cream/70 leading-relaxed"
        >
          A cinematic culinary journey across signature Chinese, BBQ and modern fusion — crafted by
          master chefs, served in golden candlelight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/menu"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-background shadow-gold transition-transform hover:-translate-y-0.5"
          >
            <Utensils className="h-4 w-4" />
            View Menu
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
          </a>
          <a
            href="/reservation"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold backdrop-blur transition-all hover:bg-gold hover:text-background hover:shadow-gold"
          >
            Reserve Table
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            ["12+", "Years"],
            ["80+", "Dishes"],
            ["50K+", "Guests"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-gradient-gold">{n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cream/50">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
