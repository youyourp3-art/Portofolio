import { Stat, SubSection } from "./ui";
import data from "../../content/case-study/strategie.json";

export default function Strategie() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <SubSection title="Projets phares">
        <div className="grid sm:grid-cols-2 gap-3">
          {data.projets.map((p) => (
            <div key={p.nom} className="border border-line bg-paper2 p-4">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-display text-sm text-ink">{p.nom}</span>
                <span className="font-mono text-[9px] uppercase tracking-wide text-accent shrink-0 mt-1">
                  {p.priorite}
                </span>
              </div>
              <p className="text-xs text-inkfade leading-relaxed mb-2">{p.desc}</p>
              <div className="flex gap-3 font-mono text-[10px] text-inkfade">
                <span>{p.cout}</span>
                <span>·</span>
                <span>Échéance {p.echeance}</span>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Répartition budgétaire par axe">
        <div className="border border-line bg-paper2 divide-y divide-line">
          {data.budgetAxes.map((b) => (
            <div key={b.axe} className="flex items-center gap-4 p-3">
              <span className="text-sm text-ink w-48 shrink-0">{b.axe}</span>
              <div className="flex-1 h-2 bg-paper">
                <div className="h-full bg-teal" style={{ width: `${b.pourcentage}%` }} />
              </div>
              <span className="font-mono text-xs text-inkfade w-12 text-right">{b.pourcentage}%</span>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="Phasage temporel">
        <div className="grid sm:grid-cols-3 gap-3">
          {data.phasage.map((p) => (
            <div key={p.periode} className="border border-line bg-paper2 p-4">
              <div className="font-display text-sm text-ink mb-1">{p.periode}</div>
              <div className="font-mono text-xs text-accent mb-2">{p.budget}</div>
              <div className="text-xs text-inkfade leading-relaxed">{p.note}</div>
            </div>
          ))}
        </div>
      </SubSection>

      <div className="grid grid-cols-3 gap-3">
        {data.visionStats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </div>
  );
}
