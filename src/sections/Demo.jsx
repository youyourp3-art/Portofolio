import { PageShell, Placeholder } from "../components/PageShell";
import { useLang } from "../context/LangContext";

const copy = {
  fr: {
    eyebrow: "Couche 08 — Démonstration", title: "Démonstration",
    intro: "Aperçu visuel du fonctionnement de la plateforme, étape par étape.",
    skills: ["UX applicative", "Gestion de données"],
    next: "Étude de cas — Aïn Bénian",
    flows: ["Connexion", "Navigation", "Consultation d'une fiche", "Ajout d'une donnée", "Modification d'une donnée", "Suppression", "Recherche et filtres"],
    cap: "Capture / GIF à ajouter",
  },
  de: {
    eyebrow: "Layer 08 — Demonstration", title: "Demonstration",
    intro: "Visueller Überblick über die Funktionsweise der Plattform, Schritt für Schritt.",
    skills: ["Anwendungs-UX", "Datenverwaltung"],
    next: "Fallstudie — Aïn Bénian",
    flows: ["Anmeldung", "Navigation", "Ansicht eines Datensatzes", "Datensatz hinzufügen", "Datensatz bearbeiten", "Löschen", "Suche und Filter"],
    cap: "Screenshot / GIF hinzufügen",
  },
};

export default function Demo({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("etude-cas")}>
      <div className="grid sm:grid-cols-2 gap-4">
        {c.flows.map((f) => (
          <div key={f} className="border border-line bg-paper2 p-4">
            <div className="font-display text-sm text-ink mb-2">{f}</div>
            <Placeholder label={c.cap} />
          </div>
        ))}
      </div>
    </PageShell>
  );
}
