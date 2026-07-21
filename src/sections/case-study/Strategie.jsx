import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Stat, SubSection } from "./ui";
import { Attachments } from "../../components/Attachments";
import data from "../../content/case-study/strategie.json";

const COLORS = ["#C1451D", "#25554A", "#16332B", "#B9C2AF", "#3E4A44"];

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
        <div className="border border-line bg-paper2 p-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.budgetAxes}
                dataKey="pourcentage"
                nameKey="axe"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ axe, pourcentage }) => `${axe} ${pourcentage}%`}
                labelLine={false}
              >
                {data.budgetAxes.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#F7F6EF", border: "1px solid #B9C2AF", fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
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

      <Attachments items={data.attachments} title="Documents et captures complémentaires" />
    </div>
  );
}
