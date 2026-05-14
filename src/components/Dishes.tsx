import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import chinese from "@/assets/dish-chinese.jpg";
import bbq from "@/assets/dish-bbq.jpg";
import burger from "@/assets/dish-burger.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import rice from "@/assets/dish-rice.jpg";
import family from "@/assets/dish-family.jpg";
import appetizer from "@/assets/dish-appetizer.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const dishes = [
  {
    img: chinese,
    name: "Chinese Specialties",
    tag: "Chef's Pick",
    desc: "Wok-fired classics with house spice.",
  },
  { img: bbq, name: "BBQ Platters", tag: "Smoked", desc: "Charcoal-grilled, slow-marinated." },
  {
    img: burger,
    name: "Signature Burgers",
    tag: "Premium",
    desc: "Aged beef, brioche, melted gold.",
  },
  { img: pasta, name: "Truffle Pasta", tag: "Italian", desc: "Hand-rolled, parmesan-glazed." },
  { img: rice, name: "Rice Dishes", tag: "Aromatic", desc: "Saffron biryani & fried rice." },
  { img: family, name: "Family Deals", tag: "Sharing", desc: "Feasts crafted for the table." },
  { img: appetizer, name: "Appetizers", tag: "Crispy", desc: "Spring rolls & dim sum." },
  { img: dessert, name: "Desserts", tag: "Indulgent", desc: "Lava cake with gold leaf." },
];

const tiltOptions = { max: 12, scale: 1.02, speed: 800, glare: true, "max-glare": 0.3 };

export function Dishes() {
  return (
    <section id="dishes" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">SIGNATURE</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
            Crafted to <span className="text-gradient-gold italic font-serif-luxe">crave</span>.
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            >
              <Tilt options={tiltOptions} style={{ transformStyle: "preserve-3d" }}>
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/40 transition-colors shadow-luxe">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                        {d.tag}
                      </span>
                    </div>
                    <div
                      className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 100%, rgba(212,175,55,0.25), transparent 70%)",
                      }}
                    />
                  </div>
                  <div className="relative p-5">
                    <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors">
                      {d.name}
                    </h3>
                    <p className="mt-1 text-sm text-cream/60">{d.desc}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
