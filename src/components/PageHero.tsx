import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";
import { Particles } from "./Particles";

export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center pt-32 pb-20">
      <div className="absolute inset-0">
        <img
          src={image || hero}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <Particles count={20} />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-xs tracking-[0.4em] text-gold"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] text-cream"
        >
          {title}{" "}
          {highlight && (
            <span className="text-gradient-gold italic font-serif-luxe">
              {highlight}
            </span>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-cream/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
