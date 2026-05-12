import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#dishes", label: "Dishes" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reserve", label: "Reserve" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="h-7 w-7 text-gold transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 blur-md bg-gold/40" />
          </div>
          <div className="font-cinzel text-sm md:text-base tracking-[0.2em] text-cream">
            GB <span className="text-gradient-gold">FLAME</span> & FLAVOR
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm uppercase tracking-widest text-cream/80 transition-colors hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reserve"
          className="hidden lg:inline-flex items-center rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background hover:shadow-gold"
        >
          Reserve
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass mx-6 mt-3 rounded-xl p-6"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-cream hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
