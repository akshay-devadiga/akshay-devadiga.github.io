// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    markdown: { remarkPlugins: ['remark-reading-time'] },
    highlight: {
      theme: "github-dark",
  },
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    ['@nuxtjs/google-fonts', {
      display: "swap",
      families: {
        "Bebas Neue":true,
        Roboto: true,
        Poppins:true,
        'JetBrains Mono':true,
        Inter: [400, 700],
         'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
      }
  }],
  ]
})
