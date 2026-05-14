import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reserve } from "@/components/Reserve";
import interior from "@/assets/interior-1.jpg";

export const Route = createFileRoute("/reservation")({
  component: ReservationPage,
  head: () => ({
    meta: [
      { title: "Reserve a Table — GB Flame & Flavor Karachi" },
      { name: "description", content: "Book your table at GB Flame & Flavor — Karachi's premium Chinese & BBQ restaurant. WhatsApp reservations available 24/7." },
      { property: "og:title", content: "Reserve a Table — GB Flame & Flavor" },
      { property: "og:description", content: "Limited seating. Cinematic ambiance. Reserve your evening." },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
});

function ReservationPage() {
  return (
    <>
      <PageHero
        eyebrow="RESERVATIONS"
        title="Reserve your"
        highlight="evening."
        subtitle="Limited seating, cinematic ambiance, VIP rooms on request. Secure your table in seconds."
        image={interior}
      />
      <Reserve />
    </>
  );
}
