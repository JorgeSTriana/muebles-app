import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.min.css"
import router from '@/router'
import { nameFilter } from '@/filters'
import { phoneFilter } from '@/filters'

Vue.config.productionTip = false
Vue.filter('upper', nameFilter)
Vue.filter('noline', phoneFilter)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
