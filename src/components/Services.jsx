import { useRef } from "react";
import { useVisible } from "../hooks";
import { Icon } from "../icons";
import { SERVICES } from "../data";
import { zeroPad } from "../utils";

function ServiceCard({ service, index, visible }) {
  return (
    <div
      className={`sc2 rv ${visible ? "in" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="snum">{zeroPad(index + 1)}</div>
      <div className="siw">
        <Icon name={service.key} size={18} />
      </div>
      <div className="stit">{service.title}</div>
      <div className="sdesc">{service.desc}</div>
      <div className="sgl" style={{ background: service.color }} />
    </div>
  );
}

export function Services() {
  const ref     = useRef(null);
  const visible = useVisible(ref, 0.1);

  return (
    <section id="services" ref={ref}>
      <div className="wrap">
        <div className={`rv ${visible ? "in" : ""}`}>
          <div className="tag">What I Do</div>
          <h2 className="h1">
            Creative <span className="gr">Services</span>
          </h2>
        </div>
        <div className="sg">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
