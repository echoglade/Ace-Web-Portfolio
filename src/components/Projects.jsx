import { useRef, useState } from "react";
import { useVisible } from "../hooks";
import { Icon } from "../icons";
import { PROJECTS, TOOLS, PROJECT_FILTERS, CAT_ICON } from "../data";

// Build a name lookup from tool key → display name
const TOOL_NAME = Object.fromEntries(TOOLS.map((t) => [t.key, t.name]));

function ProjectCard({ project, visible, delay, onView }) {
  // derive a thumbnail: prefer project.img, fall back to YouTube thumbnail when embed exists
  let thumbnail = null;
  if (project.img) {
    thumbnail = project.img;
  } else if (project.embed) {
    const m = project.embed.match(/embed\/([^"?'<>]+)/);
    thumbnail = m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
  }
  return (
    <div
      className={`pc rv ${visible ? "in" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Thumbnail */}
      <div className="pth" style={{ background: project.bg }} onClick={() => onView(project)}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={project.title}
            className="pth-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              left: 0,
              top: 0,
            }}
          />
        ) : null}

        {/* removed overlay elements so image shows clean */}
      </div>

      {/* Body */}
      <div className="pb">
        <div className="pcat" style={{ color: project.color }}>{project.cat}</div>
        <div className="pt">{project.title}</div>
        <div className="pd">{project.desc}</div>
        <div className="ptools">
          {project.tools.map((key) => (
            <span key={key} className="ptag">
              <Icon name={key} size={10} />
              {TOOL_NAME[key] || key}
            </span>
          ))}
        </div>
        <a
          className="plink"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onView(project);
          }}
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

function VideoEmbed({ embed, title }) {
  const srcMatch = embed && embed.match(/src\s*=\s*"([^"]+)"/);
  const src = srcMatch ? srcMatch[1] : null;
  if (src) {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "90vw", maxWidth: "900px", boxSizing: "border-box" }}
      >
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src={src}
            title={title || "Embedded video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  }
  return <div className="image-modal-embed" onClick={(e) => e.stopPropagation()} dangerouslySetInnerHTML={{ __html: embed }} />;
}

export function Projects() {
  const ref     = useRef(null);
  const visible = useVisible(ref, 0.05);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const shown =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.f === filter);
  return (
    <section id="projects" ref={ref}>
      <div className="wrap">
        <div className={`rv ${visible ? "in" : ""}`}>
          <div className="tag">Selected Work</div>
          <h2 className="h1">
            Featured <span className="gr">Projects</span>
          </h2>
        </div>

        {/* Filter bar */}
        <div className={`fbar rv ${visible ? "in" : ""}`}>
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.k}
              className={`fb ${filter === f.k ? "on" : ""}`}
              onClick={() => setFilter(f.k)}
            >
              {f.l}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pg">
          {shown.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              visible={visible}
              delay={i * 0.07}
              onView={(p) => setSelected(p)}
            />
          ))}
        </div>

        {/* Image / Video modal/lightbox */}
        {selected ? (
          <div
            className="image-modal"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="image-modal-close"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
              aria-label="Close"
            >
              ✕
            </button>
            {selected.embed ? (
              <VideoEmbed embed={selected.embed} title={selected.title} />
            ) : (
              <img
                src={selected.img}
                alt={selected.title}
                className="image-modal-img"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
