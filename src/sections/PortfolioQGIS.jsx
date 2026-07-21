import { PageShell, Placeholder } from "../components/PageShell";
import { MediaImage } from "../components/Media";
import { Attachments } from "../components/Attachments";
import { useLang } from "../context/LangContext";
import qgisFr from "../content/qgis.json";

const projectsDe = [
  { tag: "PROJEKT 01", title: "Territoriale Diagnostik — Djelfa", desc: "Geländeerhebung, sozioökonomische und räumliche Analyse, Formulierung von Planungsempfehlungen.", mediaKey: "qgisDjelfa" },
  { tag: "PROJEKT 02", title: "Geländestudie — Sétif", desc: "Analyse des Straßennetzes und der öffentlichen Räume, Bewertung der Konformität mit städtebaulichen Vorschriften.", mediaKey: "qgisSetif" },
];

const copy = {
  fr: {
    eyebrow: "Couche 06 — Portfolio QGIS", title: "Portfolio QGIS",
    intro: qgisFr.intro,
    skills: ["QGIS", "Cartographie", "Symbologie", "Mise en page cartographique"],
    next: "WebGIS",
    cap: "Capture QGIS à ajouter",
    add: qgisFr.addNote,
  },
  de: {
    eyebrow: "Layer 06 — QGIS-Portfolio", title: "QGIS-Portfolio",
    intro: "Meine persönlichen kartografischen Arbeiten — jede Karte zeigt Kontext, Daten und die in QGIS durchgeführte Verarbeitung.",
    skills: ["QGIS", "Kartografie", "Symbolik", "Kartenlayout"],
    next: "WebGIS",
    cap: "QGIS-Screenshot hinzufügen",
    add: "+ Projekt hinzufügen — Karte: Kontext / Ziel / Daten / Verarbeitung / Ergebnis",
  },
};

export default function PortfolioQGIS({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  const projects = lang === "fr" ? qgisFr.projects : projectsDe;
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("webgis")}>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.mediaKey} className="border border-line bg-paper2 p-5">
            <div className="font-mono text-[10px] text-line mb-2">{p.tag}</div>
            <div className="font-display text-lg text-ink mb-2">{p.title}</div>
            <p className="text-sm text-inkfade leading-relaxed mb-4">{p.desc}</p>
            <MediaImage mediaKey={p.mediaKey} alt={p.title} fallback={c.cap} />
          </div>
        ))}
        <div className="border border-dashed border-line p-5 flex items-center justify-center text-center sm:col-span-2">
          <span className="font-mono text-xs text-inkfade">{c.add}</span>
        </div>
      </div>
      <Attachments items={qgisFr.attachments} title="Documents et captures complémentaires" />
    </PageShell>
  );
}
