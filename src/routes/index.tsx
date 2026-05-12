import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Dishes } from "@/components/Dishes";
import { Experience } from "@/components/Experience";
import { WhyUs } from "@/components/WhyUs";
import { MenuSection } from "@/components/Menu";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Reserve } from "@/components/Reserve";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GB Flame & Flavor — Premium Chinese & BBQ Restaurant in Karachi" },
      { name: "description", content: "Cinematic fine-dining in Karachi. Signature Chinese, BBQ, burgers and pasta. Reserve a luxury dining experience at GB Flame & Flavor." },
      { name: "keywords", content: "Best Chinese Food Karachi, Premium Dining Karachi, BBQ Restaurant, Family Restaurant Karachi, Fine Dining" },
      { property: "og:title", content: "GB Flame & Flavor — Where Every Bite Feels Like Luxury" },
      { property: "og:description", content: "Cinematic fine-dining in Karachi. Signature Chinese, BBQ and modern fusion." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Dishes />
      <Experience />
      <WhyUs />
      <MenuSection />
      <Testimonials />
      <Gallery />
      <Reserve />
      <Contact />
      <Footer />
    </main>
  );
}
