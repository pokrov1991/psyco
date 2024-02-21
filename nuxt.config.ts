// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  axios: {
    baseUrl: '/'
  },
  css: ['~/assets/style/global.scss'],
})
