import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/Habitaciones',
    name: 'Habitaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Habitaciones.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/inicioSesion.vue')
  },

  {
    path: '/juridica',
    name: 'juridica',
    component: () => import(/* webpackChunkName: "about" */ '../views/juridica.vue')
  },

  {
    path: '/persona',
    name: 'persona',
    component: () => import(/* webpackChunkName: "about" */ '../views/persona.vue')
  },

  {
    path: '/reserva',
    name: 'reserva',
    component: () => import(/* webpackChunkName: "about" */ '../views/reserva.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
