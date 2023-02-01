<template>
    <header>
        <nav class="lg:flex lg:justify-between">
        <div class="flex justify-between m-4">
          <div class="flex items-center">
            <RouterLink to="/">
              <img class="w-16" src="images/Logo_portefolio.png" alt="Logo Florentin Demortiere"/>
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
              <RouterLink class="px-3" to="/LineSup">Travaux</RouterLink>
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
        <ul class="lg:flex items-center align-baseline text-base mx-4 font-bold hidden xl:text-2xl xl:my-10 text-white" >
          <li class="">
            <RouterLink class="px-12 py-3 duration-500 hover:bg-black hover:text-white hover:p-4 hover:px-6 hover:text-2xl xl:hover:p-10" to="/LineSup">Travaux</RouterLink>
          </li>
          <li class="">
            <RouterLink class="px-12 py-3 duration-500 hover:bg-black hover:text-white hover:p-4 hover:px-6 hover:text-2xl xl:hover:p-10" to="/Barbac">A propos</RouterLink>
          </li>
          <li class="">
            <RouterLink class="px-12 py-3 duration-500 hover:bg-black hover:text-white hover:p-4 hover:px-6 hover:text-2xl xl:hover:p-10" to="/Donuts">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script>

export default {
  name: "App",
  components: {  },
    data() {
    return {
      menuOuvert: false,
    };
    },
}

</script>