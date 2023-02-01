import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    // ici les autre routes
  ]
})

export default router
