import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import vuetify from './plugins/vuetify'
import { VueMaskDirective } from 'v-mask'

Vue.config.productionTip = false

Vue.directive('mask', VueMaskDirective);
Vue.use(VueRouter)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
