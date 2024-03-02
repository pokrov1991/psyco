// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui','nuxt-swiper','vue-yandex-maps/nuxt'],
  yandexMaps: {
    apikey: 'aa11b5f1-497f-4872-968b-b068acf35bac',
  },
  tailwindcss: {
    cssPath: false,
  },
  css: ['~/assets/style/global.scss'],
})
