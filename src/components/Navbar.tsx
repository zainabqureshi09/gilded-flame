import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          scrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <Flame className="h-6 w-6 md:h-7 md:w-7 text-gold transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 blur-md bg-gold/40" />
            </div>
            <div className="font-cinzel text-[11px] md:text-sm tracking-[0.18em] md:tracking-[0.2em] text-cream whitespace-nowrap">
              GB <span className="text-gradient-gold">FLAME</span> & FLAVOR
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  className="relative text-xs uppercase tracking-widest text-cream/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/reservation"
            className="hidden lg:inline-flex items-center rounded-full border border-gold/60 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-background hover:shadow-gold"
          >
            Reserve
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gold p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[85] lg:hidden bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-7 text-center">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      activeProps={{ className: "text-gold" }}
                      className="font-display text-3xl tracking-wide text-cream hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Link
                    to="/reservation"
                    className="inline-flex items-center rounded-full bg-gradient-gold px-8 py-3 text-xs font-semibold uppercase tracking-widest text-background shadow-gold"
                  >
                    Reserve a Table
                  </Link>
                </motion.li>
              </ul>
            </div>
            <div className="pb-10 text-center text-[10px] uppercase tracking-[0.3em] text-cream/40">
              GB Flame & Flavor · Karachi
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
