import { useRef } from "react";
import portrait from "../assets/dp.png";
import { useVisible, useCountUp } from "../hooks";
import { ABOUT_STATS } from "../data";

function StatCard({ n, label, active }) {
  const value = useCountUp(n, active);
  return (
    <div className="asc gl">
      <div className="asn">{value}+</div>
      <div className="asl">{label}</div>
    </div>
  );
}

export function About() {
  const ref     = useRef(null);
  const visible = useVisible(ref, 0.08);

  return (
    <section id="about" ref={ref}>
      <div className="wrap">
        <div className="ag">
          {/* Image placeholder */}
          <div className={`rl ${visible ? "in" : ""}`}>
            <div className="aib">
              <img src={portrait} alt="Portrait" className="aimage" />
            </div>
          </div>

          {/* Text content */}
          <div className={`rr ${visible ? "in" : ""}`}>
            <div className="tag">About Me</div>
            <h2 className="h1">
              Crafting <span className="gr">Vision</span>
              <br />
              into Reality
            </h2>
            <p className="abio">
              Creative multimedia and graphic designer with experience basic in creating banners, layouts,
              infographics, and basic video editing projects. Skilled im using modern digital and AI-assited
              tools.
            </p>
            <p className="abio" style={{ marginTop: "-10px" }}>
              Every frame is intentional. Every composition deliberate. Every
              pixel earns its place.
            </p>
            <div style={{ display: "flex", gap: "11px", flexWrap: "wrap" }}>
              <button className="bp">Download CV</button>
              <button className="bo">View Process</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
