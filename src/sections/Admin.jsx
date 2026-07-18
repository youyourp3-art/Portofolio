import { PageShell, Placeholder } from "../components/PageShell";
import { useLang } from "../context/LangContext";

const modules = {
  fr: [
    { title: "Module 1 — Portfolio QGIS", items: ["Projets", "Catégories", "Descriptions", "Technologies", "Images", "Captures QGIS", "Captures de mise en page", "Ordre d'affichage"] },
    { title: "Module 2 — Projet universitaire", items: ["Démographie", "Cartes", "Équipements", "Statistiques", "Stratégie", "Budget", "Indicateurs"] },
  ],
  de: [
    { title: "Modul 1 — QGIS-Portfolio", items: ["Projekte", "Kategorien", "Beschreibungen", "Technologien", "Bilder", "QGIS-Screenshots", "Layout-Screenshots", "Anzeigereihenfolge"] },
    { title: "Modul 2 — Universitätsprojekt", items: ["Demografie", "Karten", "Einrichtungen", "Statistiken", "Strategie", "Budget", "Indikatoren"] },
  ],
};

const copy = {
  fr: {
    eyebrow: "Couche 10 — Administration", title: "Administration",
    intro: "Le tableau de bord gère deux espaces de contenu indépendants, l'un pour le portfolio, l'autre pour le projet universitaire.",
    skills: ["CRUD", "Gestion de contenu", "Architecture applicative"], next: "Contact",
    ph: "Interface d'administration en développement — accès réservé",
  },
  de: {
    eyebrow: "Layer 10 — Administration", title: "Administration",
    intro: "Das Dashboard verwaltet zwei unabhängige Inhaltsbereiche — einen für das Portfolio, einen für das Universitätsprojekt.",
    skills: ["CRUD", "Content-Management", "Anwendungsarchitektur"], next: "Kontakt",
    ph: "Administrationsoberfläche in Entwicklung — Zugang eingeschränkt",
  },
};

export default function Admin({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("contact")}>
      <div className="grid md:grid-cols-2 gap-4">
        {modules[lang].map((m) => (
          <div key={m.title} className="border border-line bg-paper2 p-5">
            <div className="font-display text-base text-ink mb-3">{m.title}</div>
            <ul className="space-y-1.5">
              {m.items.map((i) => (
                <li key={i} className="text-sm text-inkfade flex items-center gap-2">
                  <span className="w-1 h-1 bg-teal shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Placeholder label={c.ph} />
    </PageShell>
  );
}
