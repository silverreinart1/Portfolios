<template>
    <div id="app">
    <nav class="bg-gradient-to-r from-gray-900 to-black flex items-center py-4 px-8 shadow-lg">
      <router-link to="portfolio" class="text-[#d4bea4] font-bold text-lg tracking-widest mr-8 uppercase">SILVER</router-link>

      <div class="flex space-x-8 text-[#d4bea4] text-sm font-light uppercase">
        <router-link to="/services" class="hover:text-gray-400 transition duration-300">Services</router-link>
        <router-link to="/page" class="hover:text-gray-400 transition duration-300">Work</router-link>
        <router-link to="/about" class="hover:text-gray-400 transition duration-300">About</router-link>
        <router-link to="/blog" class="hover:text-gray-400 transition duration-300">Blog</router-link>
        <router-link to="/work" class="hover:text-gray-400 transition duration-300">Pages</router-link>
      </div>


        <router-link to="/talk" class="ml-auto bg-[#d4bea4] text-black font-semibold text-xs uppercase px-4 py-2 rounded-md border-2 border-transparent transition duration-300 hover:bg-transparent hover:border-[#d4bea4] hover:text-[#d4bea4]">Let's talk about</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>