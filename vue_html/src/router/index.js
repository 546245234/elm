import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/detail/:id/:type',
      name:'detail',
      component:detail
    },
    {
      path: '/login/:type',
      name:'login',
      component: login
    }
  ]
})
