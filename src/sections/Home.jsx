import { profile } from "../data/profile";
import { useLang } from "../context/LangContext";
import homeContent from "../content/home.json";

const copy = {
  fr: homeContent,
  de: {
    tagline1: "Das Territorium lesen,",
    tagline2: "die Werkzeuge bauen,",
    tagline3: "um es zu kartieren.",
    intro:
      "Azzaz Bouhenni Nazim — Masterstudent für Stadt- und Raumplanung (USTHB, Algier), spezialisiert auf Geoinformationssysteme und WebGIS-Entwicklung. Dieses Portfolio vereint meine territorialen Analysen, meine Karten und die Plattform, die ich zu deren Verwaltung entwickle.",
    cta1: "QGIS-Portfolio ansehen",
    cta2: "WebGIS entdecken",
    stats: [
      { value: "9", label: "Kompetenzbereiche" },
      { value: "15+", label: "Beherrschte Technologien" },
      { value: "1", label: "WebGIS-Plattform in Entwicklung" },
      { value: "3", label: "Durchgeführte territoriale Diagnosen" },
    ],
    explore: "Layer erkunden",
    cards: [
      { id: "competences", t: "Kompetenzen", d: "GIS, Entwicklung, Stadtplanung — nach Bereich." },
      { id: "webgis", t: "WebGIS", d: "Das System, das ich für die territoriale Verwaltung entwickle." },
      { id: "etude-cas", t: "Fallstudie", d: "Vollständige territoriale Diagnostik — Aïn Bénian." },
      { id: "contact", t: "Kontakt", d: "Lebenslauf, Anschreiben, Kontaktdaten." },
    ],
  },
};

export default function Home({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div>
      <div className="graticule-bg border-b border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="font-mono text-[11px] tracking-widest uppercase text-accent mb-4">
            {profile.coords} — {profile.location}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-ink leading-[1.05] mb-6">
            {c.tagline1}
            <br />
            {c.tagline2}
            <br />
            {c.tagline3}
          </h1>
          <p className="text-inkfade text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {c.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onSelect("qgis")}
              className="bg-ink text-paper2 font-mono text-xs tracking-widest uppercase px-5 py-3 hover:bg-teal transition-colors"
            >
              {c.cta1}
            </button>
            <button
              onClick={() => onSelect("webgis")}
              className="border border-ink text-ink font-mono text-xs tracking-widest uppercase px-5 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              {c.cta2}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-line">
        {c.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-3xl text-ink">{s.value}</div>
            <div className="font-mono text-[11px] text-inkfade uppercase tracking-wide mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-14">
        <div className="font-mono text-[11px] tracking-widest uppercase text-teal mb-6">
          {c.explore}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.cards.map((card) => (
            <button
              key={card.id}
              onClick={() => onSelect(card.id)}
              className="text-left border border-line bg-paper2 p-5 hover:border-accent transition-colors group"
            >
              <div className="font-display text-lg text-ink group-hover:text-accent transition-colors">
                {card.t}
              </div>
              <div className="text-sm text-inkfade mt-1">{card.d}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
