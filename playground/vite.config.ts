// import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /^@HMagic\/editor/,
        replacement: path.join(__dirname, '../packages/editor/src/main.ts')
      },
      {
        find: /^@HMagic\/editor\/type/,
        replacement: path.join(__dirname, '../packages/editor/type.ts')
      },
      {
        find: /^@HMagic/,
        replacement: path.join(__dirname, '../packages/editor/src')
      }
    ]
  }
})
