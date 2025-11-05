import { motion } from "framer-motion";
import { Leaf, Timer, Star } from "lucide-react";

const items = [
  {
    icon: <Leaf className="w-5 h-5 text-[#2f855a]" />,
    title: "Ingredienti Selezionati",
    desc: "Pomodoro San Marzano, fiordilatte fresco, olio evo campano.",
  },
  {
    icon: <Timer className="w-5 h-5 text-[#E63946]" />,
    title: "Lievitazione Lenta",
    desc: "Impasto maturato fino a 48 ore per leggerezza e digeribilità.",
  },
  {
    icon: <Star className="w-5 h-5 text-[#FFD43B]" />,
    title: "Forno a Legna",
    desc: "Cottura autentica che dona croccantezza e profumo unico.",
  },
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            className="rounded-2xl border border-black/10 p-5 bg-white/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <div className="flex items-center gap-2">
              {it.icon}
              <h3 className="font-medium" style={{ fontFamily: 'Poppins, system-ui' }}>{it.title}</h3>
            </div>
            <p className="mt-2 text-sm text-black/70" style={{ fontFamily: 'Poppins, system-ui' }}>{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
