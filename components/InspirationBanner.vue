<template>
  <section class="bg-[#1a1a1a] py-8 px-4 border-y-2 border-[#ff413d] shadow-inner shadow-[#ff413d]/30">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <h2 class="text-xl sm:text-2xl font-orbitron text-yellow-300 tracking-wider mb-6 text-center">
        Find Your Inspiration
        <span class="block text-sm text-[#ff413d] mt-1">in Cyber Categories</span>
      </h2>

      <!-- Banner List -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="relative rounded-md overflow-hidden transform hover:scale-105 transition duration-300 shadow-[0_0_10px_#ff413d]"
          >
          <!-- Pictures -->
          <img :src="item.image" :alt="item.title" class="w-full h-40 object-cover"/>

          <!-- Bottom Overlay -->
          <div class="absolute bottom-0 left-0 right-0 bg-black/80 text-yellow-300 text-center py-2 text-xs font-orbitron uppercase tracking-widest">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    items: {
      image: string
      title: string
    }[]
  }>()
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }
</style>
