import { Stat, SubSection } from "./ui";
import data from "../../content/case-study/equipements.json";

const totalExistant = data.groupes.flatMap((g) => g.items).reduce((s, it) => s + it.existant, 0);
const totalBesoin = data.groupes.flatMap((g) => g.items).reduce((s, it) => s + it.besoin, 0);

export default function Equipements() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Stat value={totalExistant} label="Équipements existants" />
        <Stat value={totalBesoin} label="Équipements à créer" sub="déficit estimé" />
        <Stat value={data.groupes.length} label="Catégories inventoriées" />
      </div>

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
    </div>
  );
}
