import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueMq from 'vue-mq'

//import css
import '../src/buefy.scss'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
