import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Stat, SubSection, AfomBlock } from "./ui";
import { Attachments } from "../../components/Attachments";
import data from "../../content/case-study/demographie.json";

export default function Demographie() {
  const scenarios = data.scenarios && data.scenarios.length ? data.scenarios : [{ name: "Évolution", evolution: data.evolution }];
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const activeEvolution = scenarios[scenarioIdx]?.evolution || data.evolution;

  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} sub={s.sub || undefined} />
        ))}
      </div>

      <SubSection title="Évolution 2020 – 2040">
        {scenarios.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {scenarios.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setScenarioIdx(i)}
                className={`font-mono text-[11px] uppercase tracking-wide px-3 py-1.5 border transition-colors ${
                  scenarioIdx === i
                    ? "bg-ink text-paper2 border-ink"
                    : "border-line text-inkfade hover:border-accent hover:text-accent"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        )}

        <div className="border border-line bg-paper2 p-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activeEvolution} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#B9C2AF" strokeDasharray="3 3" />
              <XAxis dataKey="annee" tick={{ fontSize: 11, fill: "#3E4A44" }} />
              <YAxis tick={{ fontSize: 11, fill: "#3E4A44" }} />
              <Tooltip
                contentStyle={{ background: "#F7F6EF", border: "1px solid #B9C2AF", fontSize: 12 }}
                formatter={(v) => v.toLocaleString("fr-FR")}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="population" name="Population" stroke="#C1451D" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="border border-line bg-paper2 overflow-x-auto mt-4">
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
              {activeEvolution.map((d) => (
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

      <Attachments items={data.attachments} title="Documents et captures complémentaires" />
    </div>
  );
}
