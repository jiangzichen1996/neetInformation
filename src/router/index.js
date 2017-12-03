import Vue from 'vue'
import Router from 'vue-router'
import Animation from '@/components/animation/Animation'
import Alist from '@/components/animation/Alist'
import Adetail from '@/components/animation/ADetail'
import music from '@/components/music/Music'
import musicList from '@/components/music/MusicList'
import musicDetail from '@/components/music/MusicDetail'
import photo from '@/components/photo/Photo'
import photoList from '@/components/photo/PhotoList'
import photoDetail from '@/components/photo/PhotoDetail'


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
        },
        {
          path:'Adetail',
          component:Adetail
        }
      ]
    },{
      path:"/music",
      name:'music',
      component:music,
      redirect:'/music/musicList',
      children:[
        {
          path: 'musicList',
          component: musicList,
        },
        {
          path:'musicDetail/:albumId',
          component:musicDetail
        }
      ]
    },{
      path:'/photo',
      name:'photo',
      component: photo,
      redirect:'/photo/photoList',
      children:[{
        path:'photoList',
        component: photoList,
      },{
        path:'/photo/photoDetail/:index',
        component: photoDetail,
      }]
    }
  ]
})
