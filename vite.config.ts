import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://edgi9.github.io/ad-architect-app/', //For github pages
  plugins: [react()],
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: { 
    target: 'esnext' //browsers can handle the latest ES features
  },
})
