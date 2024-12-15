import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "service-admin-iit",
      filename: "remoteEntry.js",
      exposes: {
        "./iit": "./src/App.tsx",
        "./exposes": "./src/exposes.ts",
      },
      shared: ["react", "react-dom", "react-router"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
