import Vue from 'vue'
import Router from 'vue-router'
import Animation from '@/components/animation/Animation'
import Alist from '@/components/animation/Alist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Animation',
      component: Animation,
      redirect:'/Alist',
      children:[
        {
          path: 'Alist',
          component: Alist,
          
        }
      ]
    }
  ]
})
