import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { Layers, Maximize2, X, Workflow } from "lucide-react";
import "leaflet/dist/leaflet.css";

const BASE = "/data/webgis";

// Config des couches : id, fichier, label FR/DE, type de rendu, couleur
const LAYER_DEFS = [
  { id: "limites", file: "limites_administratives", color: "#161F1B", kind: "line", weight: 2, dash: "6 4", default: true,
    label: { fr: "Limites administratives", de: "Verwaltungsgrenzen" } },
  { id: "occupation", file: "occupation_sol", color: "#3E4A44", kind: "fill", weight: 0.5, fillOpacity: 0.35, default: false,
    label: { fr: "Occupation du sol (bâti)", de: "Bodennutzung (Gebäude)" } },
  { id: "reseau", file: "reseau_routier", color: "#8A8F86", kind: "line", weight: 1, default: true,
    label: { fr: "Réseau routier", de: "Straßennetz" } },
  { id: "trottoirs", file: "trottoirs", color: "#B9C2AF", kind: "fill", weight: 0.5, fillOpacity: 0.5, default: false,
    label: { fr: "Trottoirs", de: "Gehwege" } },
  { id: "rondpoints", file: "rondpoints", color: "#25554A", kind: "fill", weight: 1, fillOpacity: 0.4, default: false,
    label: { fr: "Ronds-points", de: "Kreisverkehre" } },
  { id: "isochrones", file: "isochrones", color: "#C1451D", kind: "iso", weight: 0.5, default: true,
    label: { fr: "Isochrones piétonnes", de: "Fußgänger-Isochronen" } },
  { id: "tramway", file: "tramway", color: "#C1451D", kind: "transport", weight: 3, default: true,
    label: { fr: "Tramway", de: "Straßenbahn" } },
  { id: "bus", file: "bus", color: "#25554A", kind: "transport", weight: 3, default: true,
    label: { fr: "Bus", de: "Bus" } },
  { id: "metro", file: "metro", color: "#16332B", kind: "transport", weight: 3, default: true,
    label: { fr: "Métro", de: "Metro" } },
  { id: "equipements", file: "equipements", color: "#C1451D", kind: "points", default: true,
    label: { fr: "Équipements", de: "Einrichtungen" } },
  { id: "flux", file: "flux_vehicules", color: "#8A3A1A", kind: "line", weight: 4, default: false,
    label: { fr: "Flux véhicules", de: "Fahrzeugfluss" } },
  { id: "congestion", file: "congestion_pietonne", color: "#C1451D", kind: "points-alert", default: true,
    label: { fr: "Points de congestion", de: "Staupunkte" } },
];

const ISO_COLORS = { "0-5 min": "#25554A", "5-10 min": "#C1451D", "10-15 min": "#8A3A1A" };

const t = {
  fr: {
    layersTitle: "Couches", fullscreen: "Plein écran", exit: "Quitter", workflow: "Voir le workflow",
    workflowTitle: "Chaîne de production", close: "Fermer",
    steps: ["Projet QGIS (.qgz)", "Nettoyage & topologie", "Analyse réseau (isochrones)", "Mise en carte", "Export GeoJSON", "Leaflet", "React"],
    format: "Format", entities: "Entités", projection: "Projection", source: "Source",
    surface: "Surface", categorie: "Catégorie", etat: "État", famille: "Famille",
    mode: "Type", bande: "Temps de marche", niveau: "Niveau de coût",
  },
  de: {
    layersTitle: "Layer", fullscreen: "Vollbild", exit: "Beenden", workflow: "Workflow ansehen",
    workflowTitle: "Produktionskette", close: "Schließen",
    steps: ["QGIS-Projekt (.qgz)", "Bereinigung & Topologie", "Netzwerkanalyse (Isochronen)", "Kartografie", "GeoJSON-Export", "Leaflet", "React"],
    format: "Format", entities: "Objekte", projection: "Projektion", source: "Quelle",
    surface: "Fläche", categorie: "Kategorie", etat: "Zustand", famille: "Familie",
    mode: "Typ", bande: "Gehzeit", niveau: "Kostenstufe",
  },
};

function FitToLayers({ data }) {
  const map = useMap();
  useEffect(() => {
    if (!data) return;
    try {
      const layer = window.L.geoJSON(data);
      const bounds = layer.getBounds();
      if (bounds.isValid()) map.fitBounds(bounds, { padding: [24, 24] });
    } catch {
      // ignore
    }
  }, [data, map]);
  return null;
}

function popupContent(props, lang, layerId) {
  const c = t[lang];
  const rows = [];
  if (props.nom) rows.push([lang === "fr" ? "Nom" : "Name", props.nom]);
  if (props.name_fr) rows.push([lang === "fr" ? "Nom" : "Name", props.name_fr]);
  if (props.famille) rows.push([c.famille, props.famille]);
  if (props.categorie) rows.push([c.categorie, props.categorie]);
  if (props.surface_m2) rows.push([c.surface, `${props.surface_m2} m²`]);
  if (props.etat) rows.push([c.etat, props.etat]);
  if (props.mode) rows.push([c.mode, props.mode]);
  if (props.bande) rows.push([c.bande, props.bande]);
  if (props.cost_level) rows.push([c.niveau, props.cost_level]);
  if (props.fclass) rows.push([lang === "fr" ? "Classe" : "Klasse", props.fclass]);
  if (props.Flux) rows.push([lang === "fr" ? "Flux" : "Fluss", props.Flux]);
  if (props.building) rows.push([lang === "fr" ? "Bâti" : "Gebäude", props.building]);
  if (props.boundary) rows.push(["Boundary", props.boundary]);
  if (!rows.length) rows.push([lang === "fr" ? "Couche" : "Layer", layerId]);
  return (
    <div className="font-mono text-[11px] min-w-[160px]">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-3 py-0.5 border-b border-line/40 last:border-0">
          <span className="text-inkfade uppercase tracking-wide">{k}</span>
          <span className="text-ink text-right">{String(v)}</span>
        </div>
      ))}
    </div>
  );
}

export default function WebGISMap({ lang = "fr" }) {
  const c = t[lang];
  const [layerData, setLayerData] = useState({});
  const [active, setActive] = useState(() =>
    Object.fromEntries(LAYER_DEFS.map((l) => [l.id, l.default]))
  );
  const [showLayers, setShowLayers] = useState(true);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    let cancelled = false;
    LAYER_DEFS.forEach((l) => {
      fetch(`${BASE}/${l.file}.geojson`)
        .then((r) => r.json())
        .then((data) => {
          if (!cancelled) setLayerData((prev) => ({ ...prev, [l.id]: data }));
        })
        .catch(() => {});
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const boundsSource = layerData["limites"];

  const styleFor = (def) => (feature) => {
    if (def.kind === "iso") {
      const band = feature?.properties?.bande;
      return { color: ISO_COLORS[band] || def.color, weight: 1, fillOpacity: 0.18, fillColor: ISO_COLORS[band] || def.color };
    }
    if (def.kind === "fill") {
      return { color: def.color, weight: def.weight, fillOpacity: def.fillOpacity ?? 0.3, fillColor: def.color };
    }
    return { color: def.color, weight: def.weight ?? 2, dashArray: def.dash };
  };

  const pointToLayer = (def) => (feature, latlng) => {
    const L = window.L;
    if (def.kind === "points-alert") {
      return L.circleMarker(latlng, { radius: 7, color: "#fff", weight: 2, fillColor: def.color, fillOpacity: 0.95 });
    }
    if (def.kind === "points") {
      return L.circleMarker(latlng, { radius: 5, color: def.color, weight: 1.5, fillColor: "#F7F6EF", fillOpacity: 0.9 });
    }
    if (def.kind === "transport" && feature.properties?.mode !== "ligne") {
      return L.circleMarker(latlng, { radius: 4, color: "#fff", weight: 1.5, fillColor: def.color, fillOpacity: 1 });
    }
    return L.circleMarker(latlng, { radius: 4, color: def.color, weight: 1, fillColor: def.color, fillOpacity: 0.8 });
  };

  const onEachFeature = (layerId) => (feature, layer) => {
    layer.on("click", () => setInfo({ layerId, props: feature.properties }));
  };

  const activeCount = LAYER_DEFS.filter((l) => active[l.id]).length;

  return (
    <div className={`relative border border-line bg-paper2 ${fullscreen ? "fixed inset-0 z-[9999]" : "h-[560px]"}`}>
      <MapContainer
        center={[36.719, 3.181]}
        zoom={15}
        scrollWheelZoom
        style={{ width: "100%", height: "100%", background: "#EEEDE3" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {boundsSource && <FitToLayers data={boundsSource} />}
        {LAYER_DEFS.map((def) => {
          const data = layerData[def.id];
          if (!data || !active[def.id]) return null;
          return (
            <GeoJSON
              key={def.id}
              data={data}
              style={def.kind === "line" || def.kind === "fill" || def.kind === "iso" ? styleFor(def) : undefined}
              pointToLayer={pointToLayer(def)}
              onEachFeature={onEachFeature(def.id)}
            >
              {/* popups handled via click -> info panel for consistent styling */}
            </GeoJSON>
          );
        })}
      </MapContainer>

      {/* Panneau de couches */}
      <div className="absolute top-3 left-3 z-[1000] bg-paper2/95 border border-line shadow-sm text-ink max-w-[220px]">
        <button
          onClick={() => setShowLayers((s) => !s)}
          className="w-full flex items-center gap-2 px-3 py-2 font-mono text-[11px] uppercase tracking-wide border-b border-line"
        >
          <Layers size={13} className="text-accent" />
          {c.layersTitle} ({activeCount})
        </button>
        {showLayers && (
          <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
            {LAYER_DEFS.map((l) => (
              <label key={l.id} className="flex items-center gap-2 text-[11px] font-body py-0.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!active[l.id]}
                  onChange={() => setActive((a) => ({ ...a, [l.id]: !a[l.id] }))}
                  className="accent-accent"
                />
                <span className="w-2.5 h-2.5 shrink-0 rounded-sm" style={{ background: l.color }} />
                <span className="text-inkfade">{l.label[lang]}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Boutons plein écran / workflow */}
      <div className="absolute top-3 right-3 z-[1000] flex gap-2">
        <button
          onClick={() => setShowWorkflow(true)}
          className="bg-paper2/95 border border-line px-2.5 py-2 text-ink hover:border-accent hover:text-accent transition-colors"
          title={c.workflow}
        >
          <Workflow size={14} />
        </button>
        <button
          onClick={() => setFullscreen((f) => !f)}
          className="bg-paper2/95 border border-line px-2.5 py-2 text-ink hover:border-accent hover:text-accent transition-colors"
          title={fullscreen ? c.exit : c.fullscreen}
        >
          {fullscreen ? <X size={14} /> : <Maximize2 size={14} />}
        </button>
      </div>

      {/* Panneau d'info au clic sur une entité */}
      {info && (
        <div className="absolute bottom-3 left-3 z-[1000] bg-paper2/97 border border-line shadow-sm px-3 py-2.5 max-w-[240px]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              {LAYER_DEFS.find((l) => l.id === info.layerId)?.label[lang] || info.layerId}
            </span>
            <button onClick={() => setInfo(null)} className="text-inkfade hover:text-ink">
              <X size={12} />
            </button>
          </div>
          {popupContent(info.props, lang, info.layerId)}
        </div>
      )}

      {/* Modal workflow */}
      {showWorkflow && (
        <div className="absolute inset-0 z-[2000] bg-ink/70 flex items-center justify-center p-6">
          <div className="bg-paper2 border border-line max-w-sm w-full p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-sm text-ink">{c.workflowTitle}</h3>
              <button onClick={() => setShowWorkflow(false)} className="text-inkfade hover:text-ink">
                <X size={16} />
              </button>
            </div>
            <ol className="space-y-2">
              {c.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 font-mono text-[11px] text-inkfade">
                  <span className="w-5 h-5 flex items-center justify-center border border-accent text-accent shrink-0">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
