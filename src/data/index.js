/* ─── NAVIGATION ─────────────────────────────────────────────────────────────── */
export const NAV_ITEMS = [
  ["about", "About"],
  ["projects", "Work"],
  ["tools", "Tools"],
  ["services", "Services"],
  ["contact", "Contact"],
];

// Graphic project images (imported so Vite packs them)
import marcialAdv from "../assets/graphics_project/Marcial advocacy poster.webp";
import marcialBanner1 from "../assets/graphics_project/Marcial banner (1).webp";
import marcialBanner from "../assets/graphics_project/Marcial banner.webp";
import marcialWomens from "../assets/graphics_project/Marcial womens month creation.webp";

/* ─── PROJECTS ──────────────────────────────────────────────────────────────── */
export const PROJECTS = [
  {
    id: 1,
    f: "video",
    cat: "Video Editing",
    title: "Event highlights — Hack4Gov 2025",
    desc: "This video showcases the event highlights of Hack4Gov 2025, featuring cybersecurity competitions, team collaborations, intense Capture-the-Flag challenges, and the skills of aspiring ethical hackers and IT students from across the Philippines",
    tools: ["capcut", "canva", "jitter"],
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0H3hIOstWAQ?si=XUf4HnkTj8LfTGDl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    color: "#3b82f6",
    bg: "linear-gradient(135deg,rgba(59,130,246,.14),rgba(59,130,246,.04))",
  },
  {
    id: 2,
    f: "video",
    cat: "Video Editing",
    title: "How AI helps People",
    desc: "Animated video with light colors and moving objects for a cheerful and engaging style. Explains how AI is used in daily life, work, and studies to help with tasks and learning.",
    tools: ["canva", "chatgpt", "elevenlabs"],
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-EtDv3oWso?si=ZKC3pH6PofjGRlcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    color: "#f97316",
    bg: "linear-gradient(135deg,rgba(249,115,22,.14),rgba(249,115,22,.04))",
  },
  {
    id: 3,
    f: "video",
    cat: "Video Editing",
    title: "Short Film — Hanggang kailan ang kakulanggna?",
    desc: "A cinematic short film with dark tones that portrays the emotional struggles of a child and mother facing financial hardship, enhanced by dramatic background music.",
    tools: ["capcut", "davinciresolve", "chatgpt", "jitter", "paper animator", "elevenlabs"],
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2jDjXRaS3xk?si=UAoNMI6LKuOo0c28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    color: "#8b5cf6",
    bg: "linear-gradient(135deg,rgba(139,92,246,.14),rgba(139,92,246,.04))",
  },
  {
    id: 4,
    f: "video",
    cat: "Video Editing",
    title: "What is DICT?",
    desc: "Animated project with light colors for a fun and friendly visual style. Uses moving stickers and dynamic elements to make the content engaging.",
    tools: ["canva", "chatgpt", "elevenlabs"],
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lI9pemT9MM0?si=05sbwkGL_Woi-fiW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    color: "#06b6d4",
    bg: "linear-gradient(135deg,rgba(6,182,212,.14),rgba(6,182,212,.04))",
  },
  {
    id: 5,
    f: "graphic",
    cat: "Graphic Design",
    title: "Poster — Gasolina",
    desc: "This advocacy poster features a single cinematic image with deep meaning, using cinematic color grading, lighting, and composition to create a dramatic and emotional atmosphere that tells a powerful story and expresses creativity and perspective .",
    tools: ["canva", "autosketch"],
    img: marcialAdv,
    color: "#06b6d4",
    bg: "linear-gradient(135deg,rgba(6,182,212,.14),rgba(6,182,212,.04))",
  },
  {
    id: 6,
    f: "graphic",
    cat: "Graphic Design",
    title: "ESPORTS — banner",
    desc: "This poster uses cinematic visuals, dark tones, and dramatic lighting to promote respect for women and raise awareness about the harmful effects of sexism, disrespect, and objectification.",
    tools: ["canva"],
    img: marcialBanner1,
    color: "#f97316",
    bg: "linear-gradient(135deg,rgba(249,115,22,.14),rgba(249,115,22,.04))",
  },
  {
    id: 7,
    f: "graphic",
    cat: "Graphic Design",
    title: "ESPORTS — banner",
    desc: "Gaming poster highlights esports and teamwork in Mobile Legends. It uses red tones and dramatic effects for an energetic, competitive feel.",
    tools: ["autosketch", "capcut", "chatgpt"],
    img: marcialBanner,
    color: "#f97316",
    bg: "linear-gradient(135deg,rgba(249,115,22,.14),rgba(249,115,22,.04))",
  },
  {
    id: 8,
    f: "graphic",
    cat: "Graphic Design",
    title: "POSTER — Women's Month",
    desc: "This poster promotes respect for women and responsible speech through a cinematic image. It uses dark tones, lighting, and color grading for a strong emotional effect",
    tools: ["canva"],
    img: marcialWomens,
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
  { key: "gemini",         name: "Gemini",          where: "Generate Elements", gr: "linear-gradient(135deg,#9ca3ff,#6b7280)" },
  { key: "paperanimator",  name: "Paper Animator",  where: "Animation", gr: "linear-gradient(135deg,#f97316,#f59e0b)" },
  { key: "jitter",         name: "Jitter",          where: "Video Elements", gr: "linear-gradient(135deg,#9ca3ff,#6b7280)" },
];

/* ─── SERVICES ──────────────────────────────────────────────────────────────── */
export const SERVICES = [
  { key: "premiere",       title: "Video Editing",   desc: "Cinematic storytelling, seamless pacing, colour grading, and audio mixing — for brand films, docs, and reels.", color: "#3b82f6" },
  { key: "lightroom",      title: "Photo Editing", desc: "Professional retouching and compositing — editorial portraits and product shots.", color: "#4481eb" },
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
