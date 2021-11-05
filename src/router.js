import DetailsCard from "./views/DetailsCard"
import Experience from "./views/Experience"
import Projects from "./views/Projects"
import Articles from "./views/Articles"
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
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
  })
  