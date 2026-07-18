import { PageShell, Placeholder } from "../components/PageShell";
import { MediaImage } from "../components/Media";
import { useLang } from "../context/LangContext";

const copy = {
  fr: {
    eyebrow: "Couche 06 — Portfolio QGIS", title: "Portfolio QGIS",
    intro: "Mes réalisations cartographiques personnelles — chaque fiche détaille le contexte, les données et le traitement effectué sous QGIS.",
    skills: ["QGIS", "Cartographie", "Symbologie", "Mise en page cartographique"],
    next: "WebGIS",
    p1: "PROJET 01", t1: "Diagnostic territorial — Djelfa", d1: "Relevé de terrain, analyse socio-économique et spatiale, formulation de recommandations d'aménagement.",
    p2: "PROJET 02", t2: "Étude de terrain — Sétif", d2: "Analyse du réseau viaire et des espaces publics, évaluation de la conformité aux règlements d'urbanisme.",
    cap: "Capture QGIS à ajouter",
    add: "+ Ajouter un projet — fiche : contexte / objectif / données / traitement / résultat",
  },
  de: {
    eyebrow: "Layer 06 — QGIS-Portfolio", title: "QGIS-Portfolio",
    intro: "Meine persönlichen kartografischen Arbeiten — jede Karte zeigt Kontext, Daten und die in QGIS durchgeführte Verarbeitung.",
    skills: ["QGIS", "Kartografie", "Symbolik", "Kartenlayout"],
    next: "WebGIS",
    p1: "PROJEKT 01", t1: "Territoriale Diagnostik — Djelfa", d1: "Geländeerhebung, sozioökonomische und räumliche Analyse, Formulierung von Planungsempfehlungen.",
    p2: "PROJEKT 02", t2: "Geländestudie — Sétif", d2: "Analyse des Straßennetzes und der öffentlichen Räume, Bewertung der Konformität mit städtebaulichen Vorschriften.",
    cap: "QGIS-Screenshot hinzufügen",
    add: "+ Projekt hinzufügen — Karte: Kontext / Ziel / Daten / Verarbeitung / Ergebnis",
  },
};

export default function PortfolioQGIS({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("webgis")}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-line bg-paper2 p-5">
          <div className="font-mono text-[10px] text-line mb-2">{c.p1}</div>
          <div className="font-display text-lg text-ink mb-2">{c.t1}</div>
          <p className="text-sm text-inkfade leading-relaxed mb-4">{c.d1}</p>
          <MediaImage mediaKey="qgisDjelfa" alt={c.t1} fallback={c.cap} />
        </div>
        <div className="border border-line bg-paper2 p-5">
          <div className="font-mono text-[10px] text-line mb-2">{c.p2}</div>
          <div className="font-display text-lg text-ink mb-2">{c.t2}</div>
          <p className="text-sm text-inkfade leading-relaxed mb-4">{c.d2}</p>
          <MediaImage mediaKey="qgisSetif" alt={c.t2} fallback={c.cap} />
        </div>
        <div className="border border-dashed border-line p-5 flex items-center justify-center text-center sm:col-span-2">
          <span className="font-mono text-xs text-inkfade">{c.add}</span>
        </div>
      </div>
    </PageShell>
  );
}
