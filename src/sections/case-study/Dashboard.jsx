import { SubSection } from "./ui";
import data from "../../content/case-study/dashboard.json";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <p className="text-inkfade leading-relaxed">{data.intro}</p>

      <SubSection title="Modules gérés depuis le panel admin">
        <div className="grid sm:grid-cols-2 gap-3">
          {data.modules.map((m) => (
            <div key={m.nom} className="border border-line bg-paper2 p-4">
              <div className="font-display text-sm text-ink mb-1">{m.nom}</div>
              <div className="text-xs text-inkfade leading-relaxed">{m.desc}</div>
            </div>
          ))}
        </div>
      </SubSection>
    </div>
  );
}
