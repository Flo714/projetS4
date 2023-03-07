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
<main class="text-white font-raleway mx-6">
  <h1 class="font-bold text-lg mt-10 mb-5">Réalisation de la charte graphique de Charte graphique Germagny </h1>

  <p class="opacity-80 text-sm">C'est un projet fictif qui a pour but de réaliser la charte graphique de Germagny, un village de Saône et Loire. Elle a été réalisé sur le logiciel InDesign</p>

  <div class="my-10">
    <img src="images/Charte_graphique_Germagny.png" alt="Image de présentation de la charte graphique de Germagny">
    <div class="flex justify-end my-4 font-bold">
      <a class="hover_1" href="Charte_graphique_Germagny.pdf" target="_blank">Voir plus</a>
    </div>
  </div>
</main>
<div class="text-[10px] italic flex justify-between mx-2 my-1 mt-20 text-white">
      <p class="">Florentin Demortiere</p>
      <p>flo.demortiere@laposte.net | 07 66 11 98 17</p>
  </div>
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

<style>

.hover_1 {
  --c:linear-gradient(#fff 0 0); /* update the color here */
  
  padding-bottom: .15em;
  background: var(--c), var(--c);
  background-size: .3em .1em;
  background-position:50% 100%;
  background-repeat: no-repeat;
  transition: .5s linear, background-size .3s .2s linear;
}
.hover_1:hover {
  background-size: 40% .1em;
  background-position: 10% 100%, 90% 100%;
}



</style>