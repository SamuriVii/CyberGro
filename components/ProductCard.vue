<template>
    <div class="bg-[#2b2b2b] border border-[#3a3a3a] rounded-md p-2 text-white">
      <img :src="image" alt="produkt" class="rounded mb-2 w-full h-40 object-cover" loading="lazy" />
      <p class="text-sm font-semibold min-h-[48px]">{{ name }}</p>
      <p class="text-green-400 font-bold text-lg mt-1">{{ price }} zł</p>
      <p class="text-xs text-gray-400 mt-1">Dostawa: {{ delivery }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    image: string
    name: string
    price: string | number
    delivery: string
  }>()
  </script>