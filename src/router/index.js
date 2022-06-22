import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/Layout/index.vue'
import detail from '@/views/detail/detail.vue'
import page1 from '@/views/page1/page1.vue'
import page2 from '@/views/page2/page2.vue'
import demo from '@/views/demo/demo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'主页',
    redirect: '/ma'
  },
  {
    path:'/ma',
    component:layout,
    redirect:'/ma/index',
    children:[
    {
      name:'aa',
      path:'index',
      component:detail
    },
    {
      name:'page1',
      path:'page1',
      component:page1
    },
    {
      name:'page2',
      path:'page2',
      component:page2
    }
    ]
  },
  {
    name:'demo',
    path:'/demo',
    component:demo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
