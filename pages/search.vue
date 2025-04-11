<template>
    <div class="px-6 py-8 bg-[#1a1a1a] text-white">  
      <div v-if="filteredProducts.length" class="space-y-6">
        <div v-for="(product, index) in filteredProducts" :key="index" class="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-[#ff413d]">
          <div class="flex items-center gap-4">
            <!-- Product Image -->
            <img :src="product.image" alt="product image" class="w-24 h-24 object-cover rounded-md" />
            
            <!-- Product Info -->
            <div class="flex-1">
              <h2 class="text-lg font-semibold text-yellow-300">{{ product.name }}</h2>
              <p class="text-sm text-gray-400">{{ product.delivery }}</p>
              <p class="text-green-400 font-extrabold text-lg mt-2 font-orbitron tracking-wider drop-shadow-[0_0_3px_#00ff99]">{{ product.price }} €</p>
            </div>
          </div>
        </div>
      </div>
  
      <p v-else class="text-gray-300">No results found.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { allProducts } from '@/data/products'
  
  const route = useRoute()
  
  const searchQuery = computed(() =>
    (route.query.q?.toString().toLowerCase() || '')
  )
  
  const filteredProducts = computed(() =>
    allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value)
    )
  )
  </script>
  