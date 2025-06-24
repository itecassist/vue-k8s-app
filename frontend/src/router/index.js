// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/users',
    name: 'users',
    component: Users,
  },
  { path: '/auth/register', component: Register },
  { path: '/auth/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router
