import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
      },
    },
  },
})
