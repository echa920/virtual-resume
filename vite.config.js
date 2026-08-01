import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://echa920.github.io/virtual-resume/ on GitHub Pages.
  // Change to '/' if you move this to a custom domain or the user site repo.
  base: '/virtual-resume/',
})
