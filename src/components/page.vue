<template>
  <div class="min-h-screen bg-black p-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-6 flex justify-center " style="color: white;">My work</h2>
      <h2 class="flex justify-center text-[white] text-2xl">Here is my work</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 ">
        <div class="project-box animate-spin animate-infinite animate-ease-in-out animate-alternate animate-fill-both">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: white;">
            Disainimajaka tehnikarendi süsteem
          </h3>
          <p class="text-sm mb-4 text-center" style="color: white;"></p>
          <div class="flex justify-center">
            <a
              href="https://github.com/mariakallaste/Grupp-H"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-box animate-spin animate-infinite animate-ease-in-out animate-alternate animate-fill-both">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: white;">
            AI-projekt
          </h3>
          <p class="text-sm mb-4 text-center" style="color: white;"></p>
          <div class="flex justify-center">
            <a
              href="https://github.com/markheinmets/AI-projekt"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-box animate-spin animate-infinite animate-ease-in-out animate-alternate animate-fill-both">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: white;">
            Oppenheimeri leht
          </h3>
          <p class="text-sm mb-4 text-center" style="color: white;"></p>
          <div class="flex justify-center">
            <a
              href="https://github.com/1kert/school-project"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-box animate-spin animate-infinite animate-ease-in-out animate-alternate animate-fill-both">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: white;">
            Metallica-Website
          </h3>
          <p class="text-sm mb-4 text-center" style="color: white;"></p>
          <div class="flex justify-center">
            <a
              href="https://github.com/JakobVapper/Metallica-Website"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style scoped>
/* Project box with neon border */
.project-box {
  background-color: #1a1a1a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 2rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Neon border */
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(#1a1a1a, #1a1a1a),
                    linear-gradient(45deg, rgba(218, 197, 167, 0.7), rgba(255, 255, 255, 0.4));
  border-radius: 0.5rem;
}

/* Glowing effect on hover */
.project-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2), 
              0 0 20px rgba(218, 197, 167, 0.7);
  border-image-source: linear-gradient(45deg, rgba(218, 197, 167, 1), rgba(255, 255, 255, 0.8));
}

/* View Project Button */
.project-link {
  padding: 0.75rem 1.5rem;
  background-color: #DAC5A7;
  color: white; /* White text for better contrast */
  font-weight: bold;
  border-radius: 0.375rem;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 6px rgba(218, 197, 167, 0.3);
}

.project-link:hover {
  background-color: #c9b08f;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(218, 197, 167, 0.5);
}

/* Rainbow UnderGlow for "My Work" */
h2.text-4xl {
  position: relative;
  text-shadow: 0 0 10px rgba(218, 197, 167, 0.8);
}

h2.text-4xl::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  filter: blur(5px);
  opacity: 0.8;
  transition: transform 0.3s ease;
  animation: rainbowGlow 3s linear infinite;
}

/* Rainbow UnderGlow for "Here is my work" */
h2.text-2xl {
  position: relative;
  text-shadow: 0 0 5px rgba(218, 197, 167, 0.5);
}

h2.text-2xl::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  filter: blur(5px);
  opacity: 0.8;
  transition: transform 0.3s ease;
  animation: rainbowGlow 3s linear infinite;
}

/* Rainbow Glow Animation */
@keyframes rainbowGlow {
  0% { filter: blur(5px) hue-rotate(0deg); }
  50% { filter: blur(6px) hue-rotate(180deg); }
  100% { filter: blur(5px) hue-rotate(360deg); }
}

</style>