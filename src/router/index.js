import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../pages/Home.vue'
import OfferFly from '../pages/Offer-fly.vue'
import SearchTravel from '../pages/Search-travel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/offer-fly',
    name: 'offer-fly',
    component: OfferFly
  },
  {
    path: '/search-travel',
    name: 'search-travel',
    component: SearchTravel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
