import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'node:path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      },
      sass: {
        additionalData: `@import "@/styles/variables.sass"`
      }
    }
  }
})
