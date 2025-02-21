<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Full 1920x1080 Container -->
    <div class="relative w-[1920px] h-[1080px] bg-black border-2 border-[#DAC5A7]">
      <!-- Contact Form -->
      <form
        action="https://formspree.io/f/xovqllnb"
        method="POST"
        class="bg-[#1a1a1a] p-6 rounded-md max-w-md w-full space-y-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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

        <!-- Button Frame (1920x1080 Fixed Size) -->
        <div class="absolute inset-0 flex justify-center items-center">
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-[#DAC5A7] text-black rounded px-4 py-2 uppercase font-semibold hover:bg-opacity-90 transition absolute"
            @mouseover="moveButton"
            @mousedown="moveButtonOnClick"
            @mouseup="resetButton"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moveButton(event) {
      const button = event.target;
      const container = event.target.closest('.relative');

      // Fixed 1920x1080 resolution for button movement within the container
      const maxX = container.offsetWidth - button.offsetWidth - 20; // 1920px width minus button width
      const maxY = container.offsetHeight - button.offsetHeight - 20; // 1080px height minus button height

      // Allow button to move randomly within this container's 1920x1080 area
      const moveX = Math.random() * maxX; // Random horizontal movement
      const moveY = Math.random() * maxY; // Random vertical movement

      button.style.transition = 'transform 0.3s ease-in-out';
      button.style.transform = `translate(${moveX}px, ${moveY}px)`; // Move button within the 1920x1080 area
    },
    moveButtonOnClick(event) {
      const button = event.target;
      const container = event.target.closest('.relative');

      // Fixed 1920x1080 resolution for button movement within the container
      const maxX = container.offsetWidth - button.offsetWidth - 20;
      const maxY = container.offsetHeight - button.offsetHeight - 20;

      // Allow button to move randomly within this container's 1920x1080 area
      const moveX = Math.random() * maxX;
      const moveY = Math.random() * maxY;

      button.style.transition = 'transform 0.3s ease-in-out';
      button.style.transform = `translate(${moveX}px, ${moveY}px)`; // Move button within the 1920x1080 area
    },
    resetButton(event) {
      const button = event.target;
      button.style.transition = 'transform 0.3s ease-in-out';
      button.style.transform = 'translate(0, 0)';
    },
  },
};
</script>

<style scoped>
/* Prevent scrolling and overflow */
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.min-h-screen {
  height: 100vh; /* Ensure it fills the whole screen height */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevent scrolling */
}

form {
  width: 100%;
  max-width: 400px; /* Adjust the form width */
  position: relative; /* Make sure the button is positioned relative to the form */
}

.button-frame {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  position: absolute; /* Keeps button inside the frame */
  bottom: 10px; /* Default position inside the frame */
  left: 50%;
  transform: translateX(-50%); /* Center the button horizontally by default */
}

</style>
