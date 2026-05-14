import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923000000000?text=Hello%20GB%20Flame%20%26%20Flavor%2C%20I%27d%20like%20to%20reserve%20a%20table."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 ring-2 ring-white/20 transition-transform hover:scale-110 animate-pulse-glow"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
