<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="bg-black min-h-screen flex flex-col">
    <nav class="flex justify-center items-center px-4 py-2">
      <h1 class="text-white font-bold text-xl mr-4">arik.</h1>

      <div class="flex space-x-6">
        <a href="#" class="text-white hover:text-gray-400">Services</a>
        <a href="#" class="text-white hover:text-gray-400">Work</a>
        <a href="#" class="text-white hover:text-gray-400">About</a>
        <a href="#" class="text-white hover:text-gray-400">Blog</a>
        <a href="#" class="text-white hover:text-gray-400">Pages</a>
      </div>

      <button class="bg-orange-100 text-black px-4 py-2 rounded-md border-2 ml-4">
        Let's Talk
      </button>
    </nav>

    <div class="flex flex-col items-center justify-center flex-grow text-center bg-cover bg-center" 
         style="background-image: url('/img/mina.jpg'); opacity: 0.85;">
      <div class="z-10">
        <h2 class="text-orange-100 text-6xl font-bold">Web Designer</h2>
        <h3 class="text-orange-100 text-5xl mt-4 italic">& Developer</h3> 
        <p class="text-opacity-30	text-gray-200 text-lg mt-6 max-w-xl">
          Providing web design, development, and SEO services to help your business stand out.
        </p>
      </div>
    </div>
  </div>

  <section class="bg-black text-white py-16"> 
    <div class="flex justify-center space-x-10 mb-16">
      <img src="/img/logos.png" alt="Logo 1" class="h-8" />

    </div>

    <div class="flex justify-center items-center space-x-4 min-h-screen bg-black">
    <div class="relative group w-80 h-64 bg-black rounded-lg shadow-lg p-8 border-2 border-yellow-600">
      <h2 class="text-2xl text-yellow-500 group-hover:text-yellow-400 transition duration-300">01</h2>
      <h3 class="text-xl font-semibold mt-2 text-yellow-500 group-hover:text-yellow-400 transition duration-300">WEB DESIGN</h3>
      <p class="text-sm text-yellow-500 mt-4 group-hover:text-yellow-400 transition duration-300">
        Visually stunning web designs that captivate your audience by blending your brand's voice and customer needs.
      </p>
      <a
        href="#"
        class=" bottom-4 text-yellow-500 group-hover:text-yellow-400 transition duration-300 flex items-center"
      >
        <span>ABOUT WEBDESIGN</span>
        <svg class="ml-2 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
        </svg>
      </a>
    </div>

    <div class="relative group w-80 h-64 bg-black rounded-lg shadow-lg p-8 border-2 border-yellow-600">
      <h2 class="text-2xl text-yellow-500 group-hover:text-yellow-400 transition duration-300">02</h2>
      <h3 class="text-xl font-semibold mt-2 text-yellow-500 group-hover:text-yellow-400 transition duration-300">DEVELOPMENT</h3>
      <p class="text-sm text-yellow-500 mt-4 group-hover:text-yellow-400 transition duration-300">
        Get custom web development solutions tailored to your needs, designed for flawless user experience.
      </p>
      <a
        href="#"
        class=" bottom-4 text-yellow-500 group-hover:text-yellow-400 transition duration-300 flex items-center"
      >
        <span>ABOUT WEBFLOW</span>
        <svg class="ml-2 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
        </svg>
      </a>
    </div>

    <div class="relative group w-80 h-64 bg-black rounded-lg shadow-lg p-8 border-2 border-yellow-600">
      <h2 class="text-2xl text-yellow-500 group-hover:text-yellow-400 transition duration-300">03</h2>
      <h3 class="text-xl font-semibold mt-2 text-yellow-500 group-hover:text-yellow-400 transition duration-300">CONTENT & SEO</h3>
      <p class="text-sm text-yellow-500 mt-4 group-hover:text-yellow-400 transition duration-300">
        Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.
      </p>
      <a
        href="#"
        class=" bottom-4 text-yellow-500 group-hover:text-yellow-400 transition duration-300 flex items-center"
      >
        <span>ABOUT SEO</span>
        <svg class="ml-2 w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
        </svg>
      </a>
    </div>
  </div>
  </section>
  <section class="">
    <div class="min-h-screen bg-black text-yellow-500 py-16 px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-semibold tracking-widest">Selected <span class="italic">Work</span></h2>
      <a href="#" class=" mt-4 text-sm flex items-center space-x-2">
        <span>SEE ALL</span>
        <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
        </svg>
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="group flex flex-col justify-between w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
        <img src="https://picsum.photos/600/400?random=1" alt="Project 1" class="w-full h-auto rounded-lg group-hover:opacity-90 transition duration-300">
        <div class="flex justify-between items-center bg-yellow-800 bg-opacity-50 text-yellow-500 p-4 group-hover:bg-yellow-600 transition duration-300">
          <h3 class="font-semibold">Space</h3>
          <span class="text-sm">WEBDESIGN</span>
        </div>
        <div class="flex justify-center items-center py-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <a href="#" class="text-yellow-500 hover:text-yellow-400">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="group flex flex-col justify-between w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
        <img src="https://picsum.photos/600/400?random=2" alt="Project 2" class="w-full h-auto rounded-lg group-hover:opacity-90 transition duration-300">
        <div class="flex justify-between items-center bg-yellow-800 bg-opacity-50 text-yellow-500 p-4 group-hover:bg-yellow-600 transition duration-300">
          <h3 class="font-semibold">Nova</h3>
          <span class="text-sm">WEBDESIGN</span>
        </div>
        <div class="flex justify-center items-center py-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <a href="#" class="text-yellow-500 hover:text-yellow-400">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="group flex flex-col justify-between w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
        <img src="https://picsum.photos/600/400?random=3" alt="Project 3" class="w-full h-auto rounded-lg group-hover:opacity-90 transition duration-300">
        <div class="flex justify-between items-center bg-yellow-800 bg-opacity-50 text-yellow-500 p-4 group-hover:bg-yellow-600 transition duration-300">
          <h3 class="font-semibold">Sonic</h3>
          <span class="text-sm">WEBDESIGN</span>
        </div>
        <div class="flex justify-center items-center py-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <a href="#" class="text-yellow-500 hover:text-yellow-400">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="group flex flex-col justify-between w-full h-full bg-black rounded-lg overflow-hidden shadow-lg">
        <img src="https://picsum.photos/600/400?random=4" alt="Project 4" class="w-full h-auto rounded-lg group-hover:opacity-90 transition duration-300">
        <div class="flex justify-between items-center bg-yellow-800 bg-opacity-50 text-yellow-500 p-4 group-hover:bg-yellow-600 transition duration-300">
          <h3 class="font-semibold">Solar</h3>
          <span class="text-sm">WEBDESIGN</span>
        </div>
        <div class="flex justify-center items-center py-4 opacity-0 group-hover:opacity-100 transition duration-300">
          <a href="#" class="text-yellow-500 hover:text-yellow-400">
            <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  </section>

  <section class="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-500 py-16 px-4">
    <div class="text-center mb-4">
      <p class="uppercase tracking-wide text-xs text-yellow-600">The Process</p>
    </div>

    <div class="text-center">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-semibold">Your Website</h1>
      <h2 class="italic text-4xl md:text-5xl lg:text-6xl font-light mt-2">in 5 steps</h2>
      <p class="mt-4 text-sm md:text-base lg:text-lg max-w-md mx-auto">
        Our process ensures that we create a website tailored to your business needs.
      </p>
    </div>

    <div class="mt-16">
      <button class="flex items-center justify-center w-10 h-10 bg-yellow-600 rounded-full">
        <svg class="w-6 h-6 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2L11.2929 2.70711 19.5858 11H3v2h16.5858l-8.2929 8.2929L12 22l10-10-10-10z"/>
        </svg>
      </button>
    </div>
  </section>
</template>