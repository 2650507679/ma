import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from '@/views/detail.vue'
import page1 from '@/views/page1.vue'
import page2 from '@/views/page2.vue'
Vue.use(VueRouter)

const routes = [
  {
    name:'aa',
    path:'/',
    component:detail
  },
  {
    name:'page1',
    path:'/page1',
    component:page1
  },
  {
    name:'page2',
    path:'/page2',
    component:page2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
