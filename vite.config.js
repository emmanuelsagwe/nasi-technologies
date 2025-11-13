import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths to fix React Router 404s on Vercel
  build: {
    outDir: 'dist' // optional, default is 'dist'
  }
})
