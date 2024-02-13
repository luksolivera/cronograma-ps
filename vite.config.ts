import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/cronograma-ps/',
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material/styles']
  },
})
