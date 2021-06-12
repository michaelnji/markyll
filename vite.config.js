import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import WindiCSS from "vite-plugin-windicss";
import babel from "vite-babel-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCSS(),  babel(),],
});
