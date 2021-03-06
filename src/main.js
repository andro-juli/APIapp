import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(moment)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
