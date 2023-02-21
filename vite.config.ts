import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://edgi9.github.io/ad-architect-app/',
  plugins: [react()],
})
