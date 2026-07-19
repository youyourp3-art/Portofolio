import { PageShell } from "../components/PageShell";
import { useLang } from "../context/LangContext";
import skillsContentFr from "../content/skills.json";

const domainsDe = [
  { label: "SIG", de: "GIS" }, // kept for label translation mapping below
];

const copy = {
  fr: { eyebrow: "Couche 03 — Compétences", title: "Compétences", intro: skillsContentFr.intro, next: "Technologies" },
  de: { eyebrow: "Layer 03 — Kompetenzen", title: "Kompetenzen", intro: "Neun Bereiche, von der Rohdatenerhebung bis zur Umsetzung in einem Anwendungssystem.", next: "Technologien" },
};

const domainLabelsDe = {
  "SIG": "GIS",
  "Cartographie": "Kartografie",
  "Développement web": "Webentwicklung",
  "Développement WebGIS": "WebGIS-Entwicklung",
  "Bases de données": "Datenbanken",
  "Analyse spatiale": "Räumliche Analyse",
  "Géotraitement": "Geoverarbeitung",
  "Gestion de projet": "Projektmanagement",
  "Aménagement urbain": "Stadtplanung",
};
const domainDescDe = {
  "SIG": "Verarbeitung räumlicher Daten, Layerverwaltung, räumliche und attributive Abfragen in QGIS.",
  "Cartographie": "Symbolik, Kartenlayout, Erstellung thematischer Karten für territoriale Diagnoseberichte.",
  "Développement web": "Aufbau von Frontend-Oberflächen und Backend-APIs für die Verwaltung territorialer Daten.",
  "Développement WebGIS": "Konzeption eines Systems zur Online-Visualisierung und -Verwaltung von Geodaten — das Kartenmodul (Leaflet/GeoServer/PostGIS) befindet sich derzeit in separater Entwicklung.",
  "Bases de données": "Modellierung und Abfrage relationaler Datenbanken.",
  "Analyse spatiale": "Multikriterienanalyse, Netzwerkanalyse, Verarbeitung von Fernerkundungsdaten.",
  "Géotraitement": "Automatisierung georäumlicher Verarbeitungsketten mit Python-Skripten.",
  "Gestion de projet": "Strukturierung akademischer Projekte zur territorialen Diagnostik, von der Datenerhebung bis zur Präsentation.",
  "Aménagement urbain": "Territoriale Diagnostik, Auswertung von Vorschriften, Formulierung von Planungsempfehlungen.",
};

export default function Skills({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  const domains = skillsContentFr.domains.map((d) => ({
    label: lang === "fr" ? d.label : (domainLabelsDe[d.label] || d.label),
    desc: lang === "fr" ? d.desc : (domainDescDe[d.label] || d.desc),
    tools: d.tools,
  }));
  return (
    <PageShell
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      skills={domains.map((d) => d.label)}
      next={c.next}
      onNext={() => onSelect("technologies")}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {domains.map((d, i) => (
          <div key={d.label} className="border border-line bg-paper2 p-5">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-lg text-ink">{d.label}</h3>
              <span className="font-mono text-[10px] text-line">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm text-inkfade leading-relaxed mb-3">
              {d.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {d.tools.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-1 border border-line text-teal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
