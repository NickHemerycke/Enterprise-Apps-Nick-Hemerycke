import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import NewView from '../views/NewView.vue'
import DetailsView from '../views/DetailsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'index', component: IndexView },
    { path: '/new', name: 'new', component: NewView },
    { path: '/events/:id', name: 'details', component: DetailsView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
