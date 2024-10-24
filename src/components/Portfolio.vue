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
</template>