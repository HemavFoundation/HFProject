import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Status from '@/components/Status';
import Results from '@/components/Results';
import Maintenance from '@/components/Maintenance';



Vue.use(VueRouter)

  const routes = [

  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
