TailwindCSS Setup

- Tailwind configured via tailwind.config.js and postcss.config.js
- Global CSS imported in src/index.css -> src/styles/tailwind.css
- Brand colors:
  - primary: #2563EB
  - secondary: #64748B
  - accent: #22C55E
- Dark mode enabled via .dark class on root (optional)
- shadcn-style primitives available: src/components/ui/button.jsx
- Utility: src/lib/utils.js (cn helper)

To verify:
- npm start
- Home screen shows brand header and several Button variants using Tailwind classes.
