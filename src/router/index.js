import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsCard from "../views/DetailsCard"
import Experience from "../views/Experience"
import Projects from "../views/Projects"
import Articles from "../views/Articles"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'details',
    component: DetailsCard
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
