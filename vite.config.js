import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the custom domain https://skelectronics.tech, so assets live at the root.
// (If you ever go back to username.github.io/skelectronics/, change this to "/skelectronics/".)
export default defineConfig({
  plugins: [react()],
  base: "/",
});
