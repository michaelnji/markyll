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
  shortcuts: {
    btn: "py-1 px-4  rounded-lg font-bold shadow-md transition-all ease-linear duration-150",
    "btn-green": "text-green-50 bg-green-500 hover:bg-green-700",
    "btn-red": "text-red-50 bg-red-500 hover:bg-red-700",
    "btn-pink": "text-pink-50 bg-red-500 hover:bg-red-700",
    "btn-black": "text-gray-50 bg-black hover:bg-gray-700",
  },
  plugins: [
    require("windicss/plugin/typography"),
    // require("windicss/plugin/forms"),
    require("@windicss/animations")({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    require("@windicss/plugin-question-mark"),
    require("@windicss/plugin-scrollbar"),
  ],
});
