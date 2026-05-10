import { useState, useEffect } from "react";
import { FontLoader, Cursor, Nav, Hero, About, Projects, Tools, Services, Contact, Footer } from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useScrolled } from "./hooks";
import ThemeContext from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
      // ignore (SSR or non-browser env)
    }
  }, [theme]);
  const scrolled = useScrolled(48);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  // Parallax ambient motion for decorative orbs — updates transforms on scroll using rAF
  useEffect(() => {
    let running = false;
    const orb1 = document.querySelector(".orb1");
    const orb2 = document.querySelector(".orb2");

    const onScroll = () => {
      if (running) return;
      running = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (orb1) orb1.style.transform = `translate3d(${Math.min(y * 0.06, 40)}px, ${Math.min(y * 0.02, 24)}px, 0) rotate(${y * 0.02}deg)`;
        if (orb2) orb2.style.transform = `translate3d(${Math.max(-y * 0.04, -40)}px, ${Math.min(y * 0.01, 20)}px, 0) rotate(${y * -0.015}deg)`;
        running = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial position
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <FontLoader />
        <GlobalStyles theme={theme} />

        {/* Ambient overlay */}
        <div className="noise" />

        {/* Custom cursor */}
        <Cursor />

        {/* Navigation */}
        <Nav
          scrolled={scrolled}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Page sections */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Tools />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
