import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Experience } from "@/components/Experience";
import chef from "@/assets/chef.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — GB Flame & Flavor | Premium Restaurant Karachi" },
      {
        name: "description",
        content:
          "Discover the story, philosophy and master chefs behind GB Flame & Flavor — Karachi's most cinematic Chinese & BBQ dining experience.",
      },
      { property: "og:title", content: "About — GB Flame & Flavor" },
      {
        property: "og:description",
        content: "The story behind Karachi's premium fine-dining destination.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR STORY"
        title="A decade of"
        highlight="flame & flavor."
        subtitle="From a single charcoal grill to Karachi's most cinematic dining destination — crafted by master chefs, served in golden candlelight."
        image={chef}
      />
      <About />
      <Experience />
      <WhyUs />
    </>
  );
}
