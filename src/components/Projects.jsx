import { useRef, useState } from "react";
import { useVisible } from "../hooks";
import { Icon } from "../icons";
import { PROJECTS, TOOLS, PROJECT_FILTERS, CAT_ICON } from "../data";

// Build a name lookup from tool key → display name
const TOOL_NAME = Object.fromEntries(TOOLS.map((t) => [t.key, t.name]));

function ProjectCard({ project, visible, delay }) {
  return (
    <div
      className={`pc rv ${visible ? "in" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Thumbnail */}
      <div className="pth" style={{ background: project.bg }}>
        <div className="pthi" style={{ flexDirection: "column", gap: 12 }}>
          <div
            style={{
              padding: 14,
              borderRadius: 12,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Icon name={CAT_ICON[project.f]} size={34} />
          </div>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
            }}
          >
            {project.cat}
          </span>
        </div>
        <div className="pov">
          <div className="pplay">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
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
        <a className="plink" href="#" onClick={(e) => e.preventDefault()}>
          View Project →
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  const ref     = useRef(null);
  const visible = useVisible(ref, 0.05);
  const [filter, setFilter] = useState("all");

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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
