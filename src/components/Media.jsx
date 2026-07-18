import media from "../content/media.json";
import { Placeholder } from "./PageShell";
import { FileDown } from "lucide-react";

// Affiche une image uploadée via le panel admin (clé de src/content/media.json),
// sinon retombe sur le Placeholder habituel.
export function MediaImage({ mediaKey, alt, fallback, className }) {
  const src = media[mediaKey];
  if (!src) return <Placeholder label={fallback} />;
  return (
    <img
      src={src}
      alt={alt}
      className={className ?? "w-full h-auto border border-line"}
    />
  );
}

// Affiche un lien de téléchargement si le fichier a été uploadé (CV, lettre...),
// sinon le petit bloc en pointillés habituel.
export function MediaFile({ mediaKey, label, fallback }) {
  const src = media[mediaKey];
  if (!src) {
    return (
      <div className="flex items-center gap-3 border border-dashed border-line p-4">
        <FileDown size={16} className="text-inkfade" />
        <span className="font-mono text-sm text-inkfade">{fallback}</span>
      </div>
    );
  }
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 border border-line bg-paper2 p-4 hover:border-accent transition-colors"
    >
      <FileDown size={16} className="text-teal" />
      <span className="font-mono text-sm text-ink">{label}</span>
    </a>
  );
}
