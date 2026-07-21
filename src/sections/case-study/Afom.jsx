import { SubSection, AfomBlock } from "./ui";
import data from "../../content/case-study/afom.json";
import { Attachments } from "../../components/Attachments";

export default function Afom() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        <AfomBlock tone="green" title="Atouts" items={data.atouts} />
        <AfomBlock tone="red" title="Faiblesses" items={data.faiblesses} />
        <AfomBlock tone="blue" title="Opportunités" items={data.opportunites} />
        <AfomBlock tone="orange" title="Menaces" items={data.menaces} />
      </div>

      <SubSection title="Six axes de propositions">
        <div className="grid sm:grid-cols-2 gap-3">
          {data.axes.map((a) => (
            <div key={a.titre} className="border border-line bg-paper2 p-4">
              <div className="font-display text-sm text-ink mb-1">{a.titre}</div>
              <div className="text-xs text-inkfade leading-relaxed">{a.desc}</div>
            </div>
          ))}
        </div>
      </SubSection>

      <div className="border-l-2 border-accent bg-paper2 p-5">
        <span className="font-mono text-xs text-inkfade">Budget total programmé — </span>
        <span className="font-display text-lg text-ink">{data.budgetTotal}</span>
        <span className="font-mono text-xs text-inkfade"> sur la période 2025–2040</span>
      </div>
      <Attachments items={data.attachments} title="Documents et captures complémentaires" />
    </div>
  );
}
