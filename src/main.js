import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import lottie from "vue-lottie";
import router from './router';

// eslint-disable-next-line
Vue.component("lottie", lottie);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
