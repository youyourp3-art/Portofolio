import { Menu } from "lucide-react";
import { nav } from "../data/profile";
import { useLang } from "../context/LangContext";

export default function HUD({ active, onOpenMenu }) {
  const { lang } = useLang();
  const current = nav.find((n) => n.id === active);
  const t = {
    fr: { layers: "Couches", layer: "Couche", loc: "Alger · 36.7538°N 3.0588°E", zoom: "Zoom 12" },
    de: { layers: "Layer", layer: "Layer", loc: "Algier · 36.7538°N 3.0588°E", zoom: "Zoom 12" },
  }[lang];

  return (
    <div className="sticky top-0 z-30 bg-paper/95 backdrop-blur border-b border-line">
      <div className="flex items-center justify-between px-5 md:px-8 py-3 font-mono text-[11px] text-inkfade">
        <button
          onClick={onOpenMenu}
          className="md:hidden flex items-center gap-2 text-ink"
        >
          <Menu size={16} />
          <span className="tracking-widest uppercase">{t.layers}</span>
        </button>
        <div className="hidden md:flex items-center gap-2 tracking-widest uppercase">
          <span className="text-accent">●</span>
          <span>{t.layer} {current?.num}</span>
          <span className="text-line">/</span>
          <span>{current?.label[lang]}</span>
        </div>
        <div className="flex items-center gap-4 tracking-widest uppercase">
          <span className="hidden sm:inline">{t.loc}</span>
          <span>{t.zoom}</span>
        </div>
      </div>
    </div>
  );
}
