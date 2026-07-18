import { SubSection } from "./ui";
import data from "../../content/case-study/cartographie.json";

export default function Cartographie() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <SubSection title="Catégories de l'atlas">
        <div className="grid sm:grid-cols-2 gap-4">
          {data.categories.map((c) => (
            <div key={c.cat} className="border border-line bg-paper2 overflow-hidden">
              <img
                src={c.img}
                alt={`Extrait de carte — ${c.cat}`}
                className="w-full h-40 object-cover border-b border-line"
                loading="lazy"
              />
              <div className="p-4">
                <div className="font-display text-sm text-ink">{c.cat}</div>
                <div className="font-mono text-[10px] text-inkfade mt-1">
                  Cartes {c.range}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      <p className="text-xs text-inkfade font-mono">{data.note}</p>
    </div>
  );
}
