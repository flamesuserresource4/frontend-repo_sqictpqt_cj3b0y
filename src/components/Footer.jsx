export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-black/70" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
          © {new Date().getFullYear()} Pizzeria Partenopea — Napoli, Italia
        </p>
        <div className="flex items-center gap-3 text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-[#FFD43B]" />
          <span className="inline-block w-3 h-3 rounded-full bg-[#E63946]" />
          <span className="text-black/60">Colori della Costiera Amalfitana</span>
        </div>
      </div>
    </footer>
  );
}
