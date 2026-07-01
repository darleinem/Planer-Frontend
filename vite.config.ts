// @ts-ignore
import { defineConfig } from 'vite'

// @ts-ignore
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ]
})
