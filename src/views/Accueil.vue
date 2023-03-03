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
  <main class="bg-black text-white font-raleway font-semibold">
    <div>
      <img class="w-80 top-0 right-0 absolute z-10" src="/images/Ellipse.png" alt="">
    </div>
    <img class="fixed flex items-center justify-center opacity-20 ml-[30%] w-[40%]" src="/images/Logo_portefolio.png" alt="Logo">
    <div class="my-32">
      <div class="animate__animated animate__backInLeft mx-16">
        <div class="p-8 mt-20">
          <h1 class="text-7xl">Florentin </h1>
          <h1 class="text-7xl ml-3 m-1">Demortiere</h1>
        </div>
        <div>
          <p class="text-xl m-12 pr-8 -mt-6 opacity-50">Je m'appelle Florentin Demortiere et je suis un étudiant en MMI. Je suis passionné par le design graphique</p>
        </div>
      </div>
      <div class="ml-52 animate__animated animate__backInLeft">
        <button class="bg-white flex gap-2 px-6 py-4 rounded-full place-items-center ml-10">
          <p class="text-black font-bold text-xl">Me contacter</p>
          <img class="" src="images/fleche.png" alt="fleche">
        </button>
      </div>
      <div>
        <img class="w-40 absolute bottom-12 right-4 animate__animated animate__rotateIn" src="gif1_pf.gif" alt="gif animé">
      </div>
    </div>
      <div class="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 gap-10 pt-32 px-20 relative " id="travaux">
        <RouterLink to="/Logo_Florentin_Demortiere"><img class="rounded-sm" src="images/Logo_Florentin_Demortiere.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink to="/Charte_graphique_Germagny"><img class="rounded-sm" src="/images/Charte_graphique_Germagny.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink class="flex items-center justify-center" to="/Exposition_Universelle_2025"><img class="rounded-sm w-2/3" src="/images/Exposition_Universelle_2025.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink to="/Motion_design_WebTV"><img class="rounded-sm" src="/images/Motion_design_WebTV.png" alt="Logo Aide à la reussite"></RouterLink>
        <RouterLink to="/Aidealareussite"><img class="rounded-sm" src="/images/Aidealareussite.png" alt="Logo Aide à la reussite"></RouterLink>



      </div>
      <div class="relative mt-28 pt-16 flex gap-20 mx-28" id="perso">
        <img class="w-56 rounded-sm" src="/images/Flo.JPG" alt="Photo de Florentin Demortiere">
        <div class="mt-10">
          <p class="text-4xl font-bold">Florentin <br> 
          Demortiere</p>
          <p class="ml-8 mt-10">Étant passionné par le design depuis quelques années, j’ai réaliser plusieurs projets personnel ou dans le cadre de mes études au sein du Département MMI de Montbéliard.</p>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-28 mb-28 mx-20 ml-40" id="contact">
        <div class="border-r-2 mx-8">
          <p>Contact</p>
          <div class="mt-6 mx-2">
            <p class="text-xs opacity-70">flo.demortiere@laposte.net</p>
            <p class="text-xs opacity-70 my-4">07 66 11 98 17</p>
          </div>
        </div>
        <div class="border-r-2 mx-8">
          <p class="">Localisation</p>
          <div class="mt-6 mx-2">
            <p class="text-xs opacity-70">1 Rue Charles Goguel</p>
            <p class="text-xs opacity-70 my-4">25200 Montbéliard</p>
          </div>
        </div>
        <div>
          <p>Réseaux social</p>
          <div class="flex gap-8 mx-4 my-8">
            <img class="w-6" src="/images/Instagram.webp" alt="Logo Instagram">
            <img class="w-6 " src="/images/linkedin.webp" alt="Logo Instagram">
          </div>
        </div>
      </div>
      <div class="text-xs italic flex justify-between mx-2 my-1 mt-20">
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

/* Cibler la piste de la scrollbar */


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