// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-swiper','vue-yandex-maps/nuxt','@nuxtjs/google-fonts'],
  yandexMaps: {
    apikey: 'aa11b5f1-497f-4872-968b-b068acf35bac',
  },
  tailwindcss: {
    cssPath: false,
  },
  googleFonts: {
    preload: true,
    families: {
      Roboto: {
        wght: [400, 500, 600, 700],
      },
    }
  },
  css: ['~/assets/style/global.scss'],
})
