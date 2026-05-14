import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import family from "@/assets/dish-family.jpg";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Reviews — GB Flame & Flavor | Karachi's Best Restaurant" },
      { name: "description", content: "What our guests say about Karachi's most cinematic Chinese & BBQ dining experience at GB Flame & Flavor." },
      { property: "og:title", content: "Guest Reviews — GB Flame & Flavor" },
      { property: "og:description", content: "Real stories from real guests." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="GUEST REVIEWS"
        title="Stories from our"
        highlight="dining room."
        subtitle="Real words from the families, couples and food-lovers who've made GB their second home."
        image={family}
      />
      <Testimonials />
    </>
  );
}
