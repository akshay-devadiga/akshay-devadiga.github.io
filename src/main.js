import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'
import Lottie from "vue-lottie";
import router from "./router";
Vue.component("lottie", Lottie);
new Vue({
  router,
  vuetify,
  components: { App },
  render: h => h(App),
}).$mount('#app')