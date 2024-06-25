// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: !!process.env.IS_DEVTOOLS},

    css: ['~/app/assets/css/main.scss'],

    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },

    modules: [
        "@nuxt/ui", 
        "nuxt-icon"
    ],

    runtimeConfig: {
        public: {
          BASE_URL: process.env.BASE_URL,
        },
    }
})