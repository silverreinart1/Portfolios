<template>
  <div class="min-h-screen bg-black p-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-6 flex justify-center" style="color: #DAC5A7;">My work</h2>
      <h2 class="flex justify-center text-[#DAC5A7] text-2xl">Here is my work</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div class="project-box">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: #DAC5A7;">
            Disainimajaka tehnikarendi süsteem
          </h3>
          <p class="text-sm mb-4 text-center" style="color: #DAC5A7;"></p>
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

        <div class="project-box">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: #DAC5A7;">
            AI-projekt
          </h3>
          <p class="text-sm mb-4 text-center" style="color: #DAC5A7;"></p>
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

        <div class="project-box">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: #DAC5A7;">
            Oppenheimeri leht
          </h3>
          <p class="text-sm mb-4 text-center" style="color: #DAC5A7;"></p>
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

        <div class="project-box">
          <h3 class="text-lg font-semibold mb-2 text-center" style="color: #DAC5A7;">
            Metallica-Website
          </h3>
          <p class="text-sm mb-4 text-center" style="color: #DAC5A7;"></p>
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
.project-box {
  background-color: #1a1a1a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 2rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.project-link {
  padding: 0.75rem 1.5rem;
  background-color: #DAC5A7;
  color: black;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
  text-align: center;
}

.project-link:hover {
  background-color: #c9b08f;
}
</style>
