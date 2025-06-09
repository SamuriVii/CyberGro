import fs from 'fs';
import mkcert from 'vite-plugin-mkcert'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    https: {
      key: fs.readFileSync('./cert/localhost-key.pem').toString(),
      cert: fs.readFileSync('./cert/localhost.pem').toString()
    },
    port: 3000,
    host: 'localhost'
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
  vite: {
    plugins: [mkcert()]
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'CyberGro - Cyberpunk Marketplace',
      short_name: 'CyberGro',
      description: 'Explore the future of cyberpunk tech and gear',
      theme_color: '#4A90E2',
      icons: [
        {
          src: '/pwa-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})