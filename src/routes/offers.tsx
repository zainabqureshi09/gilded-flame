import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Flame, Users, Heart, Crown, MessageCircle } from "lucide-react";
import bbq from "@/assets/dish-bbq.jpg";
import family from "@/assets/dish-family.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import platter from "@/assets/dish-bbq.jpg";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
  head: () => ({
    meta: [
      { title: "Offers & Deals — GB Flame & Flavor | Premium Dining Karachi" },
      {
        name: "description",
        content:
          "Exclusive dining deals, family platters and seasonal offers at GB Flame & Flavor — Karachi's premium Chinese & BBQ restaurant.",
      },
      { property: "og:title", content: "Offers & Deals — GB Flame & Flavor" },
      { property: "og:description", content: "Limited-time premium dining offers in Karachi." },
      { property: "og:url", content: "/offers" },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
});

const offers = [
  {
    icon: Users,
    title: "Family Feast",
    tag: "Save 20%",
    price: "PKR 6,950",
    image: family,
    desc: "A curated 8-course feast for 4 — Chinese signatures, charcoal BBQ, dessert & complimentary mocktails.",
    badge: "MOST LOVED",
  },
  {
    icon: Flame,
    title: "BBQ Night Platter",
    tag: "Tue & Wed",
    price: "PKR 4,500",
    image: bbq,
    desc: "Charcoal tikka, seekh kebab, malai boti & lamb chops with naan, raita and signature sauces.",
    badge: "WEEKLY",
  },
  {
    icon: Heart,
    title: "Date Night",
    tag: "For Two",
    price: "PKR 5,500",
    image: dessert,
    desc: "3-course tasting menu with candlelit table, complimentary dessert and a rose welcome.",
    badge: "FRI · SAT · SUN",
  },
  {
    icon: Crown,
    title: "VIP Private Dining",
    tag: "By Reservation",
    price: "Custom",
    image: platter,
    desc: "Private room, dedicated chef, bespoke menu — ideal for birthdays, anniversaries and corporate evenings.",
    badge: "EXCLUSIVE",
  },
];

function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="OFFERS & DEALS"
        title="Premium dining,"
        highlight="curated value."
        subtitle="Limited-time tasting menus, family platters and signature experiences — all crafted with the same flame & flavor."
        image={bbq}
      />

      <section className="relative py-24 bg-gradient-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass border border-gold/10 hover:border-gold/40 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-gold/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                    {o.badge}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold text-background">
                        <o.icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-2xl text-cream">{o.title}</h3>
                    </div>
                    <span className="font-cinzel text-[10px] uppercase tracking-widest text-gold/80">
                      {o.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-cream/65 leading-relaxed">{o.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="font-cinzel text-lg text-gradient-gold">{o.price}</div>
                    <a
                      href={`https://wa.me/923000000000?text=Hi%20GB%20Flame%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(o.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-background shadow-gold transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-3 w-3" />
                      Claim
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-cream/60 max-w-xl mx-auto">
              Looking for something custom? We curate private chef tables, corporate dinners and
              intimate celebrations.
            </p>
            <Link
              to="/reservation"
              className="mt-6 inline-flex items-center rounded-full border border-gold/40 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-background hover:shadow-gold transition-all"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
