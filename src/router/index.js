import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import rooms from '../views/rooms.vue'
import Services from '../views/Services.vue'
import contact from '../views/contact.vue'
import Facilities from '../views/Facilities.vue'
import Availablerooms from '../views/Availablerooms.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  { 
    path: '/rooms',
    name: 'rooms',
    component: rooms

  },
  {
  path: '/contact',
  name:'contact',
  component: contact
  },
 {
   path: '/Services',
   name: 'Services',
   component: Services
 },
 {
   path: '/Facilities',
   name: 'Facilities',
    component: Facilities
 },
 {
   path: '/Availablerooms',
   name: 'Availablerooms',
   component: Availablerooms
 },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
