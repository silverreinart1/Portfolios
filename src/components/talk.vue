<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-6 animate-spin animate-infinite animate-ease-in-out animate-alternate animate-fill-both">
    <!-- Contact Form -->
    <form
      action="https://formspree.io/f/xovqllnb"
      method="POST"
      class="bg-[#1a1a1a] p-6 rounded-md max-w-md w-full space-y-6"
    >
      <h1 class="text-[#DAC5A7] text-3xl font-bold text-center">Contact Us</h1>
      
      <!-- Email Field -->
      <label class="block text-[#DAC5A7] text-sm">
        Your Email:
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Your Email"
          class="w-full bg-[#1a1a1a] text-[#DAC5A7] border border-[#DAC5A7] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7]"
        />
      </label>

      <!-- Name Field -->
      <label class="block text-[#DAC5A7] text-sm">
        Your Name:
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Your Name"
          class="w-full bg-[#1a1a1a] text-[#DAC5A7] border border-[#DAC5A7] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7]"
        />
      </label>

      <!-- Message Field -->
      <label class="block text-[#DAC5A7] text-sm">
        Your Message:
        <textarea 
          name="message" 
          required 
          placeholder="Your Message"
          rows="5"
          class="w-full bg-[#1a1a1a] text-[#DAC5A7] border border-[#DAC5A7] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7]"
        ></textarea>
      </label>

      <!-- Submit Button -->
      <button 
        type="submit" 
        class="w-full bg-[#DAC5A7] text-black rounded px-4 py-2 uppercase font-semibold hover:bg-opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
