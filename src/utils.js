/**
 * Smoothly scrolls to an element by its id.
 * @param {string} id - Element id (without #)
 */
export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Zero-pads a number to a fixed width string.
 * @param {number} n
 * @param {number} width
 * @returns {string}
 */
export function zeroPad(n, width = 2) {
  return String(n).padStart(width, "0");
}
