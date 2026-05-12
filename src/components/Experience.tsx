import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import interior from "@/assets/interior-1.jpg";
import chef from "@/assets/chef.jpg";
import flames from "@/assets/gallery-flames.jpg";
import bbq from "@/assets/dish-bbq.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const slides = [
  { img: interior, title: "The Atmosphere", text: "Warm gold candlelight, dark velvet booths." },
  { img: chef, title: "The Craft", text: "Plated with surgical precision." },
  { img: flames, title: "The Fire", text: "Open flame, open theatre." },
  { img: bbq, title: "The Smoke", text: "Slow-charred, soul-rich BBQ." },
  { img: dessert, title: "The Finale", text: "Sweet endings dressed in gold." },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-65%"]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
        <span className="font-cinzel text-xs tracking-[0.3em] text-gold">EXPERIENCE</span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl">
          A dining ritual <span className="text-gradient-gold italic font-serif-luxe">in motion</span>.
        </h2>
      </div>
      <div className="relative h-[60vh]">
        <motion.div style={{ x }} className="absolute top-0 left-0 flex gap-6 h-full will-change-transform">
          {slides.map((s) => (
            <div key={s.title} className="relative h-full w-[80vw] md:w-[55vw] lg:w-[45vw] overflow-hidden rounded-2xl shadow-luxe shrink-0">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-5xl text-cream">{s.title}</h3>
                <p className="mt-2 text-cream/70 max-w-md">{s.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
