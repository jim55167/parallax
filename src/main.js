import Vue from 'vue'
import App from './App.vue'
import router from './router'
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(scrollTrigger)
Vue.prototype.$gsap = gsap
Vue.prototype.$scrollTrigger = scrollTrigger
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
