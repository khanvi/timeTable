import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TimeTable from '../components/TimeTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:id',
    component: TimeTable
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
