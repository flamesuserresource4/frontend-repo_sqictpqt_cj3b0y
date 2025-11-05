import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import CategoryNav from "./CategoryNav";
import MenuSection from "./MenuSection";
import FloatingActions from "./FloatingActions";
import {
  Pizza as PizzaIcon,
  Sparkles,
  Utensils,
  Flame,
  IceCream,
  CupSoda,
  Wine,
  GlassWater,
} from "lucide-react";

export default function MenuPage() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const menu = useMemo(
    () => [
      {
        id: "pizze-classiche",
        title: "Pizze Classiche",
        icon: <PizzaIcon className="text-[#E63946]" />,
        items: [
          { name: "Margherita", desc: "Pomodoro San Marzano, fior di latte, basilico e olio evo.", price: "€7,50" },
          { name: "Marinara", desc: "Pomodoro, aglio, origano, basilico: la semplicità che emoziona.", price: "€6,00" },
          { name: "Diavola", desc: "Salame piccante, pomodoro e mozzarella filante.", price: "€8,50" },
          { name: "Capricciosa", desc: "Prosciutto, funghi, carciofi e olive nere.", price: "€9,50" },
          { name: "Quattro Formaggi", desc: "Blend cremoso di formaggi selezionati.", price: "€10,00" },
          { name: "Prosciutto e Funghi", desc: "Classico intramontabile della tradizione.", price: "€9,00" },
        ],
      },
      {
        id: "pizze-speciali",
        title: "Pizze Speciali",
        icon: <Sparkles className="text-[#FFD43B]" />,
        items: [
          { name: "Sorrento", desc: "Pomodorini del piennolo, provola e basilico fresco.", price: "€11,00" },
          { name: "Vesuvio", desc: "'Nduja calabrese, fiordilatte e miele millefiori.", price: "€12,00" },
          { name: "Amalfi", desc: "Zeste di limone, alici del Cantabrico, prezzemolo.", price: "€12,50" },
          { name: "Bufalina", desc: "DOP di bufala, pomodoro e basilico profumatissimo.", price: "€12,00" },
          { name: "Tartufata", desc: "Crema di tartufo, funghi porcini e scaglie di grana.", price: "€14,00" },
        ],
      },
      {
        id: "i-classici",
        title: "I Classici",
        icon: <Utensils className="text-black" />,
        items: [
          { name: "Bruschetta al Pomodoro", desc: "Pane caldo, aglio, pomodoro e olio evo profumato.", price: "€6,50" },
          { name: "Parmigiana", desc: "Melanzane, sugo ricco e cuore filante al forno.", price: "€8,50" },
          { name: "Insalata Caprese", desc: "Mozzarella, pomodori e basilico, freschezza mediterranea.", price: "€8,00" },
        ],
      },
      {
        id: "i-fritti",
        title: "I Fritti",
        icon: <Flame className="text-[#E63946]" />,
        items: [
          { name: "Frittatina di Pasta", desc: "Croccante fuori, cremosa dentro, pura golosità.", price: "€3,00" },
          { name: "Arancino", desc: "Riso allo zafferano, ragù e cuore filante.", price: "€2,50" },
          { name: "Crocchè di Patate", desc: "Patate, provola e pepe, classico da street food.", price: "€2,50" },
        ],
      },
      {
        id: "dolci",
        title: "Dolci",
        icon: <IceCream className="text-[#FFD43B]" />,
        items: [
          { name: "Tiramisù della Casa", desc: "Crema vellutata, savoiardi e cacao amaro.", price: "€5,50" },
          { name: "Delizia al Limone", desc: "Soffice pan di spagna e crema al limone d'Amalfi.", price: "€6,00" },
        ],
      },
      {
        id: "bevande",
        title: "Bevande",
        icon: <CupSoda className="text-black" />,
        items: [
          { name: "Acqua Naturale 0,5L", desc: "Leggera e fresca, perfetta per accompagnare.", price: "€1,50" },
          { name: "Acqua Frizzante 0,5L", desc: "Bollicine delicate per una pausa rinfrescante.", price: "€1,50" },
          { name: "Coca-Cola", desc: "Classica o Zero, ghiacciata.", price: "€3,00" },
          { name: "Aranciata", desc: "Agrumi italiani, profumo d'estate.", price: "€3,00" },
          { name: "Limonata", desc: "Al limone d'Amalfi, vivace e brillante.", price: "€3,00" },
          { name: "Tè Freddo", desc: "Pesca o limone, dolce e dissetante.", price: "€3,00" },
        ],
      },
      {
        id: "vini",
        title: "Vini",
        icon: <Wine className="text-[#E63946]" />,
        items: [
          { name: "Falanghina (calice)", desc: "Bianco profumato, fruttato e minerale.", price: "€5,00" },
          { name: "Aglianico (calice)", desc: "Rosso intenso, tannini eleganti.", price: "€5,50" },
          { name: "Prosecco (calice)", desc: "Bollicine fini e vivaci, aperitivo perfetto.", price: "€4,50" },
        ],
      },
      {
        id: "liquori",
        title: "Liquori",
        icon: <GlassWater className="text-black" />,
        items: [
          { name: "Limoncello", desc: "Infusione di scorze d'Amalfi, dolce e profumato.", price: "€3,00" },
          { name: "Amaro", desc: "Note erbacee e agrumate, finale persistente.", price: "€3,50" },
          { name: "Grappa", desc: "Secca e avvolgente, per intenditori.", price: "€4,00" },
          { name: "Nocino", desc: "Liquore di noci, aromatico e rotondo.", price: "€3,50" },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(menu[0].id);

  const handleSelect = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.pushState) history.pushState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Mediterranean gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-20 -right-10 w-60 h-60 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,212,59,0.25), transparent)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-0 -left-10 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(230,57,70,0.18), transparent)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        />
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[68px]" />

      <CategoryNav
        categories={menu.map((m) => ({ id: m.id, title: m.title, icon: m.icon }))}
        activeId={active}
        onSelect={handleSelect}
      />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        {/* Hero intro */}
        <motion.section
          className="mb-8 sm:mb-10 rounded-3xl border border-black/10 p-6 sm:p-8 bg-white/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
            Il Menù della Pizzeria
          </h2>
          <p className="text-sm sm:text-base text-black/70 max-w-2xl" style={{ fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
            Impasto a lenta lievitazione, ingredienti selezionati e quel tocco partenopeo che scalda il cuore. Scegli tra le nostre pizze classiche, le speciali ispirate alla Costiera e i fritti golosi.
          </p>
        </motion.section>

        <div className="space-y-4 sm:space-y-6">
          {menu.map((section, idx) => (
            <MenuSection
              key={section.id}
              id={section.id}
              title={section.title}
              icon={section.icon}
              items={section.items}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </main>

      <FloatingActions />
    </div>
  );
}
