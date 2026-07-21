import { PageShell } from "../components/PageShell";
import { MediaImage } from "../components/Media";
import { useLang } from "../context/LangContext";
import webgisFr from "../content/webgis.json";
import { Attachments } from "../components/Attachments";

const copy = {
  fr: {
    eyebrow: "Couche 07 — WebGIS", title: "Plateforme WebGIS",
    intro: webgisFr.intro,
    skills: ["React", "Node.js", "SQLite", "API REST"],
    next: "Étude de cas — Aïn Bénian",
    h1: webgisFr.sectionTitle,
    p1: webgisFr.sectionText,
    h2: webgisFr.featuresTitle,
    features: webgisFr.features,
    ph: "Emplacement réservé — captures de l'interface publique et du tableau de bord",
  },
  de: {
    eyebrow: "Layer 07 — WebGIS", title: "WebGIS-Plattform",
    intro: "Ein System, das ich entwickle, um territoriale Daten online zu verwalten und zu visualisieren — als Werkzeug gedacht, nicht als bloßer Diagnostik-Export.",
    skills: ["React", "Node.js", "SQLite", "REST-API"],
    next: "Fallstudie — Aïn Bénian",
    h1: "Übersicht",
    p1: "Die Plattform vereint eine relationale Datenbank, eine gesicherte Administrationsoberfläche und ein Modul zur Verwaltung territorialer Daten. Sie wurde konzipiert, um eine territoriale Diagnostik abrufbar und aktualisierbar zu machen, statt sie in einem starren Bericht zu belassen. Das interaktive Kartenmodul (Leaflet / GeoServer / PostGIS) befindet sich in separater Entwicklung.",
    h2: "Funktionen",
    features: [
      "Abruf territorialer Daten über die öffentliche Oberfläche",
      "Verwaltung von Sektionen und Attributen über das Administrationsmodul",
      "Authentifizierung und Trennung von öffentlichem und Verwaltungsbereich",
      "Visualisierung von Statistiken und territorialen Indikatoren",
    ],
    ph: "Platzhalter — Screenshots der öffentlichen Oberfläche und des Dashboards",
  },
};

export default function WebGIS({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("etude-cas")}>
      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h1}</h2>
        <p className="text-inkfade leading-relaxed">{c.p1}</p>
      </section>
      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h2}</h2>
        <ul className="space-y-2">
          {c.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-inkfade">
              <span className="w-1.5 h-1.5 mt-2 bg-accent shrink-0" />
              <span className="text-sm leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>
      <MediaImage mediaKey="webgisScreen" alt="Interface WebGIS" fallback={c.ph} />
      <Attachments items={webgisFr.attachments} title="Documents et captures complémentaires" />
    </PageShell>
  );
}
