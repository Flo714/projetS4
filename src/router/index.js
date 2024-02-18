import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import Logo_Florentin_Demortiere from '../views/Logo_Florentin_Demortiere.vue'
import Charte_graphique_UFC from '../views/Charte_graphique_UFC.vue'
import Motion_design_WebTV from '../views/Motion_design_WebTV.vue'
import Exposition_Universelle_2025 from '../views/Exposition_Universelle_2025.vue'
import Aidealareussite from '../views/Aidealareussite.vue'
import mentions_legales from '../views/mentions-legales.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Logo_Florentin_Demortiere', name: 'Logo_Florentin_Demortiere', component: Logo_Florentin_Demortiere },
    { path: '/Charte_graphique_UFC', name: 'Charte_graphique_UFC', component: Charte_graphique_UFC },
    { path: '/Motion_design_WebTV', name: 'Motion_design_WebTV', component: Motion_design_WebTV },
    { path: '/Exposition_Universelle_2025', name: 'Exposition_Universelle_2025', component: Exposition_Universelle_2025 },
    { path: '/Aidealareussite', name: 'Aidealareussite', component: Aidealareussite },
    { path: '/mentions_legales', name: 'mentions_legales', component: mentions_legales },
 
    // ici les autre routes
  ]
})

export default router
