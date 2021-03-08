import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import  NxCard from 'nx-card'



//import css
import '../src/buefy.scss'


Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(NxCard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

