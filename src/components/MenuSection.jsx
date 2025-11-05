import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function MenuSection({ id, title, icon, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === `#${id}`) setOpen(true);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [id]);

  return (
    <section id={id} className="scroll-mt-28">
      <motion.header
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between select-none cursor-pointer rounded-2xl border border-black/10 px-4 sm:px-6 py-4 mb-3 bg-white hover:shadow-sm transition-shadow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="text-2xl"
          >
            {icon}
          </motion.span>
          <h2 className="text-xl sm:text-2xl font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>
            {title}
          </h2>
        </div>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </motion.header>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.35 }}
            className="overflow-hidden border-l-2 border-[#FFD43B] pl-4 sm:pl-6"
          >
            {items.map((item, idx) => (
              <motion.li
                key={item.name}
                className="py-3 sm:py-4 border-b border-black/5 last:border-none"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.03 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold leading-tight" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70 max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="shrink-0 rounded-full border border-black/10 px-3 py-1 text-sm font-semibold bg-white hover:bg-[#FFD43B]/60 hover:text-black transition-colors"
                  >
                    {item.price}
                  </motion.span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}
