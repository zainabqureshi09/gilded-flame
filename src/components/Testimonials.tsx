import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const reviews = [
  { name: "Sarah K.", role: "Food Critic", text: "The sizzling wok scene alone is worth the visit. Easily the most cinematic dining in Karachi.", rating: 5 },
  { name: "Ahmed R.", role: "Regular Guest", text: "Every dish feels engineered. The tikka melts. The service is operatic. We come back monthly.", rating: 5 },
  { name: "Zoya M.", role: "Travel Blogger", text: "I've eaten in Singapore, Tokyo, Dubai. GB belongs in that conversation. Stunning interior.", rating: 5 },
  { name: "Bilal T.", role: "Family Diner", text: "Brought the whole family. Premium without being stiff — warm, generous, beautifully served.", rating: 5 },
  { name: "Maria L.", role: "Chef", text: "The plating discipline here is rare. The flavors stay loud. A serious kitchen.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">REVIEWS</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            What our <span className="text-gradient-gold italic font-serif-luxe">guests</span> say.
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 200, modifier: 1, slideShadows: false }}
          pagination={{ clickable: true }}
          className="!pb-14"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i} className="!w-[320px] sm:!w-[420px]">
              <div className="glass rounded-2xl p-8 h-full">
                <Quote className="h-8 w-8 text-gold/60" />
                <p className="mt-4 font-serif-luxe text-xl text-cream/85 leading-relaxed">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg text-gold">{r.name}</div>
                    <div className="text-xs uppercase tracking-widest text-cream/50">{r.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .swiper-pagination-bullet { background: #D4AF37; opacity: 0.4; }
        .swiper-pagination-bullet-active { opacity: 1; box-shadow: 0 0 12px #D4AF37; }
      `}</style>
    </section>
  );
}
