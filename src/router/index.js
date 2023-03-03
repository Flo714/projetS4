import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import Projet1 from '../views/Projet1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Projet1', name: 'Projet1', component: Projet1 },
    // ici les autre routes
  ]
})

export default router
