import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures paths work on Vercel/Netlify
  build: {
    outDir: 'dist',      // Must match netlify.toml
    emptyOutDir: true,   // Clears the folder before build
  },
  server: {
    port: 5173,          // Optional: Vite dev server port
  },
});
