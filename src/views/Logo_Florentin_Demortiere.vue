<template>
    <header class="font-raleway italic font-extrabold relative z-20 bg-gradient-to-t from-transparent to-black ">
    <nav class="lg:flex lg:justify-between">
    <div class="flex justify-between m-4">
      <div class="flex items-center">
        <RouterLink to="/">
          <img class="w-20 animate__animated animate__backInLeft" src="images/Logo_portefolio.png" alt="Logo Florentin Demortiere"/>
        </RouterLink>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-3xl cursor-pointer lg:hidden block w-12">
          <img class=""  aria-controls="menu"
           :aria-expanded="menuOuvert"
           @click="menuOuvert = !menuOuvert" src="images/Menu.png" alt="Logo Menu" />
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
          <RouterLink class="px-3" to="/BarBac">A propos</RouterLink>
        </li>
        <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
          <RouterLink class="px-3" to="/MapOSM">Contact</RouterLink>
        </li> 
        <li>
          <img class="" src="images/Instagram.webp" alt="">
        </li>
        <li>
          <img class="" src="images/linkedin.webp" alt="">
        </li>
      </ul>
    </Transition>
    <ul class="lg:flex items-center align-baseline text-sm mx-4 font-bold hidden xl:text-2xl xl:my-10 text-white animate__animated animate__backInRight" >
      <li class="">
        <a class="px-10 py-4" href="#travaux">Travaux</a>
      </li>
      <li class="">
        <a class="px-10 py-4" href="#perso">A propos</a>
      </li>
      <li class="">
        <a class="px-10 py-4" href="#contact">Contact</a>
      </li>
      <li>
        <img class="w-6 mx-10 my-3" src="images/Instagram.webp" alt=""> 
      </li>
      <li>
        <img class="w-6 mx-10 my-3"  src="images/linkedin.webp" alt=""> 
      </li>
    </ul>
  </nav>
  </header>
  <main class="text-white ont-raleway">
    <h1 class="text-lg my-10 mx-6">Réalisation de mon logo personnel <br>et du motion design</h1>

    <div class="">
      <img class="w-48 mx-auto my-6" src="images/Logo_portefolio.png" alt="">

      <p class="text-center">Création d'un logo personnel avec Illustrator</p>
    </div>
    <div>
      <video width="200" height="" controls class="mx-auto mt-10">
        <source src="video/Logo_Animation.mp4">
      </video>
      <p class="text-center my-4">Vidéo réalisée à l'aide d'After Effect</p>
    </div>
    <div class="text-xs italic flex justify-between mx-2 my-1 mt-20">
      <p class="">Florentin Demortiere</p>
      <p>flo.demortiere@laposte.net | 07 66 11 98 17</p>
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