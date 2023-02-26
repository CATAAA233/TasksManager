import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
export default defineNuxtPlugin((nuxt)=>{
    //plugin to use vuetify
    const vuetify = createVuetify({
        ssr:true,
        components,
        directives,
    })
    // nuxt.vueApp.use(vuetify);
})