import { scrollTo } from "../utils";

const ROLES = ["Video Editor", "Graphic Designer"];

export function Hero() {
  return (
    <section id="hero">
      <div className="orb1" />
      <div className="orb2" />
      <div className="hgrid" />

      <div className="hc">
        <div className="hchip">
          <div className="hdot" />
          Available for projects
        </div>

        <h1 className="ht">
          <span>VISUAL</span>
          <br />
          <span className="gr">STORY</span>
          <br />
          <span>TELLER</span>
        </h1>

        <div className="hroles">
          {ROLES.map((role) => (
            <div key={role} className="hpill">
              <div className="hpilldot" />
              {role}
            </div>
          ))}
        </div>

        <p className="hsub">
          Crafting cinematic visuals and impactful digital experiences — for
          brands, creators, and studios that demand excellence.
        </p>

        <div className="hbtns">
          <button className="bp" onClick={() => scrollTo("projects")}>
            View Projects →
          </button>
          <button className="bo" onClick={() => scrollTo("contact")}>
            Get in Touch
          </button>
        </div>
      </div>

      <div className="hscroll" onClick={() => scrollTo("about")}>
        <div className="sline" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
