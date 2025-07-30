import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {fileURLToPath, URL} from 'node:url'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     tailwindcss(),
     AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        //resolvers: [ElementPlusResolver()],
      }),
    ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.jsx', 'json', '.ts', '.tsx', '.vue']
  },
    server: {
        port: 8008,
        // proxy: {
        //     '/api': {
        //         target: 'https://geo.datav.aliyun.com',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    }
})
