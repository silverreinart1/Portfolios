<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
    <div class="relative w-[1920px] h-[1080px] bg-black border-2 border-[#DAC5A7]">
      <form
        action="https://formspree.io/f/xovqllnb"
        method="POST"
        class="bg-[#1a1a1a] p-6 rounded-md max-w-md w-full space-y-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="text-[#DAC5A7] text-3xl font-bold text-center">Contact Us</h1>

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

        <div class="absolute inset-0 flex justify-center items-center">
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
  data() {
    return {
      resetTimer: null, // Timer for resetting the button position
    };
  },
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

      // Clear the reset timer since the button has been moved
      clearTimeout(this.resetTimer);
      this.startResetTimer(button); // Start the reset timer
    },
    moveButtonOnClick(event) {
      const button = event.target;
      const container = event.target.closest('.relative');

      // Fixed 1920x1080 resolution for button movement within the container
      const maxX = container.offsetWidth - button.offsetWidth - 20;
      const maxY = container.offsetHeight - button.offsetHeight - 20;

      // Allow button to move randomly within this container's 1920 x 1080 area on click
      const moveX = Math.random() * maxX;
      const moveY = Math.random() * maxY;
      
      button.style.transition = 'transform 0.3s ease-in-out';
      button.style.transform = `translate(${moveX}px, ${moveY}px)`;

      clearTimeout(this.resetTimer);
      this.startResetTimer(button);
    },

    resetButton(event) {
      const button = event.target;
      button.style.transition = 'transform 0.3s ease-in-out';
      button.style.transform = 'translate(0, 0)'; // Reset button position to the top-left corner
    },

    startResetTimer(button) {
      this.resetTimer = setTimeout(() => {
        button.style.transition = 'transform 0.3s ease-in-out';
        button.style.transform = 'translate(0, 0)'; // Reset button position to the top-left corner
      }, 3000); // Reset button position after 3 seconds
    },
  },
};
</script>

<style>
button {
  cursor: pointer;
}

button:hover {
  background-color: #c2a45f;
}

button:active {
  background-color: #a88b4d;
}

button.absolute {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button.transition {
  transition: transform 0.3s ease-in-out;
}

button.hover {
  background-color: #c2a45f;
}

button.uppercase {
  text-transform: uppercase;
}

button.font-semibold {
  font-weight: 600;
}

button.rounded {
  border-radius: 0.375rem;
}

button.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

button.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

button.w-full {
  width: 100%;
}


</style>