import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;
import './assets/scss/app.scss'
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import Grid from 'gridjs-vue';
import Fragment from 'vue-fragment'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuelidate from 'vuelidate'
import VueCollapse from 'vue2-collapse';
import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT;
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});
Vue.use(VueCollapse)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Grid)
Vue.use(VueSweetalert2);
Vue.use(Fragment.Plugin)
Vue.use(Vuelidate);
////import './axios';
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
