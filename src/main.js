// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main from './components/Main/Main'
import router from './router'
import '@/assets/tailwind.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  components: { Main },
  template: '<Main/>'
})
