import Vue from 'vue'
import App from './App.vue'
import DataV from '@jiaminghi/data-view'
import axios from 'axios'
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'http://10.9.127.202:8090'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(DataV)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
