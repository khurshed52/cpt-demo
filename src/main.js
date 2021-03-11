import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import Grid from 'gridjs-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Grid)
Vue.use(VueSweetalert2);

////import './axios';
Vue.config.productionTip = false
new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
