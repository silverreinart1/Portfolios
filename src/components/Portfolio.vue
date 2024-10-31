
<template>
  <section>
    <div class="bg-black min-h-screen flex flex-col">
    <nav class="flex justify-center items-center px-4 py-2">
      <h1 class="text-white font-bold text-xl mr-4">Silver</h1>

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
  </section>

  <section class="bg-black py-20 px-4">
  <div class="max-w-6xl mx-auto text-center mb-10">
  </div>
  
  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <!-- Service Card 1 -->
    <div class="bg-[#1a1a1a] text-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300">
      <p class="text-lg font-semibold mb-2 text-gray-400">01</p>
      <h3 class="text-2xl font-bold mb-4 text-gray-100">Web Design</h3>
      <p class="text-sm mb-6 text-gray-400">Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
      <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white">
        <span class="bg-gray-700 text-white rounded-full p-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
        ABOUT WEBDESIGN
      </a>
    </div>

    <!-- Service Card 2 -->
    <div class="bg-[#1a1a1a] text-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300">
      <p class="text-lg font-semibold mb-2 text-gray-400">02</p>
      <h3 class="text-2xl font-bold mb-4 text-gray-100">Development</h3>
      <p class="text-sm mb-6 text-gray-400">Custom web development solutions tailored to your specifications, designed to deliver a flawless user experience.</p>
      <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white">
        <span class="bg-gray-700 text-white rounded-full p-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
        ABOUT DEVELOPMENT
      </a>
    </div>

    <!-- Service Card 3 -->
    <div class="bg-[#1a1a1a] text-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300">
      <p class="text-lg font-semibold mb-2 text-gray-400">03</p>
      <h3 class="text-2xl font-bold mb-4 text-gray-100">Content & SEO</h3>
      <p class="text-sm mb-6 text-gray-400">Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.</p>
      <a href="#" class="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white">
        <span class="bg-gray-700 text-white rounded-full p-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
        ABOUT SEO
      </a>
    </div>
  </div>
</section>


  <section class="bg-black py-20 px-4">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl font-light text-gray-300 mb-8">
      Selected <span class="italic font-semibold">Work</span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Project 1 -->
      <a href="https://github.com/mariakallaste/Grupp-H" class="group block relative">
        <img src="/img/logo.png" alt="Space Project" class="w-full h-auto object-cover transition duration-300 group-hover:opacity-75">
        <div class="flex justify-between items-center bg-gray-900 bg-opacity-80 text-white text-sm p-4 absolute bottom-0 w-full">
          <span>Disainimajaka tehnikarendi süsteem</span>
          <span class="text-gray-400">Webdesign</span>
        </div>
      </a>

      <!-- Project 2 -->
      <a href="https://github.com/markheinmets/AI-projekt" class="group block relative">
        <img src="/img/logo1.png" alt="Nova Project" class="w-full h-auto object-cover transition duration-300 group-hover:opacity-75">
        <div class="flex justify-between items-center bg-gray-900 bg-opacity-80 text-white text-sm p-4 absolute bottom-0 w-full">
          <span>AI-projekt</span>
          <span class="text-gray-400">Webdesign</span>
        </div>
      </a>

      <!-- Project 3 -->
      <a href="https://github.com/1kert/school-project" class="group block relative">
        <img src="/img/logo2.png" alt="Sonic Project" class="w-full h-auto object-cover transition duration-300 group-hover:opacity-75">
        <div class="flex justify-between items-center bg-gray-900 bg-opacity-80 text-white text-sm p-4 absolute bottom-0 w-full">
          <span>Oppenheimeri leht</span>
          <span class="text-gray-400">Webdesign</span>
        </div>
      </a>

      <!-- Project 4 -->
      <a href="/projects/solar" class="group block relative">
        <img src="/img/logo3.png" alt="Solar Project" class="w-full h-auto object-cover transition duration-300 group-hover:opacity-75">
        <div class="flex justify-between items-center bg-gray-900 bg-opacity-80 text-white text-sm p-4 absolute bottom-0 w-full">
          <span>Solar</span>
          <span class="text-gray-400">Webdesign</span>
        </div>
      </a>
    </div>

    <a href="/all-projects" class="text-gray-400 mt-6 inline-block hover:text-white">
      <span>SEE ALL</span>
      <svg class="ml-1 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
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


  <section class="bg-black py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-light text-gray-300 text-center mb-10">
      Process <span class="italic font-semibold">Overview</span>
    </h2>

    <div class="relative border-l-2 border-gray-700 pl-8 space-y-12">
      <!-- Step 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div class="bg-[#1a1a1a] p-6 shadow-md text-gray-200 space-y-4">
          <p class="text-sm text-gray-500">DO WE MATCH?</p>
          <h3 class="text-2xl font-bold text-gray-100">Discovery Call</h3>
          <p class="text-sm text-gray-400">Before we start, we determine if and how I can help you. What are your requirements for your new website?</p>
          <ul class="text-sm list-disc pl-5 text-gray-400">
            <li>We get to know each other better</li>
            <li>Determine how I can best assist you</li>
            <li>Understand the goals you have for your website</li>
          </ul>
          <p class="text-xs text-gray-500">2 HOURS</p>
        </div>
        <div class="hidden md:block relative">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-700 text-white rounded-full absolute -left-16 top-1/2 transform -translate-y-1/2">01</div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div class="hidden md:block relative">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-700 text-white rounded-full absolute -right-16 top-1/2 transform -translate-y-1/2">02</div>
        </div>
        <div class="bg-[#1a1a1a] p-6 shadow-md text-gray-200 space-y-4">
          <p class="text-sm text-gray-500">LOREM IPSUM</p>
          <h3 class="text-2xl font-bold text-gray-100">Concept & Strategy</h3>
          <p class="text-sm text-gray-400">Together, we develop a strategy that combines your goals with your target audience's needs.</p>
          <ul class="text-sm list-disc pl-5 text-gray-400">
            <li>UX Design</li>
            <li>Wireframes</li>
            <li>Interactive Prototype</li>
          </ul>
          <p class="text-xs text-gray-500">1 WEEK</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div class="bg-[#1a1a1a] p-6 shadow-md text-gray-200 space-y-4">
          <p class="text-sm text-gray-500">SOME MAGIC</p>
          <h3 class="text-2xl font-bold text-gray-100">Web Design</h3>
          <p class="text-sm text-gray-400">High-end web design tailored to your brand, providing an excellent user experience.</p>
          <ul class="text-sm list-disc pl-5 text-gray-400">
            <li>High-end web design tailored to your brand</li>
            <li>Interactive prototype of the design</li>
          </ul>
          <p class="text-xs text-gray-500">1 WEEK</p>
        </div>
        <div class="hidden md:block relative">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-700 text-white rounded-full absolute -left-16 top-1/2 transform -translate-y-1/2">03</div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div class="hidden md:block relative">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-700 text-white rounded-full absolute -right-16 top-1/2 transform -translate-y-1/2">04</div>
        </div>
        <div class="bg-[#1a1a1a] p-6 shadow-md text-gray-200 space-y-4">
          <p class="text-sm text-gray-500">MORE MAGIC</p>
          <h3 class="text-2xl font-bold text-gray-100">Development</h3>
          <p class="text-sm text-gray-400">In this step, we breathe life into your new high-end design. Modular design systems and CMS integration included.</p>
          <ul class="text-sm list-disc pl-5 text-gray-400">
            <li>Custom framework website</li>
            <li>Modular web design systems</li>
            <li>CMS integration</li>
          </ul>
          <p class="text-xs text-gray-500">2 WEEKS</p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div class="bg-[#1a1a1a] p-6 shadow-md text-gray-200 space-y-4">
          <p class="text-sm text-gray-500">READY TO GO</p>
          <h3 class="text-2xl font-bold text-gray-100">Website Onboarding</h3>
          <p class="text-sm text-gray-400">Personal workshop on how to make changes to your new website quickly and easily.</p>
          <ul class="text-sm list-disc pl-5 text-gray-400">
            <li>Personal workshop</li>
            <li>Personalized video tutorials</li>
            <li>Edit text and images directly on your website</li>
          </ul>
          <p class="text-xs text-gray-500">2 HOURS</p>
        </div>
        <div class="hidden md:block relative">
          <div class="flex items-center justify-center w-8 h-8 bg-gray-700 text-white rounded-full absolute -left-16 top-1/2 transform -translate-y-1/2">05</div>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="bg-black text-yellow-500 py-16">
      <div class="text-center mb-8">
        <h2 class="text-4xl font-semibold tracking-widest text-yellow-500">What my <span class="italic">clients say</span></h2>
        <p class="text-gray-400 mt-2">See what my clients have to say about working with me and the results I helped them achieve.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        <div class="bg-black border border-yellow-700 rounded-lg p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <img src="/img/mina2.jpg" alt="Client 1" class="w-12 h-12 rounded-full mr-3">
            <div>
              <h3 class="text-lg font-semibold text-yellow-500">John Smith</h3>
              <p class="text-sm text-gray-400">ABC Company</p>
            </div>
          </div>
          <p class="text-gray-200 text-sm">
            Amazing Results with Arik's Premium Web Design Services. Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.
          </p>
        </div>

        <div class="bg-black border border-yellow-700 rounded-lg p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <img src="/img/mina2.jpg" alt="Client 2" class="w-12 h-12 rounded-full mr-3">
            <div>
              <h3 class="text-lg font-semibold text-yellow-500">Karen Lee</h3>
              <p class="text-sm text-gray-400">Photonova Technologies</p>
            </div>
          </div>
          <p class="text-gray-200 text-sm">
            Professional, Collaborative Web Design Experience with Arik. I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations.
          </p>
        </div>

        <div class="bg-black border border-yellow-700 rounded-lg p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <img src="/img/mina2.jpg" alt="Client 3" class="w-12 h-12 rounded-full mr-3">
            <div>
              <h3 class="text-lg font-semibold text-yellow-500">Emily Davis</h3>
              <p class="text-sm text-gray-400">Omega Solutions</p>
            </div>
          </div>
          <p class="text-gray-200 text-sm">
            Web Design and Content Solutions: Stand Out from the Crowd. Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results.
          </p>
        </div>
      </div>
    </section>


    <section class="relative bg-black text-slate-300 min-h-screen flex items-center justify-center">
    <div class="flex items-center justify-between w-full px-8 md:px-16 lg:px-32">
      <div class="flex-1 text-6xl font-serif text-gray-200 leading-none">
        <p>Silver</p>
        <p>Reinart</p>
      </div>

      <div class="flex-1 max-w-sm text-yellow-100">
        <h3 class="text-2xl font-semibold text-gray-300 mb-4">
          A website that leaves <span class="italic">a lasting impression!</span>
        </h3>
        <p class="text-sm text-gray-400 leading-relaxed">
          Hi, I'm Silver Reinart — a freelancer specializing in premium web design, development, and SEO services.
          I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch
          to every project. Let's work together to bring your vision to life!
        </p>
      </div>
    </div>
  </section>







 
</template>


  

