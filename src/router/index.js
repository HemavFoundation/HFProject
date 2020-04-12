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
      path: '/',
      name: 'Status',
      component: Status
    },
    {
      path: '/',
      name: 'Maintenance',
      component: Maintenance
    },
    {
      path: '/',
      name: 'Results',
      component: Results
    },
  ]
})
