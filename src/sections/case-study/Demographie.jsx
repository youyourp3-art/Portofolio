import { Stat, SubSection, AfomBlock } from "./ui";
import data from "../../content/case-study/demographie.json";

export default function Demographie() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} sub={s.sub || undefined} />
        ))}
      </div>

      <SubSection title="Évolution 2020 – 2040">
        <div className="border border-line bg-paper2 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line font-mono text-[10px] uppercase tracking-wide text-inkfade">
                <th className="text-left p-3">Année</th>
                <th className="text-left p-3">Population</th>
                <th className="text-left p-3">Densité (hab/km²)</th>
                <th className="text-left p-3">Taux de croissance</th>
                <th className="text-left p-3">Ratio de dépendance</th>
              </tr>
            </thead>
            <tbody>
              {data.evolution.map((d) => (
                <tr key={d.annee} className="border-b border-line last:border-0">
                  <td className="p-3 font-display text-ink">{d.annee}</td>
                  <td className="p-3 text-inkfade">{d.population.toLocaleString("fr-FR")}</td>
                  <td className="p-3 text-inkfade">{d.densite.toLocaleString("fr-FR")}</td>
                  <td className="p-3 text-inkfade">{d.taux} %</td>
                  <td className="p-3 text-inkfade">{d.dependance}/100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-inkfade leading-relaxed mt-3">{data.noteEvolution}</p>
      </SubSection>

      <SubSection title="Structure par âge">
        <ul className="space-y-2 text-sm text-inkfade">
          {data.structureAge.map((s) => <li key={s}>— {s}</li>)}
        </ul>
      </SubSection>

      <SubSection title="AFOM — dimension démographique">
        <div className="grid sm:grid-cols-2 gap-3">
          <AfomBlock tone="green" title="Atouts" items={data.afom.atouts} />
          <AfomBlock tone="red" title="Faiblesses" items={data.afom.faiblesses} />
          <AfomBlock tone="blue" title="Opportunités" items={data.afom.opportunites} />
          <AfomBlock tone="orange" title="Menaces" items={data.afom.menaces} />
        </div>
      </SubSection>
    </div>
  );
}
