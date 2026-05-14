import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import flames from "@/assets/gallery-flames.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — GB Flame & Flavor | Premium Dining Karachi" },
      {
        name: "description",
        content:
          "Step inside GB Flame & Flavor through our cinematic gallery — signature dishes, golden interiors and master chefs at work.",
      },
      { property: "og:title", content: "Gallery — GB Flame & Flavor" },
      { property: "og:description", content: "A taste of GB Flame & Flavor in frames." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="GALLERY"
        title="A taste, in"
        highlight="frames."
        subtitle="Cinematic moments from our kitchen, our dining rooms and the dishes that started it all."
        image={flames}
      />
      <Gallery />
    </>
  );
}
