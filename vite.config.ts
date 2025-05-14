import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // src 별칭 -> @
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // 프론트 포트 번호
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 서버 주소
        changeOrigin: true,
      },
    },
  },
});
