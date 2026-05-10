import { NAV_ITEMS, SOCIALS } from "../data";
import { Icon } from "../icons";
import { scrollTo } from "../utils";

export function Footer() {
  return (
    <footer>
      <div className="fin">
        <div>
          <div className="flogo">ACE MARCIAL</div>
          <div className="fcp">©2026 Ace Marcial · All rights reserved</div>
        </div>

        <button
          className="bo"
          style={{ padding: "8px 16px", fontSize: "10px" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
