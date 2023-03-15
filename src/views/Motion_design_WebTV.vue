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
<main class="text-white font-raleway mx-6">
  <div>
      <img class="w-80 top-0 right-0 absolute z-10 " src="/public/images/Ellipse.png" alt="">
    </div>
  <h1 class="font-bold text-lg mt-10 mb-5 lg:text-2xl">Réalisation d'un looper et d'une outro pour la WebTV</h1>
  <p class="opacity-80 text-sm lg:text-base">C'est un projet qui avait pour but de réaliser les habillage vidéo de la WebTV - IUT Nord Franche-Comté. Je me suis occupé du looper et de l'outro.</p>

  <div class="md:flex md:justify-center md:items-center md:gap-20 xl:gap-56">
    <div class="my-10">
      <video width="250" height="" controls class="mx-auto mt-10 md:w-80 xl:w-[500px]">
        <source src="/public/video/Looper.mp4">
      </video>
      <p class="text-center text-sm italic my-4">Vidéo réalisée à l'aide de Premiere Pro</p>
    </div>
    <div class="my-10">
      <video width="250" height="" controls class="mx-auto mt-10 md:w-80 xl:w-[500px]">
        <source src="/public/video/Outro.mp4">
      </video>
      <p class="text-center text-sm italic my-4">Vidéo réalisée à l'aide de Premiere Pro</p>
    </div>
  </div>

</main>
<div class="text-[10px] text-white italic flex justify-center mx-2 my-1 mt-20 lg:text-xs xl:text-sm">
        <p class="">Portfolio 2023 © - Florentin Demortiere</p>
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