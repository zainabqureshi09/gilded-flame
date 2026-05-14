import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MenuSection } from "@/components/Menu";
import { Dishes } from "@/components/Dishes";
import dish from "@/assets/dish-chinese.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Full Menu — GB Flame & Flavor | Best Chinese Food Karachi" },
      {
        name: "description",
        content:
          "Explore our curated menu of Chinese signatures, charcoal BBQ, gourmet burgers, pasta and desserts at GB Flame & Flavor, Karachi.",
      },
      { property: "og:title", content: "Full Menu — GB Flame & Flavor" },
      {
        property: "og:description",
        content: "A curated selection of Chinese, BBQ, burgers, pasta and desserts.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="THE MENU"
        title="A curated"
        highlight="culinary journey."
        subtitle="Signature Chinese, charcoal BBQ, gourmet burgers, hand-rolled pasta and indulgent desserts — every plate plated like art."
        image={dish}
      />
      <MenuSection />
      <Dishes />
    </>
  );
}
