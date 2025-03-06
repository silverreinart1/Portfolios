<template>
  <div id="app">
    <nav class="bg-gradient-to-r from-gray-900 to-black flex items-center justify-between py-4 px-8 shadow-lg">
      <div class="flex items-center">
        <router-link to="portfolio" class="text-[#d4bea4] font-bold text-lg tracking-widest mr-8 uppercase animate-ping animate-infinite animate-ease-linear animate-alternate animate-fill-both">SILVER</router-link>

        <div class="flex space-x-8 text-[#d4bea4] text-sm font-light uppercase">
          <router-link to="/services" class="hover:text-gray-400 transition duration-300">Silver(Me)</router-link>
          <router-link to="/page" class="hover:text-gray-400 transition duration-300">Work</router-link>
          <router-link to="/about" class="hover:text-gray-400 transition duration-300">About</router-link>
        </div>
      </div>

      <router-link 
        to="/talk" 
        class="ml-auto relative overflow-hidden rounded-[40px] w-[200px] px-[50px] py-[20px] text-center text-white uppercase tracking-[8px] text-xs font-semibold border-0 block">
        <span class="relative z-10">Let's talk</span>
        <div class="liquid absolute top-[-80px] left-0 w-[200px] h-[200px] bg-[#4973ff] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 before:content-[''] before:w-[200%] before:h-[200%] before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:translate-y-[-75%] before:bg-[rgba(20,20,20,1)] before:rounded-[45%] before:animate-[animate_5s_linear_infinite] after:content-[''] after:w-[200%] after:h-[200%] after:absolute after:top-0 after:left-[50%] before:translate-x-[-50%] before:translate-y-[-75%] after:bg-[rgba(20,20,20,0.5)] after:rounded-[40%] after:animate-[animate_10s_linear_infinite]"></div>
      </router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>


<style>
@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

router-link:hover .liquid {
  top: -120px;
}
</style>