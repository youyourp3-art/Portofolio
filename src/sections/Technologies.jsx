import { PageShell } from "../components/PageShell";
import { techGroups } from "../data/profile";
import { useLang } from "../context/LangContext";

const copy = {
  fr: {
    eyebrow: "Couche 04 — Technologies", title: "Technologies",
    intro: "La chaîne d'outils utilisée pour passer de la donnée géospatiale brute à une plateforme WebGIS fonctionnelle.",
    skills: ["Stack technique", "SIG appliqué", "Développement full-stack"],
    next: "Architecture", dev: "en développement",
  },
  de: {
    eyebrow: "Layer 04 — Technologien", title: "Technologien",
    intro: "Die Werkzeugkette, um von rohen Geodaten zu einer funktionierenden WebGIS-Plattform zu gelangen.",
    skills: ["Technischer Stack", "Angewandtes GIS", "Full-Stack-Entwicklung"],
    next: "Architektur", dev: "in Entwicklung",
  },
};

export default function Technologies({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      skills={c.skills}
      next={c.next}
      onNext={() => onSelect("architecture")}
    >
      <div className="space-y-10">
        {techGroups.map((group) => (
          <div key={group.id}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-teal mb-3">
              {group.label[lang]}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="border border-line bg-paper2 p-4 flex items-start gap-3"
                >
                  <span className={`w-2 h-2 mt-1.5 shrink-0 ${item.status === "dev" ? "bg-line" : "bg-accent"}`} />
                  <div>
                    <div className="font-display text-sm text-ink flex items-center gap-2">
                      {item.name}
                      {item.status === "dev" && (
                        <span className="font-mono text-[9px] uppercase tracking-wide text-inkfade border border-line px-1.5 py-0.5">
                          {c.dev}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-inkfade mt-0.5">
                      {item.note[lang]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
