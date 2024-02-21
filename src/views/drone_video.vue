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
  <h1 class="font-bold text-lg mt-10 mb-5 lg:text-2xl">Réalisation d'un Mini-Film drone</h1>
  <p class="opacity-80 text-sm lg:text-base">J'ai récemment entrepris un projet captivant : la réalisation d'un Mini-Film à partir de vidéos prises avec un drone. Ce périple a été à la fois passionnant et stimulant. Chaque vol du drone a offert une perspective unique, capturant des paysages à couper le souffle et des moments éphémères avec une clarté saisissante. Parcourant des lieux pittoresques et explorant des angles inédits, j'ai créé un montage visuel qui raconte une histoire immersive. Le processus de création m'a permis de fusionner ma passion pour la vidéographie avec l'exploration aérienne, donnant vie à un Mini-Film qui incarne l'émerveillement et l'aventure.</p>


  <div class="md:flex md:justify-center md:items-center md:gap-20 xl:gap-56 ">
    <div class="my-10 z-20">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PubguNu_ArQ?si=THiSX-hrFubtjq-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p class="text-center my-4 italic">Mini-Film drone</p>
    </div>

    <div class="z-20">
        <h2>Technique de tournage</h2>
      <p class="my-4">Pour mon mini-film en drone, j'ai d'abord planifié minutieusement mes prises de vue en repérant les points clés sur la carte. Une fois sur place, j'ai préparé mon équipement, vérifié les conditions météo, et utilisé des techniques variées de vol pour capturer des images dynamiques. En ajustant l'altitude et en filmant aux heures dorées, j'ai réussi à créer un récit visuel immersif mettant en valeur la beauté naturelle de la campagne, tout en respectant les règles de sécurité.</p>
    </div>
  </div>
  <div class="xl:mr-[500px] my-10 md:mx-20 ">
    <p class="z-20">L'objectif de ce projet était d'imaginer un concept, de définir une iconographie et de mettre en page une affiche et une carte postale pour l'Exposition Universelle 2025. 
      Le thème de cette Exposition était "Concevoir la Société du Futur, Imaginer notre monde de Demain".<br>
    Pour réaliser l'affiche et la carte postale, j'ai utilisé l'outil Photoshop. ( voir ci-dessous ) J'ai choisi de mettre en oeuvre le concept de la liberté des espèces animales 
    en montrant que les animaux dans les zoos pouvait être remplacé par des robots afin de libérer les espèces dans leurs milieux naturels.</p>
  </div>
  <div class="lg:my-40 mx-16 ">
    <h2 class="font-bold text-lg lg:text-4xl mt-10 mb-20 mx-10 ">Galerie Photo</h2>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center items-center gap-10 lg:gap-36 ">
      <div class="lg:mx-10 z-20">
        <img class="max-w-[250px]  lg:max-w-md xl:max-w-lg"  src="/public/images/affiche_ps.png" alt="Image de l'affiche sur Photoshop">
      </div>
      <div class="lg:mx-10 z-20">
        <img class="max-w-[250px] lg:max-w-md xl:max-w-lg" src="/public/images/Carte_postal_ps.png" alt="Image de la carte postal sur Photoshop">
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
