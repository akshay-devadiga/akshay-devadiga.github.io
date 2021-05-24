import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#F9BE06',
            secondary: '#62ADF4',
            accent: '#f23440',
          }
        },
      },
});
