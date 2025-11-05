import { motion } from "framer-motion";
import { Flame, Pizza, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-10 -left-10 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,212,59,0.28), transparent)" }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="absolute bottom-0 -right-10 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(230,57,70,0.18), transparent)" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs sm:text-sm text-black/70">
              <Sparkles className="w-4 h-4 text-[#FFD43B]" />
              Dal cuore di Napoli
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Impasto vivo, forno a legna, tradizione partenopea
            </h1>
            <p className="mt-3 text-sm sm:text-base text-black/70 max-w-xl" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
              Ogni pizza racconta la nostra terra: ingredienti selezionati, lievitazione lenta e cottura perfetta. Benvenuti alla Pizzeria Partenopea.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium border border-black/10 shadow-sm transition-colors bg-[#FFD43B] text-black hover:bg-[#E63946] hover:text-white"
              >
                Scopri il Menù
              </Link>
              <a
                href="#prenota"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-black/10 hover:bg-black/5 transition-colors"
              >
                <Flame className="w-4 h-4 text-[#E63946]" />
                Prenota un tavolo
              </a>
            </div>
          </div>
          <div className="relative">
            <motion.div
              className="mx-auto w-full max-w-sm sm:max-w-md aspect-square rounded-3xl border border-black/10 bg-white/70 backdrop-blur flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                className="p-6 rounded-full bg-[#FFD43B]/30"
              >
                <Pizza className="w-20 h-20 sm:w-28 sm:h-28 text-[#E63946]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
