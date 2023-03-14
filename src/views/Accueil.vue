<template>
    <header class="font-raleway italic font-extrabold relative z-20">
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
  <main class="bg-black text-white font-raleway font-semibold">
    <div>
      <img class="w-80 top-0 right-0 absolute z-10 " src="/public/images/Ellipse.png" alt="">
    </div>
    <img class="fixed flex items-center justify-center opacity-20 ml-16 mt-20 xl:-mt-10 xl:ml-[350px] xl:w-[50%] w-[60%] z-10 sm:ml-28 md:ml-36 lg:ml-48" src="/public/images/Logo_portefolio.png" alt="Logo">
    <div class="my-20">
      <div class="animate__animated animate__backInLeft mx-10 lg:mx-16">
        <div class="lg:mt-32 xl:p-8 xl:mt-10 z-20">
          <h1 class="md:text-5xl xl:text-6xl">Florentin </h1>
          <h1 class="md:text-5xl xl:text-6xl ml-3 m-1">Demortiere</h1>
        </div>
        <div class="z-20">
          <p class="text-xs md:text-lg my-6 xl:text-xl xl:m-12 xl:pr-8 lg:mx-10 lg:my-10 lg:text-lg xl:-mt-3 opacity-50">Je m'appelle Florentin Demortiere et je suis un étudiant en MMI. Je suis passionné par le design graphique</p>
        </div>
      </div>
      <div class="ml-20 lg:ml-28 xl:ml-44 xl:mt-20 animate__animated animate__backInLeft relative z-20">
        <button class="bg-white flex gap-2 px-3 py-2 md:my-12 lg:px-8 lg:py-3 xl:py-4 rounded-full place-items-center hover:bg-transparent first-child:hidden border-2 text-black font-bold text-xs md:text-base lg:text-lg xl:text-xl   duration-300 hover:text-white">
          <a href="#contact">Me contacter ➔</a> 
        </button>
      </div>
      <div>
        <img class="w-32 lg:w-48 absolute right-4 md:w-36 md:bottom-72 lg:bottom-40 xl:bottom-20 animate__animated animate__rotateIn z-0" src="/public/gif1_pf.gif" alt="gif animé">
      </div>
    </div>
      <div class="wrapper grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center items-center gap-10 py-40 lg:mx-10 relative z-20 justify-center" id="travaux">
        <RouterLink class="card" to="/Logo_Florentin_Demortiere">
          <img class="" src="/public/images/Logo_Florentin_Demortiere.png" alt="Logo Personnel">
          <div class="info">
            <h3 class="text-xl font-bold">Logo personnel</h3>
            <div class="flex justify-center my-3">
              <button class="bg-white text-black border-white border-2 font-bold px-3 py-2 rounded-full hover:bg-transparent hover:text-white duration-300 text-sm">En savoir plus</button>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card" to="/Charte_graphique_Germagny">
              <img class="" src="/public/images/Charte_graphique_Germagny.png" alt="Logo Aide à la reussite">
              <div class="info">
                <h3 class="text-xl font-bold"> Charte graphique Germagny</h3>
                <div class="flex justify-center my-3">
                  <button class="bg-white text-black border-white border-2 font-bold px-3 py-2 rounded-full hover:bg-transparent hover:text-white duration-300 text-sm">En savoir plus</button>
                </div>
              </div>
        </RouterLink>
        <RouterLink class="card" to="/Exposition_Universelle_2025">
          <img class="" src="/public/images/Carte_postal.png" alt="Logo Aide à la reussite">
          <div class="info">
            <h3 class="text-xl font-bold">Exposition Universelle 2025</h3>
            <div class="flex justify-center my-3">
              <button class="bg-white text-black border-white border-2 font-bold px-3 py-2 rounded-full hover:bg-transparent hover:text-white duration-300 text-sm">En savoir plus</button>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card" to="/Motion_design_WebTV">
          <img class="" src="/public/images/Motion_design_WebTV.png" alt="Logo Aide à la reussite">
          <div class="info">
            <h3 class="text-xl font-bold">Motion design WebTV</h3>
            <div class="flex justify-center my-3">
              <button class="bg-white text-black border-white border-2 font-bold px-3 py-2 rounded-full hover:bg-transparent hover:text-white duration-300 text-sm">En savoir plus</button>
            </div>
          </div>
        </RouterLink>
        <RouterLink class="card" to="/Aidealareussite">
          <img class="" src="/public/images/Aidealareussite.png" alt="Logo Aide à la reussite">
          <div class="info">
            <h3 class="text-xl font-bold">Aide à la reussite</h3>
            <div class="flex justify-center my-3">
              <button class="bg-white text-black border-white border-2 font-bold px-3 py-2 rounded-full hover:bg-transparent hover:text-white duration-300 text-sm">En savoir plus</button>
            </div>
          </div>
        </RouterLink>



      </div>
      <div class="relative mt-10 pt-10 lg:mt-28 lg:pt-16 lg:flex lg:gap-20 lg:mx-28 z-20" id="perso">
        <img class="w-40 mx-auto rounded-sm md:w-48 lg:w-64 xl:w-80" src="/public/images/IMG_2248.png" alt="Photo de Florentin Demortiere">
        <div class="mt-4 lg:mt-10">
          <p class=" xl:text-4xl font-bold text-center italic lg:text-left lg:px-10 lg:text-4xl">Florentin Demortiere</p>
          <p class="ml-8 mt-4 lg:mt-10 text-xs text-[#aaaaaa]	 md:text-sm md:px-32 md:text-center lg:text-left lg:px-4 lg:text-base xl:mr-40">Étant passionné par le design depuis quelques années, j’ai réaliser plusieurs projets personnel ou dans le cadre de mes études au sein du Département MMI de Montbéliard.</p>
          <div class="hidden relative lg:flex lg:my-6 lg:justify-end lg:mr-40">
            <a class="bg-white gap-2 px-3 py-2 md:my-12 lg:px-8 lg:py-3 xl:py-4 rounded-full  text-black font-bold text-xs md:text-base lg:text-lg hover:bg-transparent border-2 hover:text-white duration-300" href="CV.pdf" target="_blank">Voir mon CV</a>
          </div>
        </div>
        <div class="flex justify-center my-6 lg:hidden">
            <a class="bg-white gap-2 px-3 py-2 md:my-12 rounded-full  text-black font-bold text-xs md:text-base lg:text-lg hover:scale-110 transition duration-500" href="/public/CV.pdf" target="_blank">Voir mon CV</a>
        </div>
      </div>
      <div class="lg:flex mt-28 mb-28 mx-16 lg:mx-20  lg:ml-40 z-20 xl:ml-52 xl:my-40 relative" id="contact">
        <div class="border-b-2 lg:border-b-0 lg:border-r-2 lg:mx-8 mb-8 pl-4">
          <p class="lg:text-xl xl:text-2xl">Contact</p>
          <div class="mt-6 mx-2 lg:mx-4 xl:mr-32 xl:my-6">
            <a class="text-xs lg:text-base opacity-70 xl:text-lg hover:opacity-100 duration-500" href="mailto:flo.demortiere@laposte.net">flo.demortiere@laposte.net</a>
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
            <a href="https://www.instagram.com/flodem.pro/?hl=fr"><img class="hover:scale-110 duration-300 w-10" src="/public/images/Instagram.webp" alt="logo Instagram"></a>
            <a href="https://www.linkedin.com/in/florentin-demortiere/"><img class="hover:scale-110 duration-300 w-10" src="/public/images/linkedin.webp" alt="Logo Linkedin"></a>
          </div>
        </div>
      </div>
      <div class="text-[10px] italic flex justify-center mx-2 my-1 mt-20 lg:text-xs xl:text-base ">
        <p class="">Portfolio 2023 © - Florentin Demortiere - <RouterLink class="hover:font-black duration-300 underline" to="/mentions_legales">Mentions Légales</RouterLink></p>
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

.hover_2 {
position: relative;
padding: 0 0;
margin: 0 0.5rem;
color: white;
text-decoration: none;
}

.hover_2::after {
content: '';
position: absolute;
left: 50%;
bottom: 0;
transform: translateX(-50%) scaleX(0);
transform-origin: 50% 50%;
width: 50%;
height: 1px;
background-color: rgba(255,255,255,0.8);
transition: transform 250ms;
}

.hover_2:hover::after {
transform: translateX(-50%) scaleX(1);
}

.wrapper {
display: flex;
justify-content: center;
}

.card {
width: 330px;
height: 230px;
border-radius: 15px;
padding: 1.5rem;
position: relative;
display: flex;
align-items: flex-end;
justify-content: center;
transition: 0.4s ease-out;
box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}

.card:hover {
transform: translateY(20px);
}

.card:before {
content: "";
position: absolute;
top: 0;
left: 0;
display: block;
width: 100%;
height: 100%;
border-radius: 15px;
background: rgba(0, 0, 0, 0.6);
z-index: 2;
transition: 0.5s;
opacity: 0;
}

.card:hover:before {
opacity: 1;
}

.card img {
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
border-radius: 15px;
}

.card .info {
position: relative;
z-index: 3;
color: white;
opacity: 0;
transform: translateY(30px);
transition: 0.5s;
}

.card:hover .info {
opacity: 1;
transform: translateY(0px);
}




.hover_1 {
  background:
    linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
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