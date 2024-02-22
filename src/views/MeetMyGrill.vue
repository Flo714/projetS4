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

  <h1 class="font-bold text-lg mt-10 mb-5 lg:text-2xl">Réalisation de l'identité graphique d'un restaurant (projet éducatif)</h1>
  <p class="opacity-80 text-sm lg:text-base lg:mr-[400px]">En collaboration avec trois camarades créatifs, j'ai eu le privilège de concevoir l'identité graphique d'un restaurant captivant. Notre équipe de quatre personnes a fusionné ses compétences en design pour donner vie à une vision commune, mêlant art culinaire et esthétique visuelle. Ensemble, nous avons exploré chaque élément, des logos aux menus en passant par le site internet, afin de capturer l'essence unique du restaurant et de créer une expérience visuelle cohérente et mémorable pour les clients. Cette collaboration dynamique a permis de combiner nos idées créatives individuelles pour aboutir à une identité graphique qui reflète parfaitement l'atmosphère et le style distinctifs de l'établissement.</p>

  <div class="md:flex md:justify-center md:items-center md:gap-20 xl:gap-56 lg:ml-20 lg:my-20">
    <div class="my-10 z-20">
      <img class="max-w-[120px] lg:max-w-md" src="/public/images/Logo_mg.png" alt="Image du Logo de Meet My Grill">
      <p class="text-center my-4 italic">Logo de Meet My Grill</p>
    </div>

    <div class="z-20">
        <h2 class="font-bold text-lg lg:text-xl">Explication de l'identité graphique</h2>
      <p class="my-4">"Meet My Grill" incarne une véritable passion pour la viande rouge et le feu. L'identité graphique est une célébration de la flamboyance et de la qualité de la viande de bœuf. Le logo évoque l'énergie ardente et l'expertise culinaire qui animent notre établissement. Les nuances riches de orange rappellent la tendreté et la saveur incomparables de la nouriture. Chaque élément visuel, des menus aux enseignes, évoque l'atmosphère chaleureuse et l'excellence gastronomique de Meet My Grill. L'identité est un hommage vibrant à l'art de griller la viande et à la passion pour les saveurs authentiques du bœuf.</p>
    </div>
  </div>
    
  <div class="md:flex md:justify-center md:items-center md:gap-20 xl:gap-56 z-20">
    <div class="my-10 z-20">
      <div class="lg:mx-20 z-20">
        <img class="max-w-[120px] lg:max-w-xs" src="/public/images/Affiche_mg.png" alt="Image de l'affiche de Meet My Grill">
      </div>
      <p class="text-center italic my-4">Affiche</p>
    </div>
    <div class="my-10 z-20">
      <div class="lg:mx-20 z-20">
        <img class="max-w-[120px] lg:max-w-xs" src="/public/images/menu1_mg.png" alt="Image de présentation du menu">
      </div>
      <p class="text-center italic my-4">Menu de présentation</p>
    </div>
  </div>
    
  <div class="md:flex md:justify-center md:items-center md:gap-16 lg:mx-40 lg:my-20 ">
    <div class="z-20">
      <p class="my-4">Nous avons créé une variété de supports de communication pour "Meet My Grill", notamment un dossier de communication soigneusement conçu. Ce dossier capture l'essence de notre identité centrée sur la viande rouge et le feu, avec des images vibrantes et une présentation claire de notre offre culinaire, notre menu et nos services. C'est un outil essentiel qui comment nous avons réaliser l'identité complète de "Meet My grill"</p>
    </div>
    <div class="z-20">
      <img src="/public/images/img_com_mg.png" class="w-[70%] mx-auto shadow-white shadow" alt="Image de présentation du dossier de communication de Meet My Grill">
      <div class="flex justify-end my-4 mr-10 font-bold xl:justify-end xl:my-4">
        <a class="hover_1 text-sm lg:text-lg italic" href="Dossier_com_mg.pdf" target="_blank">Télécharger</a>
      </div>
    </div>
  </div>
    
  <div class="lg:w-1/2 lg:my-20 lg:ml-40 z-20">
    <p>Nous avons créé une variété de supports de communication pour "Meet My Grill", notamment un dossier de communication soigneusement conçu. Ce dossier capture l'essence de notre identité centrée sur la viande rouge et le feu, avec des images vibrantes et une présentation claire de notre offre culinaire, notre menu et nos services. C'est un outil essentiel qui invite nos clients à découvrir et à vivre l'expérience "Meet My Grill" de manière immersive et mémorable.</p>
  </div>
  <div class="lg:mb-40 lg:mt-20 mx-10 xl:mx-20 z-20">
    <h2 class="font-bold text-lg lg:text-4xl my-10 mx-10 ">Galerie Photo</h2>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center items-center gap-10 lg:gap-36 xl:gap-64">
      <div class="lg:mx-10 z-20">
        <img class="max-w-[250px]  lg:max-w-md src="/public/images/menu2_mg.png" alt="Image du menu de Meet My Grill">
      </div>
      <div class="lg:mx-10 z-20">
        <img class="max-w-[250px] lg:max-w-md xl:max-w-sm" src="/public/images/website_mg.png" alt="Image du site internet de Meet My Grill">
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
