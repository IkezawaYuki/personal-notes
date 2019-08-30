import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/Notes'
import Login from '@/components/Login'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    }
  ]
})
