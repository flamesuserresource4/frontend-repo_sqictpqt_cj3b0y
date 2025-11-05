import HomeHero from "./HomeHero";
import Highlights from "./Highlights";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Spacer for fixed header */}
      <div className="h-[68px]" />
      <HomeHero />
      <Highlights />
      <section id="prenota" className="mx-auto max-w-6xl px-4 sm:px-6 pb-12">
        <div className="rounded-2xl border border-black/10 p-6 sm:p-8 bg-white/80 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ti aspettiamo questa sera
          </h3>
          <p className="mt-2 text-sm sm:text-base text-black/70" style={{ fontFamily: 'Poppins, system-ui' }}>
            Prenota il tuo tavolo o ordina d'asporto. Il profumo del forno a legna è già nell'aria.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="tel:+3900000000" className="rounded-full px-5 py-2.5 text-sm font-medium border border-black/10 bg-[#E63946] text-white hover:bg-[#FFD43B] hover:text-black transition-colors">
              Chiama ora
            </a>
            <a href="mailto:prenotazioni@pizzeriapartenopea.it" className="rounded-full px-4 py-2 text-sm font-medium border border-black/10 hover:bg-black/5 transition-colors">
              Scrivici
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
