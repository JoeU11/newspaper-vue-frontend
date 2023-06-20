import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/articles',
    name: 'articlesIndex',
    component: () => import('../views/ArticlesIndex.vue')
  },
  {
    path: '/articles/:id',
    name: 'articlesShow',
    component: () => import('../views/ArticlesShow.vue')
  },
  {
    path: '/articles/new',
    name: 'articlesNew',
    component: () => import('../views/ArticlesNew.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
