import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vuetify  from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ vue(), vuetify() ],
  resolve: {
    alias: {
      '@': resolve( __dirname, 'src' ),

      '@components': resolve( __dirname, 'src', 'components' ),

      '@consts': resolve( __dirname, 'src', 'consts' ),

      '@layouts': resolve( __dirname, 'src', 'layouts' ),
    },
  },
} )
