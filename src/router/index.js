import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/profile/Notes'
import Show from '@/components/profile/Show'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/show',
      name: "Show",
      component: Show
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
