import { PageShell } from "../components/PageShell";
import { skillDomains } from "../data/profile";
import { useLang } from "../context/LangContext";

const copy = {
  fr: { eyebrow: "Couche 03 — Compétences", title: "Compétences", intro: "Neuf domaines, du recueil de la donnée brute à sa mise en œuvre dans un système applicatif.", next: "Technologies" },
  de: { eyebrow: "Layer 03 — Kompetenzen", title: "Kompetenzen", intro: "Neun Bereiche, von der Rohdatenerhebung bis zur Umsetzung in einem Anwendungssystem.", next: "Technologien" },
};

export default function Skills({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      skills={skillDomains.map((d) => d.label[lang])}
      next={c.next}
      onNext={() => onSelect("technologies")}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {skillDomains.map((d, i) => (
          <div key={d.id} className="border border-line bg-paper2 p-5">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-lg text-ink">{d.label[lang]}</h3>
              <span className="font-mono text-[10px] text-line">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm text-inkfade leading-relaxed mb-3">
              {d.desc[lang]}
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
