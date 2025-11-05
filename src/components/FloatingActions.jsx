import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, QrCode } from "lucide-react";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ type: "tween", duration: 0.25 }}
        className="fixed bottom-5 right-5 z-40 rounded-full p-3 sm:p-3.5 bg-[#E63946] text-white shadow-lg hover:bg-[#FFD43B] hover:text-black"
        aria-label="Torna su"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div id="qr" className="mx-auto max-w-6xl px-4 sm:px-6 mt-16">
        <div className="rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5">
          <div className="p-4 rounded-xl bg-black/5">
            <QrCode className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>
              QR code per i tavoli
            </h3>
            <p className="text-sm sm:text-base text-black/70" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
              Integra facilmente questo menù sul sito o sui tavoli con un QR code. Copia e condividi questo link:
            </p>
            <div className="mt-3 flex items-center gap-2">
              <code className="text-xs sm:text-sm bg-black/5 px-2 py-1 rounded">{typeof window !== 'undefined' ? window.location.href : ''}</code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
