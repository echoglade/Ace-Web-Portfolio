/* ─── NAVIGATION ─────────────────────────────────────────────────────────────── */
export const NAV_ITEMS = [
  ["about", "About"],
  ["projects", "Work"],
  ["tools", "Tools"],
  ["services", "Services"],
  ["contact", "Contact"],
];

/* ─── PROJECTS ──────────────────────────────────────────────────────────────── */
export const PROJECTS = [
  {
    id: 1,
    f: "video",
    cat: "Video Editing",
    title: "Neon Pulse — Brand Film",
    desc: "Cinematic brand film capturing raw energy for a streetwear label. Precision cuts and moody colour grading.",
    tools: ["premiere", "davinciresolve", "aftereffects"],
    color: "#3b82f6",
    bg: "linear-gradient(135deg,rgba(59,130,246,.14),rgba(59,130,246,.04))",
  },
  {
    id: 2,
    f: "video",
    cat: "Video Editing",
    title: "Documentary: The Drift",
    desc: "Award-nominated 26-min short on underground car culture. Intimate storytelling, brutal pace.",
    tools: ["premiere", "davinciresolve"],
    color: "#f97316",
    bg: "linear-gradient(135deg,rgba(249,115,22,.14),rgba(249,115,22,.04))",
  },
  {
    id: 3,
    f: "photo",
    cat: "Photography",
    title: "APEX — Editorial Shoot",
    desc: "Premium editorial series for a fitness brand — studio and on-location with full retouching pipeline.",
    tools: ["lightroom", "photoshop"],
    color: "#8b5cf6",
    bg: "linear-gradient(135deg,rgba(139,92,246,.14),rgba(139,92,246,.04))",
  },
  {
    id: 4,
    f: "photo",
    cat: "Photography",
    title: "Architecture in Light",
    desc: "Long-form architectural photography project across 8 cities — form, shadow, material, and silence.",
    tools: ["lightroom", "photoshop"],
    color: "#06b6d4",
    bg: "linear-gradient(135deg,rgba(6,182,212,.14),rgba(6,182,212,.04))",
  },
  {
    id: 5,
    f: "graphic",
    cat: "Graphic Design",
    title: "LUMINA — Album Artwork",
    desc: "Immersive visual world for an indie electronic album — sleeve, streaming assets, and OOH campaign.",
    tools: ["photoshop", "illustrator"],
    color: "#06b6d4",
    bg: "linear-gradient(135deg,rgba(6,182,212,.14),rgba(6,182,212,.04))",
  },
  {
    id: 6,
    f: "graphic",
    cat: "Graphic Design",
    title: "SOLSTICE — Poster Series",
    desc: "12-piece limited-edition poster series. Screen-print aesthetic with digital compositing and hand-drawn elements.",
    tools: ["illustrator", "photoshop", "figma"],
    color: "#f97316",
    bg: "linear-gradient(135deg,rgba(249,115,22,.14),rgba(249,115,22,.04))",
  },
];

/* ─── TOOLS ─────────────────────────────────────────────────────────────────── */
export const TOOLS = [
  { key: "davinciresolve", name: "DaVinci Resolve", where: "Video Editing", gr: "linear-gradient(135deg,#ff5f57,#c0392b)" },
  { key: "autosketch",     name: "Auto Sktech",     where: "2D Vector", gr: "linear-gradient(135deg,#9ca3ff,#6b7280)" },
  { key: "canva",          name: "Canva",           where: "Editing", gr: "linear-gradient(135deg,#00c4cc,#7d2ae8)" },
  { key: "figma",          name: "Figma",           where: "UI/Layout", gr: "linear-gradient(135deg,#a259ff,#6b2dff)" },
  { key: "capcut",         name: "CapCut",          where: "Video Editing", gr: "linear-gradient(135deg,#555,#111)" },
  { key: "alignmotion",    name: "Align Motion",    where: "Video Editing", gr: "linear-gradient(135deg,#ff7eb6,#ff65a3)" },
  { key: "lightroom",      name: "Lightroom",       where: "Photo Color Grading", gr: "linear-gradient(135deg,#4481eb,#04befe)" },
  { key: "chatgpt",        name: "ChatGPT",         where: "Research", gr: "linear-gradient(135deg,#0ea5a4,#06b6d4)" },
  { key: "gemini",         name: "Gemini",          where: "Generate Elements", gr: "linear-gradient(135deg,#f97316,#f59e0b)" },
];

/* ─── SERVICES ──────────────────────────────────────────────────────────────── */
export const SERVICES = [
  { key: "premiere",       title: "Video Editing",   desc: "Cinematic storytelling, seamless pacing, colour grading, and audio mixing — for brand films, docs, and reels.", color: "#3b82f6" },
  { key: "lightroom",      title: "Photography Edit", desc: "Professional retouching and compositing — editorial portraits, product shots, and architectural photography.", color: "#4481eb" },
  { key: "illustrator",    title: "Graphic Design",   desc: "Visual communication at its sharpest — posters, album art, editorial layouts, and identity collateral.", color: "#06b6d4" },
  { key: "davinciresolve", title: "Colour Grading",   desc: "Cinematic colour science for video and stills. Emotionally driven, consistent, broadcast-ready looks.", color: "#ff5f57" },
  { key: "aftereffects",   title: "VFX & Titles",     desc: "Motion titles, visual effects, and kinetic typography that elevate storytelling and add a premium finish.", color: "#8b5cf6" },
  { key: "figma",          title: "Content Design",   desc: "Social-native graphics, thumbnails, and campaign assets — engineered for impact across every platform.", color: "#a259ff" },
];

/* ─── SOCIAL LINKS ──────────────────────────────────────────────────────────── */
export const SOCIALS = [
  { key: "instagram", url: "https://www.instagram.com/jeescyyy?igsh=ODMybGF4cmJneDA5" },
  { key: "facebook",  url: "https://www.facebook.com/share/1ApsQZTBN1/" },
  { key: "tiktok",    url: "https://www.tiktok.com/@favbayonet?_r=1&_t=ZS-96FVXe1eTCe" },
];

/* ─── CONTACT INFO ──────────────────────────────────────────────────────────── */
export const CONTACT_INFO = [
  { ic: "✉", t: "jesiemarcial1@gmail.com" },
  { ic: "📍", t: "Iloilo, PH — Remote" },
  { ic: "⚡", t: "Response within 24 hours" },
];

/* ─── PROJECT FILTER TABS ─────────────────────────────────────────────────── */
export const PROJECT_FILTERS = [
  { k: "all",     l: "All Work" },
  { k: "video",   l: "Video Editing" },
  { k: "photo",   l: "Photography" },
  { k: "graphic", l: "Graphic Design" },
];

/* ─── CATEGORY → ICON MAP ─────────────────────────────────────────────────── */
export const CAT_ICON = {
  video:   "premiere",
  photo:   "lightroom",
  graphic: "illustrator",
};

/* ─── ABOUT STATS ────────────────────────────────────────────────────────────── */
export const ABOUT_STATS = [
  { n: 120, label: "Projects Done" },
  { n: 5,   label: "Years Active" },
  { n: 48,  label: "Happy Clients" },
];
