import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { injectSeoHtmlPlugin } from './src/seo/injectSeoHtmlPlugin'

export default defineConfig({
  plugins: [react(), tailwindcss(), injectSeoHtmlPlugin()],
  server: {
    watch: {
      ignored: ['**/public/projects/**'],
    },
  },
})
