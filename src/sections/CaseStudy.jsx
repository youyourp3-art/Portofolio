import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { useLang } from "../context/LangContext";

import Accueil from "./case-study/Accueil";
import Demographie from "./case-study/Demographie";
import Cartographie from "./case-study/Cartographie";
import Equipements from "./case-study/Equipements";
import Afom from "./case-study/Afom";
import Strategie from "./case-study/Strategie";
import Dashboard from "./case-study/Dashboard";

const subPages = [
  { id: "accueil", label: "Accueil", Comp: Accueil },
  { id: "demographie", label: "Démographie", Comp: Demographie },
  { id: "cartographie", label: "Cartographie", Comp: Cartographie },
  { id: "equipements", label: "Équipements", Comp: Equipements },
  { id: "afom", label: "AFOM", Comp: Afom },
  { id: "strategie", label: "Stratégie", Comp: Strategie },
  { id: "dashboard", label: "Dashboard", Comp: Dashboard },
];

const copy = {
  fr: {
    eyebrow: "Couche 09 — Étude de cas", title: "Étude de cas — Aïn Bénian",
    skills: ["Diagnostic territorial", "SIG appliqué", "Analyse spatiale"],
    next: "Administration",
    note: "Contenu ci-dessous : synthèse du rapport académique USTHB, reste en français.",
  },
  de: {
    eyebrow: "Layer 09 — Fallstudie", title: "Fallstudie — Aïn Bénian",
    skills: ["Territoriale Diagnostik", "Angewandtes GIS", "Räumliche Analyse"],
    next: "Administration",
    note: "Inhalt unten: Zusammenfassung des akademischen USTHB-Berichts, bleibt auf Französisch.",
  },
};

export default function CaseStudy({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  const [sub, setSub] = useState("accueil");
  const Active = subPages.find((s) => s.id === sub)?.Comp ?? Accueil;

  return (
    <PageShell
      eyebrow={c.eyebrow}
      title={c.title}
      skills={c.skills}
      next={c.next}
      onNext={() => onSelect("admin")}
    >
      {/* Ce chapô reste toujours en allemand : il explique à un lecteur germanophone
          pourquoi le contenu qui suit est en français. Il ne suit pas le toggle FR/DE. */}
      <div className="border-l-2 border-accent bg-paper2 p-5 md:p-6">
        <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
          Deutsch
        </div>
        <p className="text-inkfade leading-relaxed">
          Dieses Kapitel zeigt eine Fallstudie aus meinem Universitätsprojekt
          an der USTHB (Algier): eine vollständige territoriale Diagnostik
          der Gemeinde Aïn Bénian, erarbeitet im Rahmen meines Studiums der
          Stadt- und Raumplanung. Die Inhalte sind auf Französisch verfasst,
          da sie Teil eines akademischen Berichts sind, der auf lokalen
          Vorschriften und Verwaltungsdokumenten basiert. Die Fallstudie
          dient hier als praktischer Nachweis der Funktionen meines
          WebGIS-Systems — von der Datenerfassung über die räumliche
          Analyse bis zur kartografischen Visualisierung — und zeigt
          konkret, wie das im Abschnitt WebGIS beschriebene System in einem
          realen Planungskontext eingesetzt wird.
        </p>
      </div>

      <div>
        <div className="font-mono text-[10px] tracking-widest uppercase text-inkfade mb-4">
          {c.note}
        </div>

        {/* Sous-navigation — les 7 pages réelles du diagnostic USTHB */}
        <div className="flex flex-wrap gap-1.5 border-b border-line pb-4 mb-8">
          {subPages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSub(s.id)}
              className={`font-mono text-[11px] uppercase tracking-wide px-3 py-2 border transition-colors ${
                sub === s.id
                  ? "bg-ink text-paper2 border-ink"
                  : "border-line text-inkfade hover:border-accent hover:text-accent"
              }`}
            >
              {String(i + 1).padStart(2, "0")} {s.label}
            </button>
          ))}
        </div>

        <Active />
      </div>
    </PageShell>
  );
}
