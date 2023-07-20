import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue' 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/movie/:tconst',
    name:"movies",
    component:MoviesView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
