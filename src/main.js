import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'

import './assets/main.css'
const vuetify = createVuetify({
    theme: {
        themes: {
          light: {
            primary: '#F9BE06',
            secondary: '#62ADF4',
            accent: '#1D1D1B',
          }
        },
      },
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

createApp(App).use(router).use(createPinia()).use(vuetify).mount('#app')