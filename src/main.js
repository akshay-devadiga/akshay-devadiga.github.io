import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'
import Lottie from "vue-lottie";
Vue.component("lottie", Lottie);
new Vue({
  render: h => h(App),
  vuetify,
  components: { App }
}).$mount('#app')