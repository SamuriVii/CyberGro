<template>
    <div class="bg-[#222222] py-4">
      <div class="max-w-screen-xl mx-auto px-4 overflow-x-auto">
        <div class="flex gap-6">
          <div
              v-for="(category, index) in categories"
              :key="index"
              class="flex flex-col items-center min-w-[80px]"
          >
            <img :src="category.image" alt="kategoria" class="w-12 h-12 object-cover rounded-full mb-1" />
            <span class="text-white text-xs text-center">{{ category.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    categories: {
      image: string
      label: string
    }[]
  }>()
  </script>