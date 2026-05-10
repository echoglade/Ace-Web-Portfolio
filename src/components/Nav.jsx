import { NAV_ITEMS } from "../data";
import { scrollTo } from "../utils";
import FAIcon from "../icons/FAIcon";

export function Nav({ scrolled, theme, onToggleTheme }) {
  return (
    <nav className={scrolled ? "sc" : ""}>
      <div className="ni">
        <div
          className="nl"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ACE MARCIAL
        </div>

        <div className="nls">
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nr">
          <button className="tb" onClick={onToggleTheme} title="Toggle theme">
            {theme === "dark" ? (
              <FAIcon name="sun" size={16} color="var(--tx)" />
            ) : (
              <FAIcon name="moon" size={16} color="var(--tx)" />
            )}
          </button>
          <button className="nh" onClick={() => scrollTo("contact")}>
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
