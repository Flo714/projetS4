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
<main class="text-white font-raleway mx-6">
  <a href="#" id="scroll-to-top" class="fixed bottom-4 right-4 p-3 rounded-full bg-white text-black hidden hover:bg-white/70  transition ease-in-out duration-300 z-30">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="black" >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  </a>
  <div>
    <img class="w-80 top-0 right-0 absolute z-10 " src="/public/images/Ellipse.png" alt="">
  </div>
  <img class="fixed flex items-center justify-center opacity-20 ml-16 mt-20 xl:-mt-10 xl:ml-[350px] xl:w-[50%] w-[60%] z-10 sm:ml-28 md:ml-36 lg:ml-48" src="/public/images/Logo_portefolio.png" alt="Logo">
  <h1 class="font-bold text-lg mt-10 mb-5 lg:text-2xl">Réalisation de support de communication pour le festival "Chalon dans la rue"</h1>
  <p class="opacity-80 text-sm lg:text-base lg:mr-[400px] ml-6">Pendant mon stage à Chalon dans la Rue en 2023, j'ai créé des affiches et des flyers pour promouvoir le festival. Ces supports ont été essentiels pour capturer l'énergie du festival et diffuser des informations claires sur les événements. Cette expérience m'a permis de développer mes compétences en design graphique tout en contribuant à la vitalité culturelle de Chalon dans la Rue.</p>


  <div class="md:flex md:justify-center md:items-center md:gap-20 xl:gap-56 lg:ml-20 ">
    <div class="my-10 z-20">
      <img src="/public/images/Affiche_v2.jpg" class="w-[70%] mx-auto xl:mx-auto" alt="Image de l'affiche de Végétale Vallée">
      <p class="text-center my-4 italic">Affiche</p>
    </div>

    <div class="z-20">
        <h2 class="font-bold text-lg lg:text-xl">Explications</h2>
      <p class="my-4">"Végétale Vallée" est l'un des spectacles du festival, offrant une expérience immersive au public pendant plusieurs mois. Avec sa durée prolongée, il fallait donc créer des flyers pour chaque événement afin d'informer et d'attirer les spectateurs tout au long de cette période exceptionnelle. Ces flyers ont été conçus avec par moi-même pour refléter l'essence unique de chaque performance, captivant l'attention du public et les incitant à découvrir cette aventure végétale. En concevant ces supports de communication, j'ai contribué à faire de "Végétale Vallée" une expérience inoubliable et à en assurer le succès continu tout au long du spectacle.</p>
    </div>
  </div>
<div class="md:flex md:justify-center md:items-center md:gap-20 lg:ml-20 ">
    <div class="z-20">
      <p class="my-4">En tant qu'infographiste lors de mon stage à Chalon dans la Rue en 2023, j'ai eu l'opportunité de concevoir plusieurs affiches, flyers et autres supports de communication. Mon rôle consistait à donner vie visuellement aux concepts et aux idées afin de promouvoir efficacement les événements du festival. À travers ces différents supports, j'ai cherché à captiver l'attention du public et à transmettre l'essence dynamique et créative de Chalon dans la Rue. Ma contribution en tant qu'infographiste a été essentielle pour véhiculer avec succès l'esprit et l'énergie du festival à travers divers médias visuels.</p>
    </div>
    <div class="my-10 z-20">
        <img src="/public/images/Flyer_recto_graph.jpg" class="w-[70%] mx-auto xl:mx-auto" alt="Image de présentation du drone DJI mini 3 Pro">
      <p class="text-center mb-4 lg:-mt-12 italic">Flyer pour un évenement</p>
    </div>
  </div>
  <div class="lg:my-40 mx-16 ">
    <h2 class="font-bold text-lg lg:text-4xl mt-10 mb-20 mx-10 ">Galerie Photo</h2>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center items-center gap-10 lg:gap-36 ">
      <div class="lg:mx-10 z-20">
        <img class="max-w-[250px]  lg:max-w-md"  src="/public/images/Flyer_recto_fleur.jpg" alt="Image d'un flyer">
      </div>
      <div class="lg:mx-10 z-20">
        <img class="max-w-[250px] lg:max-w-md" src="/public/images/vegetoradicaux.jpg" alt="Image d'un flyer">
      </div>
       <div class="lg:mx-10 z-20">
        <img class="max-w-[250px] lg:max-w-md" src="/public/images/vegetosceptique.jpg" alt="Image d'un flyer">
      </div>
    </div>
  </div>
  <div class="text-[10px] italic flex justify-center mx-2 my-1 mt-20 lg:text-xs xl:text-base ">
    <p class="">Portfolio {{currentYear}} © - Florentin Demortiere - <RouterLink class="hover:font-black duration-300 underline" to="/mentions_legales">Mentions Légales</RouterLink></p>
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
