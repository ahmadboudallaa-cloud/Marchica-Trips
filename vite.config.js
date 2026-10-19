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
        'peche-en-mer': resolve(import.meta.dirname, 'pages/Pêche-en-mer.html'),
'excursion-en-bateau': resolve(import.meta.dirname, 'pages/Excursion-en-bateau.html'),
'jet-ski': resolve(import.meta.dirname, 'pages/Jet-Ski.html'),
'kitesurf': resolve(import.meta.dirname, 'pages/Kitesurf.html'),
'paddle': resolve(import.meta.dirname, 'pages/Paddle.html'),
'parasailing': resolve(import.meta.dirname, 'pages/Parasailing.html'),
'plongee': resolve(import.meta.dirname, 'pages/Plongée.html'),
'surf': resolve(import.meta.dirname, 'pages/Surf.html'),
      },
    },
  },
})