import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false;

Vue.use(VueScrollTo);
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#212121',
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
