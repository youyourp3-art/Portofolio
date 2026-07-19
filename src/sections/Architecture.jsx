import { PageShell, Placeholder } from "../components/PageShell";
import { useLang } from "../context/LangContext";
import archFr from "../content/architecture.json";

const layersDe = [
  { label: "Frontend", detail: "React + Vite — öffentliche Oberfläche und Administrations-Dashboard." },
  { label: "REST-API", detail: "Express.js — Authentifizierungs- und Verwaltungsrouten für territoriale Daten." },
  { label: "Backend", detail: "Node.js — Geschäftslogik, Zugriffskontrolle, Anfrageverarbeitung." },
  { label: "Datenbank", detail: "SQLite — relationale Speicherung von Sektionen, Karten, Demografie und Einrichtungen." },
  { label: "WebGIS", detail: "Kartenmodul (Leaflet, GeoServer, PostGIS) in separater Entwicklung, noch nicht in das aktuelle Backend integriert." },
];

const copy = {
  fr: {
    eyebrow: "Couche 05 — Architecture", title: "Architecture système",
    intro: archFr.intro,
    skills: ["API REST", "Architecture applicative", "Authentification", "CRUD"],
    next: "Portfolio QGIS",
    h1: archFr.securityTitle,
    p1: archFr.securityText,
    ph: "Emplacement réservé — schéma détaillé de circulation des données",
  },
  de: {
    eyebrow: "Layer 05 — Architektur", title: "Systemarchitektur",
    intro: "Die technische Struktur des Systems, das ich für die Verwaltung territorialer Daten entwickle.",
    skills: ["REST-API", "Anwendungsarchitektur", "Authentifizierung", "CRUD"],
    next: "QGIS-Portfolio",
    h1: "Sicherheit und Zugriff",
    p1: "Die Administrationsoberfläche ist von der öffentlichen Ansicht getrennt und durch Authentifizierung geschützt, sodass die Ansicht der Kartendaten frei bleibt, während ihre Bearbeitung kontrolliert wird.",
    ph: "Platzhalter — detailliertes Schema des Datenflusses",
  },
};

export default function Architecture({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  const layers = lang === "fr" ? archFr.layers : layersDe;
  return (
    <PageShell
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      skills={c.skills}
      next={c.next}
      onNext={() => onSelect("qgis")}
    >
      <div className="border border-line bg-paper2 divide-y divide-line">
        {layers.map((l, i) => (
          <div key={l.label} className="flex items-start gap-4 p-5">
            <span className="font-mono text-xs text-line mt-1 w-6 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="font-display text-base text-ink">{l.label}</div>
              <div className="text-sm text-inkfade mt-1">{l.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h1}</h2>
        <p className="text-inkfade leading-relaxed">{c.p1}</p>
      </section>

      <Placeholder label={c.ph} />
    </PageShell>
  );
}
