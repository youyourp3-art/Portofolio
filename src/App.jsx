import { useState } from "react";
import { LangProvider } from "./context/LangContext";
import Sidebar from "./components/Sidebar";
import HUD from "./components/HUD";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Technologies from "./sections/Technologies";
import Architecture from "./sections/Architecture";
import PortfolioQGIS from "./sections/PortfolioQGIS";
import WebGIS from "./sections/WebGIS";
import Demo from "./sections/Demo";
import CaseStudy from "./sections/CaseStudy";
import Admin from "./sections/Admin";
import Contact from "./sections/Contact";

const sections = {
  accueil: Home,
  apropos: About,
  competences: Skills,
  technologies: Technologies,
  architecture: Architecture,
  qgis: PortfolioQGIS,
  webgis: WebGIS,
  demo: Demo,
  "etude-cas": CaseStudy,
  admin: Admin,
  contact: Contact,
};

export default function App() {
  const [active, setActive] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);

  const Active = sections[active];

  const handleSelect = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <LangProvider>
      <div className="flex min-h-screen">
        <Sidebar
          active={active}
          onSelect={handleSelect}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
        <div className="flex-1 min-w-0">
          <HUD active={active} onOpenMenu={() => setMenuOpen(true)} />
          <Active onSelect={handleSelect} />
          <footer className="border-t border-line">
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[11px] text-inkfade">
              <span>Azzaz Bouhenni Nazim — USTHB, Alger</span>
              <span>Master Aménagement Urbain · SIG · WebGIS</span>
            </div>
          </footer>
        </div>
      </div>
    </LangProvider>
  );
}
