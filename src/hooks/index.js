import { useState, useEffect } from "react";

/**
 * Fires once when the referenced element enters the viewport.
 * @param {React.RefObject} ref - Element to observe
 * @param {number} threshold - IntersectionObserver threshold (0–1)
 * @returns {boolean} visible
 */
export function useVisible(ref, threshold = 0.12) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return visible;
}

/**
 * Animates a number from 0 to `target` over `duration` ms once `active` is true.
 * @param {number} target
 * @param {boolean} active
 * @param {number} duration - ms
 * @returns {number} current animated value
 */
export function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return value;
}

/**
 * Tracks whether the page has been scrolled past `offset` pixels.
 * @param {number} offset
 * @returns {boolean}
 */
export function useScrolled(offset = 48) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [offset]);

  return scrolled;
}
