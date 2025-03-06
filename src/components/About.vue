<template>
  <div class="scene"> 
    <div class="back"></div>
    <div class="slider" v-for="t in 10" :style="`--t: ${t - 1}`" :key="t">
      <i v-for="i in 6" :style="`--i: ${i - 1}`" :key="i"></i>
    </div>
    <div class="ball">
      <div class="innerBall"></div>
    </div>
  </div>
  <section class="bg-black text-[#d4bea4] min-h-screen flex items-center">
  <div class="flex flex-row w-full max-w-screen-xl mx-auto">
    <!-- Left side content -->
    <div class="w-1/3 p-10">
      <header>
        <h1 class="text-[96px] leading-none font-light transition animate-spin animate-infinite animate-ease-in-out animate-alternate animate-fill-both">Silver</h1>
        <h1 class="text-[96px] italic leading-none font-light animate-bounce-constant">Reinart</h1>
        <p class="text-lg mt-6 animate-jump-in">
          Delivering Premium Web Design and Development Services to Boost Your Online Presence.
        </p>
      </header>
    </div>
    
    <!-- Right side content -->
    <div class="w-2/3">
      <div class="bg-[#d4bea4] text-black p-8 rounded-lg shadow-lg">
        <h2 class="text-xl font-light uppercase tracking-wider mb-2">Silver Reinart</h2>
        <h3 class="text-2xl font-light leading-snug mb-4">Your Partner in Bringing Your Web Design Vision to Life</h3>
        
        <div class="flex flex-row gap-6">
          <!-- Bio text column -->
          <div class="w-1/2">
            <p class="mb-4 text-sm">
              Mina olen Silver Reinart, 17-aastane noormees, kes õpib Kuressaare Ametikoolis IT erialal. Olen omandanud mitmeid IT-alaseid oskusi, sealhulgas HTML, CSS, TailwindCSS, JavaScript ja PHP, ning kasutan neid teadmisi enesekindlalt. Mind köidab IT-valdkond, kuna see pakub võimalusi luua praktilisi ja innovaatilisi lahendusi.
              
              Lisaks õpingutele meeldib mulle arvutis aega veeta ja videomänge mängida. Videomängud on minu jaoks nii lõõgastus kui ka inspiratsioon. Vaba aega veedan ka jalgpalli mängides, et hoida end füüsiliselt aktiivsena ja mitmekülgsena.
              
              Minu eesmärk on täiustada oma IT-oskusi ja õppida uusi tehnoloogiaid, näiteks React ja Node.js. Pikaajalises plaanis soovin leida huvitava töökoha IT-sektoris või luua oma projekte.
            </p>
            
            <!-- Social links -->
            <div class="grid grid-cols-3 gap-3 mt-6">
              <a href="#" class="flex justify-center items-center border border-black py-2 px-4 text-center hover:bg-black hover:text-[#d4bea4] transition text-sm">Instagram</a>
              <a href="#" class="flex justify-center items-center border border-black py-2 px-4 text-center hover:bg-black hover:text-[#d4bea4] transition text-sm">Twitter</a>
              <a href="#" class="flex justify-center items-center border border-black py-2 px-4 text-center hover:bg-black hover:text-[#d4bea4] transition text-sm">Facebook</a>
              <a href="#" class="flex justify-center items-center border border-black py-2 px-4 text-center hover:bg-black hover:text-[#d4bea4] transition text-sm">Behance</a>
              <a href="#" class="flex justify-center items-center border border-black py-2 px-4 text-center hover:bg-black hover:text-[#d4bea4] transition text-sm">Dribbble</a>
              <a href="#" class="flex justify-center items-center border border-black py-2 px-4 text-center hover:bg-black hover:text-[#d4bea4] transition text-sm">Pinterest</a>
            </div>
          </div>
          
          <!-- Image column -->
          <div class="w-1/2">
            <div class="image-container">
              <div class="image-wrapper">
                <!-- 5x5 grid of image segments -->
                <div class="image-segment segment-1"></div>
                <div class="image-segment segment-2"></div>
                <div class="image-segment segment-3"></div>
                <div class="image-segment segment-4"></div>
                <div class="image-segment segment-5"></div>
                
                <div class="image-segment segment-6"></div>
                <div class="image-segment segment-7"></div>
                <div class="image-segment segment-8"></div>
                <div class="image-segment segment-9"></div>
                <div class="image-segment segment-10"></div>
                
                <div class="image-segment segment-11"></div>
                <div class="image-segment segment-12"></div>
                <div class="image-segment segment-13"></div>
                <div class="image-segment segment-14"></div>
                <div class="image-segment segment-15"></div>
                
                <div class="image-segment segment-16"></div>
                <div class="image-segment segment-17"></div>
                <div class="image-segment segment-18"></div>
                <div class="image-segment segment-19"></div>
                <div class="image-segment segment-20"></div>
                
                <div class="image-segment segment-21"></div>
                <div class="image-segment segment-22"></div>
                <div class="image-segment segment-23"></div>
                <div class="image-segment segment-24"></div>
                <div class="image-segment segment-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
/* 3D Image Effect Styles */
.image-container {
  position: relative;
  width: 100%;
  height: 320px;
  margin-bottom: 2rem;
  perspective: 1000px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-out;
}

.image-wrapper:hover {
  transform: rotateY(10deg) rotateX(5deg);
}

.image-segment {
  position: absolute;
  background-image: url('/img/mina2.jpg');
  background-size: cover;
  filter: grayscale(100%);
  transition: all 0.5s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Grid segments (5x5) */
.segment-1 { top: 0; left: 0; width: 20%; height: 20%; background-position: 0 0; }
.segment-2 { top: 0; left: 20%; width: 20%; height: 20%; background-position: -20% 0; }
.segment-3 { top: 0; left: 40%; width: 20%; height: 20%; background-position: -40% 0; }
.segment-4 { top: 0; left: 60%; width: 20%; height: 20%; background-position: -60% 0; }
.segment-5 { top: 0; left: 80%; width: 20%; height: 20%; background-position: -80% 0; }

.segment-6 { top: 20%; left: 0; width: 20%; height: 20%; background-position: 0 -20%; }
.segment-7 { top: 20%; left: 20%; width: 20%; height: 20%; background-position: -20% -20%; }
.segment-8 { top: 20%; left: 40%; width: 20%; height: 20%; background-position: -40% -20%; }
.segment-9 { top: 20%; left: 60%; width: 20%; height: 20%; background-position: -60% -20%; }
.segment-10 { top: 20%; left: 80%; width: 20%; height: 20%; background-position: -80% -20%; }

.segment-11 { top: 40%; left: 0; width: 20%; height: 20%; background-position: 0 -40%; }
.segment-12 { top: 40%; left: 20%; width: 20%; height: 20%; background-position: -20% -40%; }
.segment-13 { top: 40%; left: 40%; width: 20%; height: 20%; background-position: -40% -40%; }
.segment-14 { top: 40%; left: 60%; width: 20%; height: 20%; background-position: -60% -40%; }
.segment-15 { top: 40%; left: 80%; width: 20%; height: 20%; background-position: -80% -40%; }

.segment-16 { top: 60%; left: 0; width: 20%; height: 20%; background-position: 0 -60%; }
.segment-17 { top: 60%; left: 20%; width: 20%; height: 20%; background-position: -20% -60%; }
.segment-18 { top: 60%; left: 40%; width: 20%; height: 20%; background-position: -40% -60%; }
.segment-19 { top: 60%; left: 60%; width: 20%; height: 20%; background-position: -60% -60%; }
.segment-20 { top: 60%; left: 80%; width: 20%; height: 20%; background-position: -80% -60%; }

.segment-21 { top: 80%; left: 0; width: 20%; height: 20%; background-position: 0 -80%; }
.segment-22 { top: 80%; left: 20%; width: 20%; height: 20%; background-position: -20% -80%; }
.segment-23 { top: 80%; left: 40%; width: 20%; height: 20%; background-position: -40% -80%; }
.segment-24 { top: 80%; left: 60%; width: 20%; height: 20%; background-position: -60% -80%; }
.segment-25 { top: 80%; left: 80%; width: 20%; height: 20%; background-position: -80% -80%; }

/* Hover effects for specific segments */
.image-wrapper:hover .segment-3 { transform: translateZ(60px) rotate(-5deg); opacity: 0; }
.image-wrapper:hover .segment-7 { transform: translateZ(90px) rotate(10deg); opacity: 0.3; }
.image-wrapper:hover .segment-8 { transform: translateZ(70px) rotate(-15deg); opacity: 0.2; }
.image-wrapper:hover .segment-9 { transform: translateZ(50px) translateX(20px); opacity: 0; }
.image-wrapper:hover .segment-12 { transform: translateZ(100px) rotate(20deg); opacity: 0.1; }
.image-wrapper:hover .segment-13 { transform: translateZ(120px) rotate(-5deg); opacity: 0; }
.image-wrapper:hover .segment-14 { transform: translateZ(80px) translateY(-20px); opacity: 0; }
.image-wrapper:hover .segment-17 { transform: translateZ(60px) translateX(-30px); opacity: 0.2; }
.image-wrapper:hover .segment-18 { transform: translateZ(90px) scale(0.7); opacity: 0; }
.image-wrapper:hover .segment-19 { transform: translateZ(70px) rotate(15deg); opacity: 0.3; }
.image-wrapper:hover .segment-23 { transform: translateZ(110px) translateY(20px); opacity: 0; }
</style>

<!-- <style scoped>
*, *::before, *::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}

body {
  background-color: #aaa;
  min-height: 100vh;
  display: grid;
  place-items: center;
  perspective: 200vh;
  overflow: hidden;
}

.scene {
  --duration: 16s;
  position: relative;
  animation: scene calc(var(--duration) * 2) infinite linear;
}

@keyframes scene {
  from { transform: rotate(0deg) rotateX(30deg) rotate(360deg); }
  to { transform: rotate(360deg) rotateX(30deg) rotate(0deg); }
}

.back {
  position: absolute;
  inset: -200vh -40vh;
  background-color: #f00;
  transform: translateZ(-8vh);
  background:
    linear-gradient(to right, #aaa, transparent, #aaa),
    repeating-linear-gradient(#ddd 0 1vh, transparent 0 9.375vh) 0 0 / 100% 100%,
    conic-gradient(from 270deg at 1vh 50%, #ddd 0 90deg, transparent 0) 2vh 0 / 18.75vh 18.75vh,
    conic-gradient(from 270deg at 1vh 50%, #ddd 0 90deg, transparent 0) 11.375vh 9.375vh / 18.75vh 18.75vh;
  animation: sliderY var(--duration) infinite linear;
}

.slider {
  --delay: calc(var(--duration) / -10 * var(--t));
  position: absolute;
  animation: sliderY var(--duration) var(--delay) infinite linear;
}

.slider i {
  --border-color: hsl(calc(var(--t) * 36) 75% calc(var(--i) * 5% + 25%));
  position: absolute;
  inset: -12vh -8vh;
  border-radius: 50%;
  border: 1vh solid;
  transform: translateZ(calc(var(--i) * 0.3vh + 1vh));
}

.slider i::after {
  content: '';
  position: absolute;
  inset: -1vh;
  border: inherit;
  border-radius: inherit;
  transform: translateZ(-3.5vh);
}

.slider::after {
  --border-color: #000;
  content: '';
  position: absolute;
  inset: -12vh -8vh;
  border-radius: 50%;
  border: 1vh solid;
  border-color: transparent transparent #000 #000;
  transform: translateZ(-8vh);
  filter: blur(1vh);
}

.slider:nth-child(odd) i, .slider:nth-child(odd)::after {
  border-color: transparent var(--border-color) var(--border-color) transparent;
}

.slider:nth-child(even) i, .slider:nth-child(even)::after {
  border-color: transparent transparent var(--border-color) var(--border-color);
}

@keyframes sliderY {
  from { translate: var(--translateX, 0) 93.75vh; }
  to { translate: var(--translateX, 0) -93.75vh; }
}

.ball {
  position: absolute;
  animation:
    ballX calc(var(--duration) / 5) infinite ease-in-out,
    ballY calc(var(--duration) / 10) calc(var(--duration) * -9.975) infinite;
}

.ball::before {
  content: '';
  position: absolute;
  inset: -2vh;
  border-radius: 50%;
  background-color: #0007;
  transform: translateZ(-8vh);
  filter: blur(1vh);
}

@keyframes ballX {
  0%, 100% { translate: 16vh; }
  50% { translate: -16vh; }
}

@keyframes ballY {
  0%, 100%{ transform: translateY(5vh); animation-timing-function: cubic-bezier(.3,.0,.58,1); }
  36% { transform: translateY(-5vh); animation-timing-function: cubic-bezier(.42,0,.7,1); }
}

.innerBall {
  position: absolute;
  inset: -2vh;
  border-radius: 50%;
  background-image: radial-gradient(circle at 50% 15%, #fff, #000);
  animation: innerBall calc(var(--duration) * 2) infinite linear;
}

@keyframes innerBall {
  from { transform: rotate(0deg) rotateX(-30deg) rotate(360deg); }
  to { transform: rotate(360deg) rotateX(-30deg) rotate(0deg); }
}
</style> -->