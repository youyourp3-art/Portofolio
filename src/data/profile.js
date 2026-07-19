// Contenu factuel dérivé du CV et du dépôt réel du projet — à tenir synchronisé.
export const profile = {
  name: "Azzaz Bouhenni Nazim",
  location: "Alger, Algérie",
  coords: "36.7538° N, 3.0588° E",
  email: "azzazbouhenninazim@gmail.com",
  phone: "+213 542 62 54 56",
  linkedin: "linkedin.com/in/bouhenni-nazim-azzaz-1b3197285",
  linkedinUrl: "https://linkedin.com/in/bouhenni-nazim-azzaz-1b3197285",
};

// status: "actif" = utilisé dans un projet livré (ex. backend Aïn Bénian réel)
//         "dev"   = en cours de développement séparé, pas encore intégré
export const techGroups = [
  {
    id: "gis",
    label: { fr: "SIG & Géomatique", de: "GIS & Geomatik" },
    items: [
      { name: "QGIS", note: { fr: "traitement, symbologie, mise en page", de: "Verarbeitung, Symbolik, Layout" }, status: "actif" },
      { name: "SQL", note: { fr: "requêtes spatiales et attributaires", de: "räumliche und attributive Abfragen" }, status: "actif" },
      { name: "Google Earth Engine", note: { fr: "analyse par télédétection", de: "Fernerkundungsanalyse" }, status: "actif" },
      { name: "Python", note: { fr: "géotraitement, automatisation", de: "Geoverarbeitung, Automatisierung" }, status: "actif" },
    ],
  },
  {
    id: "webgis",
    label: { fr: "WebGIS", de: "WebGIS" },
    items: [
      { name: "Leaflet", note: { fr: "cartographie interactive web", de: "interaktive Webkartografie" }, status: "dev" },
      { name: "GeoServer", note: { fr: "diffusion de couches SIG", de: "Bereitstellung von GIS-Layern" }, status: "dev" },
      { name: "PostGIS", note: { fr: "base de données spatiale", de: "räumliche Datenbank" }, status: "dev" },
    ],
  },
  {
    id: "dev",
    label: { fr: "Développement", de: "Entwicklung" },
    items: [
      { name: "React", note: { fr: "interface frontend", de: "Frontend-Oberfläche" }, status: "actif" },
      { name: "Vite", note: { fr: "environnement de build", de: "Build-Umgebung" }, status: "actif" },
      { name: "JavaScript", note: { fr: "logique applicative", de: "Anwendungslogik" }, status: "actif" },
      { name: "Node.js", note: { fr: "environnement serveur", de: "Serverumgebung" }, status: "actif" },
      { name: "Express.js", note: { fr: "API backend", de: "Backend-API" }, status: "actif" },
      { name: "SQLite", note: { fr: "base de données relationnelle", de: "relationale Datenbank" }, status: "actif" },
      { name: "HTML / CSS", note: { fr: "structure et mise en forme", de: "Struktur und Gestaltung" }, status: "actif" },
    ],
  },
  {
    id: "office",
    label: { fr: "Bureautique", de: "Bürosoftware" },
    items: [{ name: "Microsoft Office", note: { fr: "Word, Excel, PowerPoint", de: "Word, Excel, PowerPoint" }, status: "actif" }],
  },
];

export const skillDomains = [
  {
    id: "sig",
    label: { fr: "SIG", de: "GIS" },
    desc: {
      fr: "Traitement de données spatiales, gestion de couches, requêtes et jointures attributaires sous QGIS.",
      de: "Verarbeitung räumlicher Daten, Layerverwaltung, räumliche und attributive Abfragen in QGIS.",
    },
    tools: ["QGIS", "SQL"],
  },
  {
    id: "cartographie",
    label: { fr: "Cartographie", de: "Kartografie" },
    desc: {
      fr: "Symbologie, mise en page cartographique, production de cartes thématiques pour des rapports de diagnostic territorial.",
      de: "Symbolik, Kartenlayout, Erstellung thematischer Karten für territoriale Diagnoseberichte.",
    },
    tools: ["QGIS", "Layout Manager"],
  },
  {
    id: "web",
    label: { fr: "Développement web", de: "Webentwicklung" },
    desc: {
      fr: "Construction d'interfaces frontend et d'API backend pour des outils de gestion de données territoriales.",
      de: "Aufbau von Frontend-Oberflächen und Backend-APIs für die Verwaltung territorialer Daten.",
    },
    tools: ["React", "Vite", "Node.js", "Express.js"],
  },
  {
    id: "webgis-dev",
    label: { fr: "Développement WebGIS", de: "WebGIS-Entwicklung" },
    desc: {
      fr: "Conception d'un système de visualisation et de gestion de données géospatiales en ligne — le module cartographique (Leaflet/GeoServer/PostGIS) est en cours de développement séparé.",
      de: "Konzeption eines Systems zur Online-Visualisierung und -Verwaltung von Geodaten — das Kartenmodul (Leaflet/GeoServer/PostGIS) befindet sich derzeit in separater Entwicklung.",
    },
    tools: ["Leaflet", "GeoServer", "PostGIS"],
  },
  {
    id: "bdd",
    label: { fr: "Bases de données", de: "Datenbanken" },
    desc: {
      fr: "Modélisation et interrogation de bases de données relationnelles.",
      de: "Modellierung und Abfrage relationaler Datenbanken.",
    },
    tools: ["SQLite", "SQL"],
  },
  {
    id: "analyse",
    label: { fr: "Analyse spatiale", de: "Räumliche Analyse" },
    desc: {
      fr: "Analyse multicritère, analyse de réseau, traitement de données de télédétection.",
      de: "Multikriterienanalyse, Netzwerkanalyse, Verarbeitung von Fernerkundungsdaten.",
    },
    tools: ["QGIS", "Google Earth Engine"],
  },
  {
    id: "geotraitement",
    label: { fr: "Géotraitement", de: "Geoverarbeitung" },
    desc: {
      fr: "Automatisation de chaînes de traitement géospatial avec des scripts Python.",
      de: "Automatisierung georäumlicher Verarbeitungsketten mit Python-Skripten.",
    },
    tools: ["Python", "QGIS"],
  },
  {
    id: "gestion",
    label: { fr: "Gestion de projet", de: "Projektmanagement" },
    desc: {
      fr: "Structuration de projets académiques de diagnostic territorial, du recueil de données à la restitution.",
      de: "Strukturierung akademischer Projekte zur territorialen Diagnostik, von der Datenerhebung bis zur Präsentation.",
    },
    tools: ["Rapport", "Méthodologie"],
  },
  {
    id: "amenagement",
    label: { fr: "Aménagement urbain", de: "Stadtplanung" },
    desc: {
      fr: "Diagnostic territorial, lecture réglementaire, formulation de recommandations d'aménagement.",
      de: "Territoriale Diagnostik, Auswertung von Vorschriften, Formulierung von Planungsempfehlungen.",
    },
    tools: ["PDAU", "POS", "RPA"],
  },
];

export const nav = [
  { id: "accueil", num: "01", label: { fr: "Accueil", de: "Start" } },
  { id: "apropos", num: "02", label: { fr: "À propos", de: "Über mich" } },
  { id: "competences", num: "03", label: { fr: "Compétences", de: "Kompetenzen" } },
  { id: "technologies", num: "04", label: { fr: "Technologies", de: "Technologien" } },
  { id: "architecture", num: "05", label: { fr: "Architecture", de: "Architektur" } },
  { id: "qgis", num: "06", label: { fr: "Portfolio QGIS", de: "QGIS-Portfolio" } },
  { id: "webgis", num: "07", label: { fr: "WebGIS", de: "WebGIS" } },
  { id: "demo", num: "08", label: { fr: "Démonstration", de: "Demonstration" } },
  { id: "etude-cas", num: "09", label: { fr: "Étude de cas — Aïn Bénian", de: "Fallstudie — Aïn Bénian" } },
  { id: "admin", num: "10", label: { fr: "Administration", de: "Administration" } },
  { id: "contact", num: "11", label: { fr: "Contact", de: "Kontakt" } },
  {
    id: "admin-panel",
    num: "12",
    label: { fr: "Panel Admin", de: "Admin-Panel" },
    external: "https://azzaz-geomatik.netlify.app/admin/#/collections/pages",
  },
];
