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
      <img class="fixed flex items-center justify-center opacity-20 ml-16 mt-20 xl:-mt-10 xl:ml-[350px] w-[40%] z-10 sm:ml-28 md:ml-36 lg:ml-48" src="/public/images/Logo_portefolio.png" alt="Logo">
  <h1 class="font-bold text-lg mt-10 mb-5 lg:text-2xl">Présentation en vidéo 3D du logo du FC Sochaux-Montbéliard</h1>
  <p class="opacity-80 text-sm lg:text-base lg:mr-[400px]">Plongez dans un monde visuel captivant où le logo du FCSM prend vie avec grâce et modernité. Cette expérience unique reflétera l'essence du club, mêlant tradition et innovation.</p>

  <div class="xl:grid xl:grid-cols-2 xl:items-center xl:justify-center z-20">
    <div class="my-10 z-20">
        <video controls src="/public/video/Teaser_logo_FCSM_v2.mp4" class="w-[50%] mx-auto shadow shadow-white">La vidéo arrive, merci de patienté !</video>
        <p class="text-center mb-4 italic mt-4">Vidéo</p>
    </div>
    <p>J'ai utilisé Blender pour créer cette vidéo 3D mettant en vedette le logo du FCSM. Blender est un logiciel puissant et polyvalent qui m'a permis de modéliser, d'animer et de rendre le logo de manière réaliste et captivante. Grâce à ses fonctionnalités avancées, j'ai pu donner vie au logo avec fluidité et dynamisme, tout en ajoutant des effets visuels pour renforcer son impact. Blender a été l'outil parfait pour donner vie à ma vision créative et offrir une expérience visuelle immersive aux spectateurs</p>
  </div>

  <div class="lg:my-40 mx-10 xl:mx-20 z-20">
    <h2 class="font-bold text-lg lg:text-4xl mt-10 mb-20 mx-10 ">Galerie Photo</h2>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center items-center gap-10 lg:gap-36 xl:gap-40">
      <div class="lg:mx-20 z-20">
        <img class=" w-[120%] max-w-[150px]  lg:max-w-md rounded-md" src="/public/images/Blender.png" alt="Image de l'interface Blender du projet">
      </div>
      <div class="lg:mx-20 z-20">
        <img class="max-w-[250px] lg:max-w-xs rounded-md" src="/public/images/Img_fcsm.png" alt="Image du logo du FCSM dans le rendu">
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

<style>

.hover_1 {
  background:
    linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
  );
  background-size: 100% 4px, 0 4px;
  background-position: 100% 110%, 0 110%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

.hover_1:hover {
  background-size: 0 4px, 100% 4px;
}



</style>
