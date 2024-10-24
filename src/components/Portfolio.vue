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
      <img src="logo1.png" alt="Logo 1" class="h-8" />
      <img src="logo2.png" alt="Logo 2" class="h-8" />
      <img src="logo3.png" alt="Logo 3" class="h-8" />
      <img src="logo4.png" alt="Logo 4" class="h-8" />
      <img src="logo5.png" alt="Logo 5" class="h-8" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="bg-beige p-8 text-center">
        <h3 class="text-3xl font-bold mb-4">01</h3>
        <h2 class="text-xl font-semibold mb-4">WEB DESIGN</h2>
        <p class="mb-4">
          Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
        </p>
        <a href="#" class="text-black font-bold">ABOUT WEBDESIGN →</a>
      </div>

      <div class="bg-beige p-8 text-center">
        <h3 class="text-3xl font-bold mb-4">02</h3>
        <h2 class="text-xl font-semibold mb-4">DEVELOPMENT</h2>
        <p class="mb-4">
          Get custom web development solutions tailored to your specifications, designed to deliver a flawless user experience.
        </p>
        <a href="#" class="text-black font-bold">ABOUT WEBFLOW →</a>
      </div>

      <div class="bg-beige p-8 text-center">
        <h3 class="text-3xl font-bold mb-4">03</h3>
        <h2 class="text-xl font-semibold mb-4">CONTENT & SEO</h2>
        <p class="mb-4">
          Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.
        </p>
        <a href="#" class="text-black font-bold">ABOUT SEO →</a>
      </div>
    </div>
  </section>
</template>