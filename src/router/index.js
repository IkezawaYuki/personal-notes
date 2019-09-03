import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/profile/Notes'
import Show from '@/components/profile/Show'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import Edit from '@/components/profile/Edit'
import Add from '@/components/profile/Add'

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
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
