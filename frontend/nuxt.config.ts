// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/app/assets/css/main.scss'],

    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },

    modules: ["@nuxt/ui", "nuxt-icon"]
})