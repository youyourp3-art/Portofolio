export function Stat({ value, label, sub }) {
  return (
    <div className="border border-line bg-paper2 p-4">
      <div className="font-display text-2xl text-ink">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-wide text-inkfade mt-1">
        {label}
      </div>
      {sub && <div className="text-xs text-teal mt-1">{sub}</div>}
    </div>
  );
}

export function SubSection({ title, children }) {
  return (
    <section>
      <h3 className="font-display text-lg text-ink mb-3">{title}</h3>
      {children}
    </section>
  );
}

export function AfomBlock({ title, items, tone }) {
  const tones = {
    green: "border-teal text-teal",
    red: "border-accent text-accent",
    blue: "border-ink text-ink",
    orange: "border-accent text-accent",
  };
  return (
    <div className={`border-t-2 ${tones[tone]} bg-paper2 p-4`}>
      <div className="font-mono text-[10px] tracking-widest uppercase mb-2">{title}</div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-sm text-inkfade leading-snug flex gap-2">
            <span className="shrink-0">—</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
