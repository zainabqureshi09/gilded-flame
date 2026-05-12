import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = { name: string; desc: string; price: string };
const menu: Record<string, Item[]> = {
  Chinese: [
    { name: "Kung Pao Chicken", desc: "Wok-fired chicken, peanuts, dried chili.", price: "PKR 1,650" },
    { name: "Manchurian Beef", desc: "Crispy beef, tangy garlic glaze.", price: "PKR 1,850" },
    { name: "Schezwan Prawns", desc: "Tiger prawns, schezwan butter.", price: "PKR 2,400" },
    { name: "Hakka Noodles", desc: "Hand-pulled noodles, vegetables.", price: "PKR 1,250" },
  ],
  BBQ: [
    { name: "Charcoal Tikka", desc: "24h marinated chicken, smoked low.", price: "PKR 1,450" },
    { name: "Seekh Kebab", desc: "Hand-minced beef, charcoal-grilled.", price: "PKR 1,350" },
    { name: "BBQ Platter", desc: "Mixed grill for two.", price: "PKR 3,950" },
    { name: "Malai Boti", desc: "Cream-marinated, slow charred.", price: "PKR 1,550" },
  ],
  "Burgers & Pasta": [
    { name: "GB Signature Burger", desc: "Aged beef, smoked cheddar, gold bun.", price: "PKR 1,750" },
    { name: "Truffle Carbonara", desc: "Egg yolk, pancetta, black truffle.", price: "PKR 2,200" },
    { name: "Penne Arrabbiata", desc: "Spicy tomato, fresh basil.", price: "PKR 1,650" },
    { name: "Crispy Chicken Burger", desc: "Buttermilk fried, slaw.", price: "PKR 1,450" },
  ],
  Desserts: [
    { name: "Molten Lava Cake", desc: "Dark chocolate, gold leaf.", price: "PKR 850" },
    { name: "Tiramisu Royale", desc: "Espresso, mascarpone.", price: "PKR 950" },
    { name: "Crème Brûlée", desc: "Vanilla bean, torched sugar.", price: "PKR 850" },
  ],
};

export function MenuSection() {
  const cats = Object.keys(menu);
  const [active, setActive] = useState(cats[0]);

  return (
    <section id="menu" className="relative py-32 bg-gradient-section">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">THE MENU</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            A <span className="text-gradient-gold italic font-serif-luxe">curated</span> selection.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                active === c
                  ? "bg-gradient-gold text-background shadow-gold"
                  : "border border-border text-cream/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {menu[active].map((item) => (
              <div key={item.name} className="group">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex-1 border-b border-dashed border-border group-hover:border-gold/40 transition-colors" />
                  <span className="font-cinzel text-sm text-gold">{item.price}</span>
                </div>
                <p className="mt-2 text-cream/60 italic font-serif-luxe text-lg">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
