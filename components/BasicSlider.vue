<template>
  <!-- Hero banner section -->
  <section class="bg-[#1a1a1a] text-white">
    <div class="max-w-7xl mx-auto px-4 py-10">
      <div
        class="bg-gradient-to-r from-[#ff413d] to-[#2a0000] rounded-md shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300"
      >
        <!-- Left: slogan -->
        <div class="p-6 md:p-10 md:w-1/2">
          <div
            class="bg-black bg-opacity-70 text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug p-4 rounded-md font-orbitron tracking-wide shadow-[0_0_6px_#ff413d]"
          >
            Unbeatable Prices,<br />
            New Gear and Many More
          </div>
        </div>

        <!-- Right: rotating banners -->
        <div class="p-6 md:p-10 md:w-1/2 flex justify-center items-center relative h-[200px] sm:h-[240px]">
          <transition name="slide" mode="out-in">
            <img
              :src="images[currentIndex]"
              :key="currentIndex"
              alt="Cyber Banner"
              class="max-h-full max-w-full w-auto h-full object-contain rounded-md border-2 border-[#ff413d] shadow-[0_0_8px_#ff413d] transition-all duration-700"
            />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const images = [
    '/images/banner/banner_1.gif',
    '/images/banner/banner_2.gif',
    '/images/banner/banner_3.gif',
    '/images/banner/banner_4.gif',
    '/images/banner/banner_5.gif',
    '/images/banner/banner_6.gif',
  ]

  const currentIndex = ref(0)
  let intervalId: ReturnType<typeof setInterval>

  onMounted(() => {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % images.length
    }, 5000)
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })
</script>

<style scoped>
  .slide-enter-active {
    animation: slide-in 0.7s ease-out;
  }
  .slide-leave-active {
    animation: slide-out 0.7s ease-in;
  }
  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slide-out {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-60px);
    }
  }
</style>
