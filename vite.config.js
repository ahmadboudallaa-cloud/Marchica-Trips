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
       'peche-en-mer': resolve(import.meta.dirname, 'pages/activites/Pêche-en-mer.html'),
'excursion-en-bateau': resolve(import.meta.dirname, 'pages/activites/Excursion-en-bateau.html'),
'jet-ski': resolve(import.meta.dirname, 'pages/activites/Jet-Ski.html'),
'kitesurf': resolve(import.meta.dirname, 'pages/activites/Kitesurf.html'),
'paddle': resolve(import.meta.dirname, 'pages/activites/Paddle.html'),
'parasailing': resolve(import.meta.dirname, 'pages/activites/Parasailing.html'),
'plongee': resolve(import.meta.dirname, 'pages/activites/Plongée.html'),
'surf': resolve(import.meta.dirname, 'pages/activites/Surf.html'),
      },
    },
  },
})