// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/js/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from "@/vuex/store"
import VueTouch from 'vue-touch'


Vue.use(VueAwesomeSwiper)
Vue.use(VueTouch, {name: 'v-touch'})
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App}
})
