import { motion } from "framer-motion";
import { Calendar, Users, Clock, MessageCircle, type LucideIcon } from "lucide-react";
import flames from "@/assets/gallery-flames.jpg";

export function Reserve() {
  return (
    <section id="reserve" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={flames} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold">RESERVE</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
            Book a table.
            <br />
            <span className="text-gradient-gold italic font-serif-luxe">Live the night.</span>
          </h2>
          <p className="mt-6 text-cream/70 max-w-md">
            Limited seating, cinematic ambiance. Reserve ahead to secure your preferred evening —
            VIP rooms available on request.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/923000000000"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-background shadow-gold animate-pulse-glow"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </a>
            <a
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
            >
              View Menu
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Reservation request received.");
          }}
          className="glass rounded-2xl p-8 space-y-5"
        >
          <h3 className="font-display text-2xl text-gold">Reserve a Table</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" type="text" placeholder="Your name" required />
            <Field label="Phone" type="tel" placeholder="+92 300 0000000" required />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field icon={Calendar} label="Date" type="date" required />
            <Field icon={Clock} label="Time" type="time" required />
            <Field icon={Users} label="Guests" type="number" placeholder="2" required />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-cream/60">Notes</label>
            <textarea
              rows={3}
              placeholder="Any special requests..."
              className="mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-gold py-4 text-sm font-semibold uppercase tracking-widest text-background shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Reserve Table
          </button>
        </motion.form>
      </div>
    </section>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label: string;
}

function Field({ icon: Icon, label, ...rest }: FieldProps) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-cream/60 flex items-center gap-1.5">
        {Icon && <Icon className="h-3 w-3 text-gold" />} {label}
      </label>
      <input
        {...rest}
        className="mt-2 w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors"
      />
    </div>
  );
}
