<template>
  <header class="font-raleway italic font-extrabold relative z-20 bg-gradient-to-t from-transparent to-black ">
    <nav class="lg:flex lg:justify-between">
    <div class="flex justify-between m-4">
      <div class="flex items-center">
        <RouterLink to="/">
          <img class="w-20 animate__animated animate__backInLeft" src="/public/images/Logo_portefolio.png" alt="Logo Florentin Demortiere"/>
        </RouterLink>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-3xl cursor-pointer lg:hidden block w-12">
          <img class=""  aria-controls="menu"
           :aria-expanded="menuOuvert"
           @click="menuOuvert = !menuOuvert" src="/public/images/Menu.png" alt="Logo Menu" />
          <span class="sr-only ">Menu</span>
        </span>
      </div>
    </div>
    <Transition
      enter="transition duration-2000 ease-out"
      enterFrom="transform translate-x-full opacity-0"
      enterTo="transform translate-x-0 opacity-100"
      leave="transition duration-1750 ease-out"
      leaveFrom="transform  translate-x-0 opacity-100"
      leaveTo="transform translate-x-full opacity-0">
      <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full py-4 text-center grid grid-cols-3 rounded-xl text-xs font-bold text-white" >
            <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
             <a href="#travaux">Projets</a>
            </li>
            <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
              <RouterLink class="px-3" to="/">A propos</RouterLink>
            </li>
            <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
              <RouterLink class="px-3" to="/">Contact</RouterLink>
            </li> 
            <div class="flex w-32 ml-32 sm:ml-64 sm:w-40 md:ml-[350px] gap-10 my-4">
              <li>
                <a href="https://www.instagram.com/flodem.pro/?hl=fr"><img class="hover:scale-110 duration-300" src="/public/images/Instagram.webp" alt="Logo Instagram"></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/florentin-demortiere/"><img class="hover:scale-110 duration-300" src="/public/images/linkedin.webp" alt="Logo Linkedin"></a>
              </li>
            </div>
          </ul>
    </Transition>
    <ul class="lg:flex items-center align-baseline text-sm mx-4 font-bold hidden xl:text-xl xl:my-10 text-white animate__animated animate__backInRight" >
      <li class="">
            <RouterLink class="px-10 py-2 hover_2" to="/">Travaux</RouterLink>
          </li>
          <li class="">
            <RouterLink class="px-10 py-2 hover_2" to="/">A propos</RouterLink>
          </li>
          <li class="">
            <RouterLink class="px-10 py-2 hover_2" to="/">Contact</RouterLink>
          </li>
          <li>
            <a href="https://www.instagram.com/flodem.pro/?hl=fr" target="_blank"><img class="w-6 lg:w-10 mx-10 my-3 hover:scale-110 duration-300" src="/public/images/Instagram.webp" alt="Logo instagram"></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/florentin-demortiere/"  target="_blank"><img class="w-6 lg:w-10 mx-10 my-3 hover:scale-110 duration-300"  src="/public/images/linkedin.webp" alt="Logo Linkedin"></a>
          </li>
        </ul>
  </nav>
  </header>
  <main class="text-white mx-10">
    <a href="#" id="scroll-to-top" class="fixed bottom-4 right-4 p-3 rounded-full bg-white text-black hidden hover:bg-white/70  transition ease-in-out duration-300 z-30">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="black" >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </a>
    <div>
      <img class="w-80 top-0 right-0 absolute z-10 " src="/public/images/Ellipse.png" alt="">
    </div>
    <img class="fixed flex items-center justify-center opacity-20 ml-16 mt-20 xl:-mt-10 xl:ml-[350px] xl:w-[50%] w-[60%] z-10 sm:ml-28 md:ml-36 lg:ml-48" src="/public/images/Logo_portefolio.png" alt="Logo">

    <h1 class="text-2xl my-6 lg:mb-20 lg:text-5xl font-bold">Mentions légales</h1>
  
    <div class="mx-10 z-20">

      <div class="lg:mr-80">
        <h2 class="text-lg my-4 font-bold lg:my-8">1. Informations sur le propriétaire du site :</h2>
        <div class="mx-6">
          <p>Demortiere Florentin</p>
          <p>1 Rue Charles Goguel</p>
          <p>07 66 11 98 17</p>
          <p>Flo.demortiere@laposte.net</p>
        </div>
      </div>

      <div class="lg:mr-80">
        <h2 class="text-lg my-4 font-bold lg:my-8">2. Hébergeur du site :</h2>
        <div class="mx-6">
          <p>Infomaniak</p>
          <p>Rue Eugène Marziano 25 1227 Les Acacias (GE)</p>
          <p>04 11 93 76 67</p>
        </div>
      </div>

      <div class="lg:mr-80">
        <h2 class="text-lg my-4 font-bold lg:my-8">3. Propriété intellectuelle </h2>
        <div class="mx-6">
          <p>Tous les éléments du site (textes, images, vidéos, etc.) sont la propriété exclusive de Florentin Demortiere et sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, diffusion, ou exploitation non autorisée de ces éléments est strictement interdite.</p>
        </div>
      </div>

      <div class="lg:mr-80">
        <h2 class="text-lg my-4 font-bold lg:my-8">4. Utilisation des données personnelles :</h2>
        <div class="mx-6">
          <p>Les informations personnelles recueillies sur ce site sont utilisées uniquement dans le cadre de la gestion de votre compte et de vos échanges avec Florentin Demortiere. Elles ne sont en aucun cas transmises à des tiers. Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
        </div>
      </div>
    
      <div class="lg:mr-80">
        <h2 class="text-lg my-4 font-bold lg:my-8">5. Responsabilité :</h2>
        <div class="mx-6">
          <p>Florentin Demortiere décline toute responsabilité en cas d'interruption ou d'indisponibilité du site, de survenance de bugs ou d'erreurs. L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des informations qui y sont contenues.</p>
        </div>
      </div>

      <div class="lg:mr-80">
        <h2 class="text-lg my-4 font-bold lg:my-8">6. Liens hypertextes :</h2>
        <div class="mx-6">
          <p>Les liens hypertextes présents sur le site peuvent renvoyer vers d'autres sites web. Florentin Demortiere ne saurait être tenu responsable du contenu de ces sites ni des éventuels préjudices qu'ils pourraient causer. Il est important de noter que ces mentions légales ne sont qu'un exemple et qu'il est recommandé de consulter un avocat pour s'assurer de leur pertinence et de leur conformité avec les lois en vigueur dans votre pays.</p>
        </div>
      </div>
    </div>
    
    


    <div class="text-[10px] italic flex justify-center mx-2 my-1 mt-20 lg:text-xs xl:text-sm">
        <p class="">Portfolio {{currentYear}} © - Florentin Demortiere - <RouterLink to="/mentions_legale">Mentions Légales</RouterLink></p>
      </div>
  </main>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';


export default {
name: "App",
components: { RouterLink },
data() {
return {
  currentYear: new Date().getFullYear(),
  menuOuvert: false,
};
},
}

</script>
