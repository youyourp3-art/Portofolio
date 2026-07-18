import { nav, profile } from "../data/profile";
import { useLang } from "../context/LangContext";
import { Layers, X } from "lucide-react";

export default function Sidebar({ active, onSelect, open, onClose }) {
  const { lang, toggle } = useLang();
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-ink/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-72 shrink-0 bg-tealdeep text-paper2 z-50
        flex flex-col border-r border-black/20
        transform transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-paper2/10">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-accent" />
            <span className="font-mono text-xs tracking-widest uppercase text-paper2/70">
              {lang === "fr" ? "Couches" : "Layer"}
            </span>
          </div>
          <button onClick={onClose} className="md:hidden text-paper2/60">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {nav.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelect(item.id);
                  onClose();
                }}
                className={`w-full text-left px-5 py-3 flex items-start gap-3 border-l-2 transition-colors
                ${
                  isActive
                    ? "border-accent bg-paper2/[0.06] text-paper2"
                    : "border-transparent text-paper2/55 hover:text-paper2/85 hover:bg-paper2/[0.04]"
                }`}
              >
                <span
                  className={`mt-[3px] w-3.5 h-3.5 shrink-0 border ${
                    isActive
                      ? "bg-accent border-accent"
                      : "border-paper2/40"
                  }`}
                />
                <span>
                  <span className="block font-mono text-[10px] tracking-widest text-paper2/40">
                    {item.num}
                  </span>
                  <span className="block font-display text-sm leading-snug">
                    {item.label[lang]}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={toggle}
          className="mx-5 mb-4 flex items-center justify-between px-3 py-2 border border-paper2/20 text-paper2/70 hover:text-paper2 hover:border-accent transition-colors"
        >
          <span className="font-mono text-[11px] tracking-widest">FR</span>
          <span className="font-mono text-[10px] text-paper2/30">
            {lang === "fr" ? "→" : "←"}
          </span>
          <span className="font-mono text-[11px] tracking-widest">DE</span>
        </button>

        <div className="px-5 py-4 border-t border-paper2/10 font-mono text-[10px] text-paper2/40 leading-relaxed">
          <div>{profile.name}</div>
          <div>{profile.coords}</div>
          <div>EPSG:4326</div>
        </div>
      </aside>
    </>
  );
}
