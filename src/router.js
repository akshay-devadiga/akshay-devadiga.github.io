import DetailsCard from "./views/details-card"
import Experience from "./views/experience"
import Projects from "./views/projects"
import articles from "./views/articles"
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
        component: articles
      }
    ]
  })
  