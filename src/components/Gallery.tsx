import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import chinese from "@/assets/dish-chinese.jpg";
import bbq from "@/assets/dish-bbq.jpg";
import burger from "@/assets/dish-burger.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import rice from "@/assets/dish-rice.jpg";
import family from "@/assets/dish-family.jpg";
import appetizer from "@/assets/dish-appetizer.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import flames from "@/assets/gallery-flames.jpg";
import interior from "@/assets/interior-1.jpg";
import chef from "@/assets/chef.jpg";

const imgs = [
  { src: flames, span: "row-span-2" },
  { src: chinese, span: "" },
  { src: interior, span: "col-span-2" },
  { src: bbq, span: "row-span-2" },
  { src: burger, span: "" },
  { src: pasta, span: "" },
  { src: dessert, span: "" },
  { src: chef, span: "col-span-2" },
  { src: rice, span: "" },
  { src: appetizer, span: "" },
  { src: family, span: "col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-32 bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">GALLERY</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            A taste, in <span className="text-gradient-gold italic font-serif-luxe">frames</span>.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {imgs.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setActive(img.src)}
              className={`group relative overflow-hidden rounded-xl ${img.span}`}
            >
              <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all rounded-xl" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background/90 backdrop-blur-md p-6"
            onClick={() => setActive(null)}
          >
            <button className="absolute top-6 right-6 text-cream hover:text-gold" onClick={() => setActive(null)}>
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={active}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
