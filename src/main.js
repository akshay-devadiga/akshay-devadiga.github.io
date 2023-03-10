import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Lottie from "vue-lottie";
import router from './router'
Vue.component("lottie", Lottie);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
