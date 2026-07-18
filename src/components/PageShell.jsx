import { useLang } from "../context/LangContext";

export function PageShell({ eyebrow, title, intro, children, skills, next, onNext }) {
  const { lang } = useLang();
  const t = {
    fr: { demonstrated: "Compétences démontrées", next: "Suite" },
    de: { demonstrated: "Nachgewiesene Kompetenzen", next: "Weiter" },
  }[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 md:py-20">
      {eyebrow && (
        <div className="font-mono text-[11px] tracking-widest uppercase text-accent mb-3">
          {eyebrow}
        </div>
      )}
      <h1 className="font-display text-3xl md:text-5xl font-medium text-ink mb-6 leading-tight">
        {title}
      </h1>
      {intro && (
        <p className="text-inkfade text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
          {intro}
        </p>
      )}

      <div className="space-y-10">{children}</div>

      {skills && skills.length > 0 && (
        <div className="mt-14 border border-line bg-paper2 p-5 md:p-6">
          <div className="font-mono text-[10px] tracking-widest uppercase text-teal mb-3">
            {t.demonstrated}
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] px-2.5 py-1 border border-line text-inkfade"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {next && (
        <button
          onClick={onNext}
          className="mt-10 group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-teal hover:text-accent transition-colors"
        >
          <span>{t.next} — {next}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      )}
    </div>
  );
}

export function Placeholder({ label }) {
  const { lang } = useLang();
  const fallback = lang === "fr" ? "Emplacement réservé" : "Platzhalter";
  return (
    <div className="border border-dashed border-line bg-paper2/60 p-8 text-center font-mono text-xs text-inkfade tracking-wide">
      {label ?? fallback}
    </div>
  );
}
