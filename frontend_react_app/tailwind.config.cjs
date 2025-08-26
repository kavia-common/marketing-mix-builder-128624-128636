/** Minimal Tailwind config to support editor tooling and content scanning.
 * Tailwind v4 is driven by @tailwindcss/postcss plugin in postcss.config.cjs.
 */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
