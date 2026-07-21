import { PageShell, Placeholder } from "../components/PageShell";
import { Attachments } from "../components/Attachments";
import { useLang } from "../context/LangContext";
import demoFr from "../content/demo.json";

const flowsDe = ["Anmeldung", "Navigation", "Ansicht eines Datensatzes", "Datensatz hinzufügen", "Datensatz bearbeiten", "Löschen", "Suche und Filter"];

const copy = {
  fr: {
    eyebrow: "Couche 08 — Démonstration", title: "Démonstration",
    intro: demoFr.intro,
    skills: ["UX applicative", "Gestion de données"],
    next: "Étude de cas — Aïn Bénian",
    cap: "Capture / GIF à ajouter",
  },
  de: {
    eyebrow: "Layer 08 — Demonstration", title: "Demonstration",
    intro: "Visueller Überblick über die Funktionsweise der Plattform, Schritt für Schritt.",
    skills: ["Anwendungs-UX", "Datenverwaltung"],
    next: "Fallstudie — Aïn Bénian",
    cap: "Screenshot / GIF hinzufügen",
  },
};

export default function Demo({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  const flows = lang === "fr"
    ? demoFr.flows
    : demoFr.flows.map((f, i) => ({ ...f, label: flowsDe[i] || f.label }));
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro} skills={c.skills} next={c.next} onNext={() => onSelect("etude-cas")}>
      <div className="grid sm:grid-cols-2 gap-4">
        {flows.map((f) => (
          <div key={f.label} className="border border-line bg-paper2 p-4">
            <div className="font-display text-sm text-ink mb-2">{f.label}</div>
            {f.image ? (
              <img src={f.image} alt={f.label} className="w-full h-auto border border-line" />
            ) : (
              <Placeholder label={c.cap} />
            )}
          </div>
        ))}
      </div>
      <Attachments items={demoFr.attachments} title="Documents et captures complémentaires" />
    </PageShell>
  );
}
