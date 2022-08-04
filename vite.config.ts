import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process': null,
    'process.versions': null,
    'process.env': {}
  },
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
})
