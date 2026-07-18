import { Stat, SubSection } from "./ui";
import data from "../../content/case-study/accueil.json";

export default function Accueil() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 border border-line text-inkfade">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl text-ink mb-3">{data.titre}</h3>
        <p className="text-inkfade leading-relaxed">{data.intro}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <SubSection title="Problématique centrale">
        <div className="border-l-2 border-accent bg-paper2 p-5">
          <p className="text-inkfade leading-relaxed">{data.problematique}</p>
        </div>
      </SubSection>

      <SubSection title="Hypothèse directrice">
        <p className="text-inkfade leading-relaxed italic border-l-2 border-line pl-4">
          « {data.hypothese} »
        </p>
      </SubSection>

      <SubSection title="Quatre changements de paradigme">
        <div className="grid sm:grid-cols-2 gap-3">
          {data.paradigmes.map((p) => (
            <div key={p.titre} className="border border-line bg-paper2 p-4">
              <div className="font-display text-sm text-ink mb-1">{p.titre}</div>
              <div className="text-xs text-inkfade leading-relaxed">{p.detail}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </div>
  );
}
