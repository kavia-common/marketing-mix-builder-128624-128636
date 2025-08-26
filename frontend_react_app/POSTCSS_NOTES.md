We use postcss.config.cjs (CommonJS) for CRA 5 compatibility so PostCSS loads properly.

Plugins:
- @tailwindcss/postcss
- autoprefixer

If you see an error about using `tailwindcss` directly as a PostCSS plugin, verify:
1) @tailwindcss/postcss is installed (dev dependency)
2) postcss.config.cjs uses: module.exports = { plugins: [ require("@tailwindcss/postcss"), require("autoprefixer") ] }
3) No other tailwindcss plugin entries in config or build chain
4) Do a clean install: rm -rf node_modules && npm ci (CI may cache)
