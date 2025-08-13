import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: ["sharing-glider-ualf--3000.pluralsight.run", "http://localhost:3000/", "http://0.0.0.0:3000/"],
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Origin", "http://localhost:3000"); // Override the origin
          });
        },
        headers: {
          "Access-Control-Allow-Credentials": "true",
        },
      },
    },
  },
});
