

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            auth:'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd',
            baseURL: 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge/', 
        }
    },
    //Vuefify configuration
    css: [
        '@/assets/styles/fonts.css'
        // "vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.css"
    ],
    // build: {
    //     transpile: ["vuetify"],
    // },

})
