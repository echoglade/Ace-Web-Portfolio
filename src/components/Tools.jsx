import { useRef } from "react";
import { useVisible } from "../hooks";
import { Icon } from "../icons";
import { TOOLS } from "../data";

function ToolCard({ tool, visible, delay }) {
  return (
    <div className="tc">
      <div className="tiw">
        <Icon name={tool.key} size={20} />
      </div>
      <div className="tn">{tool.name}</div>
      <div className="te">{tool.where}</div>
      <div className="bt">
        <div className="bf" style={{ width: "100%", background: tool.gr }} />
      </div>
    </div>
  );
}

export function Tools() {
  const ref     = useRef(null);
  const visible = useVisible(ref, 0.1);

  return (
    <section id="tools" ref={ref}>
      <div className="wrap">
        <div className={`rv ${visible ? "in" : ""}`}>
          <div className="tag">Expertise</div>
          <h2 className="h1">
            Tools of the <span className="gr">Craft</span>
          </h2>
        </div>
        <div className="tg">
          {TOOLS.map((tool, i) => (
            <ToolCard
              key={tool.key}
              tool={tool}
              visible={visible}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
