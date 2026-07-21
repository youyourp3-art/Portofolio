import { FileDown } from "lucide-react";

// Un "attachment" CMS = { label: string, file: string (chemin uploadé) }
// Le champ accepte n'importe quel type de fichier depuis le panel admin
// (widget "file" Decap CMS) — image affichée en aperçu, document en lien.
const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"];

export function Attachments({ items, title }) {
  const list = (items || []).filter((a) => a && a.file);
  if (list.length === 0) return null;

  return (
    <div>
      {title && (
        <div className="font-mono text-[10px] tracking-widest uppercase text-teal mb-3">
          {title}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-3">
        {list.map((a, i) => {
          const isImage = IMAGE_EXT.some((ext) => a.file.toLowerCase().endsWith(ext));
          return isImage ? (
            <div key={i} className="border border-line bg-paper2 overflow-hidden">
              <img src={a.file} alt={a.label || ""} className="w-full h-auto" />
              {a.label && (
                <div className="px-3 py-2 text-xs text-inkfade font-mono">{a.label}</div>
              )}
            </div>
          ) : (
            <a
              key={i}
              href={a.file}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-line bg-paper2 p-4 hover:border-accent transition-colors"
            >
              <FileDown size={16} className="text-teal shrink-0" />
              <span className="font-mono text-sm text-ink">{a.label || "Document"}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
