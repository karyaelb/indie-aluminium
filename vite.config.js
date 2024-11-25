import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteImagemin from "vite-plugin-imagemin"; // import plugin lain

export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      pngquant: {
        quality: [0.6, 0.8],
      },
      gifsicle: {
        optimizationLevel: 3,
      },
      // Tambahkan konversi ke WebP
      webp: {
        quality: 75, // Mengatur kualitas untuk WebP
      },
    }),
  ],
});
