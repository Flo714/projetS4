import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import Projet1 from '../views/Projet1.vue'
import Projet2 from '../views/Projet2.vue'
import Projet3 from '../views/Projet3.vue'
import Projet4 from '../views/Projet4.vue'
import Projet5 from '../views/Projet5.vue'
import Projet6 from '../views/Projet6.vue'
import Projet7 from '../views/Projet7.vue'
import Projet8 from '../views/Projet8.vue'
import Projet9 from '../views/Projet9.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Projet1', name: 'Projet1', component: Projet1 },
    { path: '/Projet2', name: 'Projet2', component: Projet2 },
    { path: '/Projet3', name: 'Projet3', component: Projet3 },
    { path: '/Projet4', name: 'Projet4', component: Projet4 },
    { path: '/Projet5', name: 'Projet5', component: Projet5 },
    { path: '/Projet6', name: 'Projet6', component: Projet6 },
    { path: '/Projet7', name: 'Projet7', component: Projet7 },
    { path: '/Projet8', name: 'Projet8', component: Projet8 },
    { path: '/Projet9', name: 'Projet9', component: Projet9 },
    // ici les autre routes
  ]
})

export default router
