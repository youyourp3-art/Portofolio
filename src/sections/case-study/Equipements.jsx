import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Stat, SubSection } from "./ui";
import { Attachments } from "../../components/Attachments";
import data from "../../content/case-study/equipements.json";

const totalExistant = data.groupes.flatMap((g) => g.items).reduce((s, it) => s + it.existant, 0);
const totalBesoin = data.groupes.flatMap((g) => g.items).reduce((s, it) => s + it.besoin, 0);

const chartData = data.groupes.map((g) => ({
  cat: g.cat,
  existant: g.items.reduce((s, it) => s + it.existant, 0),
  besoin: g.items.reduce((s, it) => s + it.besoin, 0),
}));

export default function Equipements() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Stat value={totalExistant} label="Équipements existants" />
        <Stat value={totalBesoin} label="Équipements à créer" sub="déficit estimé" />
        <Stat value={data.groupes.length} label="Catégories inventoriées" />
      </div>

      <SubSection title="Existant / besoin par catégorie">
        <div className="border border-line bg-paper2 p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 40 }}>
              <CartesianGrid stroke="#B9C2AF" strokeDasharray="3 3" />
              <XAxis dataKey="cat" tick={{ fontSize: 10, fill: "#3E4A44" }} angle={-35} textAnchor="end" interval={0} />
              <YAxis tick={{ fontSize: 11, fill: "#3E4A44" }} />
              <Tooltip contentStyle={{ background: "#F7F6EF", border: "1px solid #B9C2AF", fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="existant" name="Existant" fill="#25554A" />
              <Bar dataKey="besoin" name="Besoin estimé" fill="#C1451D" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SubSection>

      <SubSection title="Détail par catégorie">
        <div className="space-y-4">
          {data.groupes.map((g) => (
            <div key={g.cat} className="border border-line bg-paper2">
              <div className="font-mono text-[10px] tracking-widest uppercase text-teal px-4 py-2 border-b border-line">
                {g.cat}
              </div>
              <div className="divide-y divide-line">
                {g.items.map((it) => (
                  <div key={it.nom} className="flex items-center justify-between px-4 py-2 text-sm">
                    <span className="text-ink">{it.nom}</span>
                    <span className="font-mono text-xs text-inkfade">
                      {it.existant} existants
                      {it.besoin > 0 && (
                        <span className="text-accent"> · +{it.besoin} nécessaires</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      <Attachments items={data.attachments} title="Documents et captures complémentaires" />
    </div>
  );
}
