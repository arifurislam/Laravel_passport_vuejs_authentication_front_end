import {
  createRouter,
  createWebHistory
} from 'vue-router'
import store from '../store';
import Dashboard from '../components/pages/Dashboard.vue';
import Login from '../components/auth/Login.vue';
import Signup from '../components/auth/Signup.vue';
import Forgot from '../components/password/Forgot.vue';
import Reset from '../components/password/Reset.vue';

const routes = [{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      auth: true
    },
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      guest: true
    },
  },
  {
    path: '/forgot-password',
    name: 'Forgot',
    component: Forgot,
    meta: {
      guest: true
    },
  },
  {
    path: '/reset-password',
    name: 'Reset',
    component: Reset,
    meta: {
      guest: true
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from) => {
//   if (to.meta.auth && !store.getters.GET_AUTH_STATUS) {

//     return {
//       path: '/',
//     }
//   }
// })
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.getters.GET_AUTH_STATUS) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.GET_AUTH_STATUS) {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()! 
  }
})

export default router