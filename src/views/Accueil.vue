<template>
    <header class="font-raleway italic font-extrabold relative z-20">
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
          <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full py-4 text-center rounded-xl text-xs font-bold text-white" >
            <div class=" grid grid-cols-3">
              <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
               <a href="#travaux">Projets</a>
              </li>
              <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
                <a class="" href="#perso">A propos</a>
              </li>
              <li class="border-2 border-gray-500 rounded-md m-2 p-2 sm:m-8">
                <a class="" href="#contact">Contact</a>
              </li> 
            </div>
            <div class="flex w-32 ml-36 sm:ml-64 sm:w-40 md:ml-[350px] gap-10 my-4">
              <li>
                <img class="" src="images/Instagram.webp" alt="">
              </li>
              <li>
                <img class="" src="images/linkedin.webp" alt="">
              </li>
            </div>

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
  <main class="bg-black text-white font-raleway font-semibold">
    <div>
      <img class="w-80 top-0 right-0 absolute z-10" src="/images/Ellipse.png" alt="">
    </div>
    <img class="fixed flex items-center justify-center opacity-20 ml-16 mt-20 xl:mt-4 xl:ml-72 xl:w-[50%] w-[60%] z-10 sm:ml-28 md:ml-36 lg:ml-48" src="/images/Logo_portefolio.png" alt="Logo">
    <div class="my-20 z-20">
      <div class="animate__animated animate__backInLeft mx-10 lg:mx-16">
        <div class="lg:mt-32 xl:p-8 xl:mt-10">
          <h1 class="md:text-5xl xl:text-6xl">Florentin </h1>
          <h1 class="md:text-5xl xl:text-6xl ml-3 m-1">Demortiere</h1>
        </div>
        <div>
          <p class="text-xs md:text-lg my-6 xl:text-xl xl:m-12 xl:pr-8 lg:mx-10 lg:my-10 lg:text-lg xl:-mt-3 opacity-50">Je m'appelle Florentin Demortiere et je suis un étudiant en MMI. Je suis passionné par le design graphique</p>
        </div>
      </div>
      <div class="ml-20 lg:ml-28 xl:ml-44 xl:mt-20 animate__animated animate__backInLeft">
        <button class="bg-white flex gap-2 px-3 py-2 md:my-12 lg:px-5 lg:py-3 xl:py-4 rounded-full place-items-center">
          <p class="text-black font-bold text-xs md:text-base lg:text-lg xl:text-xl">Me contacter</p>
          <img class="" src="images/fleche.png" alt="fleche">
        </button>
      </div>
      <div>
        <img class="w-32 lg:w-48 absolute right-4 md:w-36 md:bottom-72 lg:bottom-40 xl:bottom-20 animate__animated animate__rotateIn z-0" src="gif1_pf.gif" alt="gif animé">
      </div>
    </div>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 pt-40 px-12 relative z-20" id="travaux">
        <RouterLink to="/Logo_Florentin_Demortiere"><img class="rounded-sm w-[70%] lg:h-[250px] lg:w-[450px] mx-auto object-cover" src="images/Logo_Florentin_Demortiere.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink to="/Charte_graphique_Germagny"><img class="rounded-sm w-[70%] lg:h-[250px] lg:w-[450px] mx-auto object-cover" src="/images/Charte_graphique_Germagny.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink class="flex items-center justify-center" to="/Exposition_Universelle_2025"><img class="rounded-sm w-[50%] lg:h-[250px] lg:w-[450px] mx-auto object-cover" src="/images/Exposition_Universelle_2025.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink to="/Motion_design_WebTV"><img class="rounded-sm w-[70%] mx-auto lg:h-[250px] lg:w-[450px] object-cover" src="/images/Motion_design_WebTV.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink to="/Aidealareussite"><img class="rounded-sm w-[70%] mx-auto lg:h-[250px] lg:w-[450px] object-cover" src="/images/Aidealareussite.png" alt="Logo Aide à la reussite"></RouterLink>



      </div>
      <div class="relative mt-10 pt-10 lg:mt-28 lg:pt-16 lg:flex lg:gap-20 lg:mx-28 z-20" id="perso">
        <img class="w-40 mx-auto rounded-sm md:w-48 lg:w-64 xl:w-80" src="/images/Flo.JPG" alt="Photo de Florentin Demortiere">
        <div class="mt-4 lg:mt-10">
          <p class=" xl:text-4xl font-bold text-center italic lg:text-left lg:px-10 lg:text-4xl">Florentin Demortiere</p>
          <p class="ml-8 mt-4 lg:mt-10 text-xs opacity-50 md:text-sm md:px-32 md:text-center lg:text-left lg:px-4 lg:text-base xl:mr-40">Étant passionné par le design depuis quelques années, j’ai réaliser plusieurs projets personnel ou dans le cadre de mes études au sein du Département MMI de Montbéliard.</p>
        </div>
      </div>
      <div class="flex justify-center my-6 lg:justify-end lg:-mt-28 lg:mr-28">
          <button class="bg-white flex gap-2 px-3 py-2 md:my-12 lg:px-5 lg:py-3 xl:py-4 rounded-full place-items-center">
            <a class="text-black font-bold text-xs md:text-base lg:text-lg xl:text-xl" href="">Voir mon CV</a>
          </button>
        </div>
      <div class="lg:flex mt-28 mb-28 mx-16 lg:mx-20  lg:ml-40 z-20 xl:ml-52 xl:my-40" id="contact">
        <div class="border-b-2 lg:border-b-0 lg:border-r-2 lg:mx-8 mb-8 pl-4">
          <p class="lg:text-xl xl:text-2xl">Contact</p>
          <div class="mt-6 mx-2 lg:mx-4 xl:mr-32 xl:my-6">
            <p class="text-xs lg:text-base opacity-70 xl:text-lg">flo.demortiere@laposte.net</p>
            <p class="text-xs opacity-70 my-4 lg:text-base xl:text-lg">07 66 11 98 17</p>
          </div>
        </div>
        <div class="border-b-2 lg:border-b-0 lg:border-r-2 lg:text-lg lg:mx-8 mb-8 pl-4">
          <p class="lg:text-xl xl:text-2xl">Localisation</p>
          <div class="mt-6 mx-2 lg:mx-4 xl:mr-32 xl:my-6">
            <p class="text-xs opacity-70 lg:text-base xl:text-lg">1 Rue Charles Goguel</p>
            <p class="text-xs opacity-70 my-4 lg:text-base xl:text-lg">25200 Montbéliard</p>
          </div>
        </div>
        <div class="pl-4 lg:text-lg">
          <p class="lg:text-xl">Réseaux sociaux</p>
          <div class="flex gap-8 mx-4 my-8 xl:my-6">
            <img class="w-6 lg:w-10" src="/images/Instagram.webp" alt="Logo Instagram">
            <img class="w-6 lg:w-10" src="/images/linkedin.webp" alt="Logo Instagram">
          </div>
        </div>
      </div>
      <div class="text-[10px] italic flex justify-between mx-2 my-1 mt-20 lg:text-xs xl:text-sm">
        <p class="">Florentin Demortiere</p>
        <p>flo.demortiere@laposte.net | 07 66 11 98 17</p>
      </div>
  </main>
</template>

<script>
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


/* Cibler la scrollbar de WebKit */
::-webkit-scrollbar {
  width: 3px;
}


/* Cibler le "pouce" de la scrollbar */
::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 15px;
}

/* Ajouter une ombre à la scrollbar */
::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}



</style>