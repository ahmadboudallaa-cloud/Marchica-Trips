import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/Marchica-Trips/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        activites: resolve(import.meta.dirname, 'pages/activites.html'),
        reservation: resolve(import.meta.dirname, 'pages/reservation.html'),
        faq: resolve(import.meta.dirname, 'pages/faq.html'),
      },
    },
  },
})