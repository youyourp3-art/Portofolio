import { PageShell } from "../components/PageShell";
import { profile } from "../data/profile";
import { useLang } from "../context/LangContext";
import { MediaImage, MediaFile } from "../components/Media";
import contactContent from "../content/contact.json";
import { Mail, Phone, Link as LinkedinIcon } from "lucide-react";

const copy = {
  fr: {
    eyebrow: "Couche 11 — Contact", title: "Contact",
    intro: contactContent.intro,
    bio: contactContent.bio,
    photo: "Photo de profil",
    cv: "CV (PDF) — à ajouter",
    portfolio: "Portfolio (PDF) — à ajouter",
  },
  de: {
    eyebrow: "Layer 11 — Kontakt", title: "Kontakt",
    intro: "Kontaktdaten sowie Lebenslauf und Portfolio zum Herunterladen.",
    bio: "Masterstudent für Stadt- und Raumplanung, auf der Suche nach einer Ausbildung oder ersten beruflichen Erfahrung im Bereich Geomatik.",
    photo: "Profilfoto",
    cv: "Lebenslauf (PDF) — nachreichen",
    portfolio: "Portfolio (PDF) — nachreichen",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const c = copy[lang];
  return (
    <PageShell eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
        <div>
          <MediaImage
            mediaKey="profilePhoto"
            alt="Photo de profil"
            fallback={c.photo}
            className="w-full max-w-xs border border-line"
          />
          <p className="text-inkfade text-sm leading-relaxed mt-5">{c.bio}</p>
        </div>

        <div className="space-y-3">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 border border-line bg-paper2 p-4 hover:border-accent transition-colors">
            <Mail size={16} className="text-teal" />
            <span className="font-mono text-sm text-ink">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 border border-line bg-paper2 p-4 hover:border-accent transition-colors">
            <Phone size={16} className="text-teal" />
            <span className="font-mono text-sm text-ink">{profile.phone}</span>
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line bg-paper2 p-4 hover:border-accent transition-colors">
            <LinkedinIcon size={16} className="text-teal" />
            <span className="font-mono text-sm text-ink">{profile.linkedin}</span>
          </a>
          <MediaFile mediaKey="cvPdf" label={lang === "fr" ? "CV (PDF)" : "Lebenslauf (PDF)"} fallback={c.cv} />
          <MediaFile mediaKey="lettrePdf" label={lang === "fr" ? "Portfolio (PDF)" : "Portfolio (PDF)"} fallback={c.portfolio} />
        </div>
      </div>

      {/* Bloc candidature Trier — reste toujours en allemand, quel que soit le toggle FR/DE,
          car c'est le texte réel adressé à la Stadtverwaltung Trier. */}
      <div className="border-l-2 border-accent bg-paper2 p-5 md:p-6 mt-4">
        <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
          Bewerbung — Stadtverwaltung Trier
        </div>
        <h3 className="font-display text-lg text-ink mb-3">
          Amt für Bodenmanagement und Geoinformation
        </h3>
        <p className="text-sm text-inkfade leading-relaxed mb-4">
          Bewerbung um einen Ausbildungsplatz als Geomatiker/in (m/w/d) zum
          01.08.2027. Mit großem Interesse habe ich die Ausschreibung der
          Stadtverwaltung Trier gelesen — die Verbindung aus Vermessung,
          Geodatenmanagement und kartografischer Aufbereitung entspricht
          genau dem Berufsfeld, in dem ich mich langfristig weiterentwickeln
          möchte. Mein vollständiges Anschreiben sowie mein Lebenslauf
          stehen unten zum Download bereit.
        </p>
        <div className="flex flex-wrap gap-3">
          <MediaFile mediaKey="cvPdf" label="Lebenslauf (PDF)" fallback="Lebenslauf (PDF) — nachreichen" />
          <MediaFile mediaKey="lettreTrierPdf" label="Anschreiben (PDF)" fallback="Anschreiben (PDF) — nachreichen" />
        </div>
      </div>
    </PageShell>
  );
}
