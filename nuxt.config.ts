// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'MODELI - Modélisation financière immobilière SaaS',
      meta: [
        { name: 'description', content: 'Solution SaaS de modélisation financière immobilière pour investisseurs, promoteurs et professionnels de l\'immobilier.' },
        { name: 'keywords', content: 'modélisation financière, immobilier, SaaS, VAN, TRI, ROI, investissement' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  vite: {
    plugins: [
      [require('vite-svg-loader')()]
    ]
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})