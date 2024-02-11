import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-client/",
  server: {
    port: 8080,
    proxy: {
      '/api': 'https://ecommerce-api-black-theta.vercel.app/',
    },
  },
  
})
