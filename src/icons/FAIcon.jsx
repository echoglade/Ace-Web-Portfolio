import { useState, useEffect } from "react";
import { Icon as SvgIcon } from "./index";

// Mapping of logical keys to FontAwesome export names and packages
const MAP = {
  instagram: { pkg: "brands", export: "faInstagram" },
  facebook: { pkg: "brands", export: "faFacebook" },
  tiktok: { pkg: "brands", export: "faTiktok" },
  youtube: { pkg: "brands", export: "faYoutube" },
  linkedin: { pkg: "brands", export: "faLinkedin" },
  behance: { pkg: "brands", export: "faBehance" },
  // theme icons
  sun: { pkg: "solid", export: "faSun" },
  moon: { pkg: "solid", export: "faMoon" },
};

export default function FAIcon({ name, size = 18, color }) {
  const [lib, setLib] = useState(null);

  useEffect(() => {
    let mounted = true;
    const m = MAP[name];
    if (!m) return;

    (async () => {
      try {
        let mod;
        if (m.pkg === "brands") {
          mod = await import("@fortawesome/free-brands-svg-icons");
        } else if (m.pkg === "solid") {
          mod = await import("@fortawesome/free-solid-svg-icons");
        } else {
          // unknown package - don't attempt to import regular pack (not installed)
          mod = null;
        }

        const fa = await import("@fortawesome/react-fontawesome");
        if (!mounted) return;
        setLib({ fa: fa.FontAwesomeIcon, mod });
      } catch (e) {
        // fail silently — we'll fallback to SvgIcon
        setLib(null);
      }
    })();

    return () => (mounted = false);
  }, [name]);

  const mapping = MAP[name];
  if (!mapping) return <SvgIcon name={name} size={size} color={color} />;

  if (!lib) return <SvgIcon name={name} size={size} color={color} />;

  const IconComponent = lib.fa;
  const iconDef = lib.mod[mapping.export];
  if (!iconDef) return <SvgIcon name={name} size={size} color={color} />;

  return (
    <IconComponent icon={iconDef} style={{ width: size, height: size, color }} />
  );
}
