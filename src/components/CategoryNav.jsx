import { motion } from "framer-motion";

export default function CategoryNav({ categories, activeId, onSelect }) {
  return (
    <nav className="sticky top-[68px] z-40 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 overflow-x-auto">
        <ul className="flex gap-2 sm:gap-3 py-3 min-w-max">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onSelect(cat.id)}
                className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                  activeId === cat.id
                    ? "border-[#E63946] text-black bg-[#FFD43B]/50"
                    : "border-black/10 text-black hover:bg-black/5"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm font-medium" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>{cat.title}</span>
                {activeId === cat.id && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#FFD43B]/40"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
