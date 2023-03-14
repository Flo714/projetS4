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
            <a class="px-10 py-2 hover_2" href="#travaux">Travaux</a>
          </li>
          <li class="">
            <a class="px-10 py-2 hover_2" href="#perso">A propos</a>
          </li>
          <li class="">
            <a class="px-10 py-2 hover_2" href="#contact">Contact</a>
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
    <h1 class="text-lg font-bold my-10 mx-6 lg:text-2xl">Réalisation de mon logo personnel et du motion design</h1>
    <p class="opacity-80 text-sm px-4 lg:mr-[500px] lg:mx-20 lg:text-base">C'est un logo personnel qui représente mes passions et mes aspirations. J'ai choisi de travailler avec Illustrator pour créer un logo qui associe les lettres F et D de manière créative et originale.</p>
    <div class=" my-10 md:flex md:mx-16 lg:justify-start lg:gap-10 lg:mx-2">
      <img class="w-48 mx-auto lg:ml-20 lg:mr-0  my-6 md:w-64 lg:w-80" src="/public/images/Logo_portefolio.png" alt="Logo personnel">

      <p class="text-center my-12 lg:text-xl italic lg:mt-20 lg:ml-10">Création d'un logo personnel avec Illustrator</p>
    </div>
    <div class="my-12 md:flex md:mx-16 md:items-center lg:justify-start lg:gap-10 lg:mx-2">
      <video width="200" height="" controls class="mx-auto mt-10 md:w-64 lg:w-80 lg:ml-20 lg:mr-0">
        <source src="/public/video/Logo_Animation.mp4">
      </video>
      <p class="text-center my-8 lg:text-xl italic lg:w-80 lg:ml-10">Vidéo réalisée à l'aide d'After Effect</p>
    </div>
    <div class="text-[10px] text-white italic flex justify-center mx-2 my-1 mt-20 lg:text-xs xl:text-sm">
        <p class="">Portfolio 2023 © - Florentin Demortiere</p>
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