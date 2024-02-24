import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import Logo_Florentin_Demortiere from '../views/Logo_Florentin_Demortiere.vue'
import Charte_graphique_UFC from '../views/Charte_graphique_UFC.vue'
import MeetMyGrill from '../views/MeetMyGrill.vue'
import drone_video from '../views/drone_video.vue'
import Schoolastique from '../views/Schoolastique.vue'
import mentions_legales from '../views/mentions-legales.vue'
import match_UFC from '../views/match_UFC.vue'
import Offf_2025 from '../views/Offf_2025.vue'
import fcsm from '../views/fcsm.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Logo_Florentin_Demortiere', name: 'Logo_Florentin_Demortiere', component: Logo_Florentin_Demortiere },
    { path: '/Charte_graphique_UFC', name: 'Charte_graphique_UFC', component: Charte_graphique_UFC },
    { path: '/MeetMyGrill', name: 'MeetMyGrill', component: MeetMyGrill },
    { path: '/drone_video', name: 'drone_video', component: drone_video },
    { path: '/Schoolastique', name: 'Schoolastique', component: Schoolastique },
    { path: '/mentions_legales', name: 'mentions_legales', component: mentions_legales },
    { path: '/match_UFC', name: 'match_UFC', component: match_UFC },
    { path: '/Offf_2025', name: 'Offf_2025', component: Offf_2025 },
    { path: '/fcsm', name: 'fcsm', component: fcsm },
    
    // ici les autre routes
  ]
})

export default router
