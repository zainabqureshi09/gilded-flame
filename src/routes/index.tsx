import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Dishes } from "@/components/Dishes";
import { Experience } from "@/components/Experience";
import { WhyUs } from "@/components/WhyUs";
import { Reserve } from "@/components/Reserve";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GB Flame & Flavor — Premium Chinese & BBQ Restaurant in Karachi" },
      {
        name: "description",
        content:
          "Cinematic fine-dining in Karachi. Signature Chinese, BBQ, burgers and pasta. Reserve a luxury dining experience at GB Flame & Flavor.",
      },
      {
        name: "keywords",
        content:
          "Best Chinese Food Karachi, Premium Dining Karachi, BBQ Restaurant, Family Restaurant Karachi, Fine Dining",
      },
      { property: "og:title", content: "GB Flame & Flavor — Where Every Bite Feels Like Luxury" },
      {
        property: "og:description",
        content: "Cinematic fine-dining in Karachi. Signature Chinese, BBQ and modern fusion.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Dishes />
      <Experience />
      <WhyUs />
      <Reserve />
    </>
  );
}
