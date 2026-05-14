import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import interior from "@/assets/interior-1.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — GB Flame & Flavor | Karachi" },
      { name: "description", content: "Visit, call or WhatsApp GB Flame & Flavor in DHA Phase 6, Karachi. We're open seven nights a week." },
      { property: "og:title", content: "Contact — GB Flame & Flavor" },
      { property: "og:description", content: "Find us in DHA Phase 6, Karachi." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Find"
        highlight="us."
        subtitle="DHA Phase 6, Karachi. Open every evening for dine-in, takeaway and private events."
        image={interior}
      />
      <Contact />
    </>
  );
}
