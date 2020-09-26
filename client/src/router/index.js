import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import RecoverAccount from '../components/RecoverAccount.vue'
import user from '../store/modules/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/recoverAccount',
    name: 'RecoverAccount',
    component: RecoverAccount
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import('../views/Status.vue')
  },
  {
    path: '/dronelist',
    name: 'DroneList',
    component: () => import('../views/DroneList.vue')
  },
  {
    path: '/dronedetails',
    name: 'DroneDetails',
    component: () => import('../views/DroneDetails.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/registerdrone',
    name: 'RegisterDrone',
    component: () => import('../views/RegisterDrone.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const userJson = JSON.parse(localStorage.getItem('vuex'))
  if (userJson != null || to.path === '/') {
    next()
  } else {
    next({
      path: '/'
    })
  }

})

export default router
