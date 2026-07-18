import { PageShell } from "../components/PageShell";
import { MediaImage } from "../components/Media";
import { useLang } from "../context/LangContext";
import aboutContent from "../content/about.json";

const copy = {
  fr: {
    eyebrow: "Couche 02 — Profil",
    title: "À propos",
    intro: "Le parcours qui m'a mené des salles de cours d'aménagement urbain au développement d'un système d'information géographique.",
    skills: ["Parcours académique", "Vision métier", "Rédaction"],
    next: "Compétences",
    h1: "Parcours", p1: aboutContent.p1,
    h2: "Formation",
    f1y: "depuis 2025", f1: "Master Aménagement Urbain — USTHB, Alger. Urbanisme réglementaire, VRD, hydraulique urbaine, habitat, écologie, risques majeurs, SIG.",
    f2y: "2022 – 2025", f2: "Bachelor Géographie et Aménagement du Territoire — USTHB, Alger.",
    h3: "Pourquoi la géomatique", p3: aboutContent.p3,
    h4: "Ce que je cherche", p4: aboutContent.p4,
    photo: "Emplacement réservé — photo de profil",
  },
  de: {
    eyebrow: "Layer 02 — Profil",
    title: "Über mich",
    intro: "Der Werdegang, der mich von den Hörsälen der Stadtplanung zur Entwicklung eines Geoinformationssystems geführt hat.",
    skills: ["Akademischer Werdegang", "Berufsvision", "Textgestaltung"],
    next: "Kompetenzen",
    h1: "Werdegang", p1: "Nach einem Bachelor in Geographie und Raumplanung an der USTHB (Algier) habe ich den Master Stadt- und Raumplanung fortgesetzt, mit zunehmender Vertiefung in Geoinformationssysteme und räumliche Analyse. Dieser Schwerpunktwechsel ist keine Richtungsänderung, sondern die logische Folge eines Interesses am Territorium, das nach präziseren Werkzeugen als der reinen Regelwerkslektüre verlangte.",
    h2: "Ausbildung",
    f1y: "seit 2025", f1: "Master Stadt- und Raumplanung — USTHB, Algier. Städtebaurecht, Erschließung, Stadthydraulik, Wohnungswesen, Ökologie, Großrisiken, GIS.",
    f2y: "2022 – 2025", f2: "Bachelor Geographie und Raumplanung — USTHB, Algier.",
    h3: "Warum Geomatik", p3: "Eine territoriale Diagnostik bleibt theoretisch, solange sie nicht durch strukturierte, abrufbare Daten getragen wird. Genau diese Schnittstelle zwischen Stadtanalyse und Werkzeug zieht mich zur Geomatik: die Systeme selbst zu bauen, die eine Diagnostik nutzbar machen, statt sie als statischen Bericht abzuliefern.",
    h4: "Was ich suche", p4: "Eine Ausbildung oder Position, die es mir erlaubt, meine geomatischen Kompetenzen in einem strukturierten beruflichen Rahmen zu vertiefen — insbesondere an der Schnittstelle von Bodenmanagement, Geodaten und digitalen Werkzeugen.",
    photo: "Platzhalter — Profilfoto",
  },
};

export default function About({ onSelect }) {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
      skills={c.skills}
      next={c.next}
      onNext={() => onSelect("competences")}
    >
      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h1}</h2>
        <p className="text-inkfade leading-relaxed">{c.p1}</p>
      </section>

      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h2}</h2>
        <ul className="space-y-3 text-inkfade leading-relaxed">
          <li><span className="font-mono text-xs text-teal mr-2">{c.f1y}</span>{c.f1}</li>
          <li><span className="font-mono text-xs text-teal mr-2">{c.f2y}</span>{c.f2}</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h3}</h2>
        <p className="text-inkfade leading-relaxed">{c.p3}</p>
      </section>

      <section>
        <h2 className="font-display text-xl text-ink mb-3">{c.h4}</h2>
        <p className="text-inkfade leading-relaxed">{c.p4}</p>
      </section>

      <MediaImage
        mediaKey="profilePhoto"
        alt="Photo de profil"
        fallback={c.photo}
        className="w-full max-w-xs border border-line"
      />
    </PageShell>
  );
}
