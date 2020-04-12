import Vue from 'vue'
import Router from 'vue-router'
import Status from '@/components/Status'
import Maintenance from '@/components/Maintenance'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: Maintenance
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
  ]
})
