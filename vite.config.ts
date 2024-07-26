import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// process.env['REACT_APP_BASEURL'] = 'https://eth.space-pi.dev'
process.env['REACT_APP_BASEURL'] = 'https://eth.space-pi.dev'
process.env["API_URL"] = 'https://eth.space-pi.com/api'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env['REACT_APP_BASEURL'],
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [
        path.resolve(process.cwd(), 'src/components/icon/svg'),
        path.resolve(process.cwd(), 'public'),
        path.resolve(process.cwd(), 'src/assets/svg')
      ],
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    globals: {
      globalThis: 'globalThis'
    },
    process: process.env
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          globalThis: 'globalThis'
        }
      }
    }
  },
  server: {
    port: 82,
    host: true,
    open: true,
    hmr: {
      clientPort: 82
    },
    proxy: {
      '/mid': {
        target: 'https://api.ethplorer.io/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mid/, '')
      }
    }
  }
})
