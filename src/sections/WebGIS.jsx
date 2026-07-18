import { PageShell, Placeholder } from "../components/PageShell";
import { MediaImage } from "../components/Media";
import { useLang } from "../context/LangContext";

const copy = {
  fr: {
    eyebrow: "Couche 07 — WebGIS", title: "Plateforme WebGIS",
    intro: "Un système que je développe pour gérer et visualiser des données territoriales en ligne — pensé comme un outil, pas comme un simple export de diagnostic.",
    skills: ["React", "Node.js", "SQLite", "API REST"],
    next: "Démonstration",
    h1: "Présentation",
    p1: "La plateforme réunit une base de données relationnelle, une interface d'administration sécurisée et un module de gestion des données territoriales. Elle a été conçue pour rendre un diagnostic territorial consultable et actualisable, plutôt que figé dans un rapport. Le module cartographique interactif (Leaflet / GeoServer / PostGIS) est en cours de développement séparé.",
    h2: "Fonctionnalités",
    features: [
      "Consultation des données territoriales via l'interface publique",
      "Gestion des sections et des attributs par module d'administration",
      "Authentification et séparation espace public / espace de gestion",
      "Visualisation de statistiques et indicateurs territoriaux",
    ],
    ph: "Emplacement réservé — captures de l'interface publique et du tableau de bord",
  },
  de: {
    eyebrow: "Layer 07 — WebGIS", title: "WebGIS-Plattform",
    intro: "Ein System, das ich entwickle, um territoriale Daten online zu verwalten und zu visualisieren — als Werkzeug gedacht, nicht als bloßer Diagnostik-Export.",
    skills: ["React", "Node.js", "SQLite", "REST-API"],
    next: "Demonstration",
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
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("demo")}>
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
    </PageShell>
  );
}
