import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import Toasted from 'vue-toasted'



//import css
import '../src/buefy.scss'


Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(Toasted)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

