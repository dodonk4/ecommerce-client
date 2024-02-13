import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      // '/api': 'http://localhost:3000/',
      '/api': {
        target: 'https://ecommerce-api-black-theta.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  
})

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//     },
//     plugins: [react()],
//     proxy: {
//       '/api': 'https://ecommerce-api-black-theta.vercel.app/',
//     },
// }
// })