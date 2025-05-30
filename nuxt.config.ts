import fs from 'fs';
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
  modules: ['@nuxtjs/tailwindcss']
})
