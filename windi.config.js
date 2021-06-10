import { defineConfig } from "vite-plugin-windicss";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}
export default defineConfig({
  transformCSS: "pre",
  safelist: [
    range(30).map((i) => `p-${i}`), // p-1 to p-3
    range(10).map((i) => `mt-${i}`), // mt-1 to mt-10
  ],
  extract: {
    include: ["src/**/*.{svelte,html,js,ts}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    // ...
  },
  plugins: [
    require("windicss/plugin/typography"),
    // ...
  ],
});
