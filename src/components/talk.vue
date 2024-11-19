<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-6 p-20">
    <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="hidden lg:flex items-center justify-center">
        <img 
          src="/img/mina2.jpg" 
          alt="Person" 
          class="w-56 h-56s object-cover rounded-full grayscale" 
        />
      </div>


      <div class="flex flex-col justify-center">
        <h2 class="text-[#DAC5A7] text-sm uppercase tracking-widest mb-2">Contact</h2>
        <h1 class="text-[#DAC5A7] text-4xl font-bold mb-8">Let’s
          get in touch.</h1>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-[#DAC5A7] text-sm">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              class="w-full bg-[#1a1a1a] text-[#DAC5A7] border border-[#DAC5A7] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7]"
            />
          </div>

          <div>
            <label for="email" class="block text-[#DAC5A7] text-sm">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              class="w-full bg-[#1a1a1a] text-[#DAC5A7] border border-[#DAC5A7] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7]"
            />
          </div>

          <div>
            <label for="message" class="block text-[#DAC5A7] text-sm">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Your Message" 
              class="w-full bg-[#1a1a1a] text-[#DAC5A7] border border-[#DAC5A7] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7]"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-[#DAC5A7] text-black rounded px-4 py-2 uppercase font-semibold hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div class="mt-12 space-y-4">
          <a 
            href="#" 
            class="flex items-center justify-between bg-[#1a1a1a] text-[#DAC5A7] px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            <span>Instagram</span>
            <span>&rarr;</span>
          </a>
          <a 
            href="#" 
            class="flex items-center justify-between bg-[#1a1a1a] text-[#DAC5A7] px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            <span>Twitter</span>
            <span>&rarr;</span>
          </a>
          <a 
            href="#" 
            class="flex items-center justify-between bg-[#1a1a1a] text-[#DAC5A7] px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            <span>Facebook</span>
            <span>&rarr;</span>
          </a>
          <a 
            href="#" 
            class="flex items-center justify-between bg-[#1a1a1a] text-[#DAC5A7] px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
          >
            <span>Dribbble</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Talk",
};
</script>
