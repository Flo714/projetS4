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
  <main class="text-white font-raleway">
    <a href="#" id="scroll-to-top" class="fixed bottom-4 right-4 p-3 rounded-full bg-white text-black hidden hover:bg-white/70  transition ease-in-out duration-300 z-30">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="black" >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </a>
    <div>
      <img class="w-80 top-0 right-0 absolute z-10 " src="/public/images/Ellipse.png" alt="">
    </div>
    <img class="fixed flex items-center justify-center opacity-20 ml-16 mt-20 xl:-mt-10 xl:ml-[350px] xl:w-[50%] w-[60%] z-10 sm:ml-28 md:ml-36 lg:ml-48" src="/public/images/Logo_portefolio.png" alt="Logo">

    <h1 class="text-lg font-bold my-10 mx-6 lg:text-2xl">Réalisation de mon logo personnel et du motion design</h1>
    <p class="opacity-80 text-sm px-4 lg:mr-[500px] lg:mx-20 lg:text-base sm:mx-8">C'est un logo personnel qui représente mes passions et mes aspirations. J'ai choisi de travailler avec Illustrator pour créer un logo qui associe les lettres F et D de manière créative et originale.</p>
    <div class="z-20">
      <div class=" my-10 md:flex md:mx-16 lg:justify-start lg:gap-10 lg:mx-2">
        <img class="w-48 mx-auto lg:ml-20 lg:mr-0  my-6 md:w-64 lg:w-[400px]" src="/public/images/Logo_portefolio.png" alt="Logo personnel">
        <p class="text-center my-12 lg:text-xl italic lg:mt-20 lg:ml-10">Création d'un logo personnel</p>
      </div>
      <div>
        <div class="md:grid md:grid-cols-2 lg:items-center lg:justify-center lg:mb- md:mx-16">
          <p class="my-10 sm:mx-8 lg:mx-0 lg:items-center lg:justify-center">Pour faire ce logo, j'ai commencé à rechercher des idées, à trouver des inspirations sur internet afin d'éclaircir les idées que j'avais en têtes puis
          j'ai regardé les meilleurs portfolios afin d'observer les tendances design. Ensuite, je suis passé sur Illustrator afin de mettre mes idées sur en images.</p>
          <div class="my-10">
            <img class="w-72 mx-auto sm:w-80 md:w-[400px] lg:w-[500px]" src="/public/images/I_img.png" alt="Image de l'interface Illustrator">
            <p class="text-center mt-6 mb-12 lg:text-xl italic lg:ml-10">Logo sur Illustrator</p>
          </div>
        </div>

         <p class="mb-10 mx-4 sm:mx-16">Je choisi ma meilleur version du logo puis je la décline en différentes couleurs, différents formats ...</p>
      </div>
    </div>

    <div class="my-12 md:flex md:mx-16 md:items-center lg:justify-start lg:gap-10 lg:mx-2 z-20">
      <div class="lg:flex lg:flex-col lg:ml-20">
        <video width="200" height="" controls class=" mt-10 md:w-64 lg:w-[600px]  lg:mr-0 sm:w-72">
          <source src="/public/video/Logo_Animation.mp4">
        </video>
        <p class="text-center my-8 lg:text-xl italic lg:w-80 xl:ml-8">Vidéo réalisée à l'aide d'After Effect</p>
      </div>
      <div class="">
        <p class="my-10 mx-4 sm:mx-8 lg:mx-28">Pour ce qui est de l'animation, j'ai utlisé After Effect. Je me suis renseigné sur internet pour trouvée une animation qui me convenait. 
          Je l'ai ensuite réalisé pour arrivé à ce résultat</p>
      </div>
    </div>


    <div class="text-[10px] italic flex justify-center mx-2 my-1 mt-20 lg:text-xs xl:text-base ">
        <p class="">Portfolio 2023 © - Florentin Demortiere - <RouterLink class="hover:font-black duration-300 underline" to="/mentions_legales">Mentions Légales</RouterLink></p>
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
  menuOuvert: false,
};
},
}

</script>