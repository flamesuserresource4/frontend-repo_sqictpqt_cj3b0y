import { motion } from "framer-motion";
import { Pizza, QrCode, Home as HomeIcon, LayoutGrid } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const onMenuPage = location.pathname.startsWith("/menu");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to={onMenuPage ? "/menu" : "/"} className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="p-2 rounded-full bg-[#FFD43B]/30"
          >
            <Pizza className="text-[#E63946]" />
          </motion.div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Pizzeria Partenopea
            </h1>
            <p className="text-xs sm:text-sm text-black/60" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
              Autentica tradizione napoletana
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to={onMenuPage ? "/" : "/menu"}
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-black/10 shadow-sm transition-colors ${onMenuPage ? 'bg-[#FFD43B] text-black hover:bg-[#E63946] hover:text-white' : 'bg-[#E63946] text-white hover:bg-[#FFD43B] hover:text-black'}`}
          >
            {onMenuPage ? <HomeIcon className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
            {onMenuPage ? "Home" : "Menù"}
          </Link>
          <a
            href="#qr"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium border border-black/10 hover:bg-black/5 transition-colors"
            aria-label="QR code tavolo"
          >
            <QrCode className="w-4 h-4" />
            <span className="hidden sm:inline">QR tavolo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
