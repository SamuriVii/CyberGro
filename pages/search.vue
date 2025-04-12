<template>
  <div class="px-6 py-8 bg-[#1a1a1a] text-white">  
    <div v-if="filteredProducts.length" class="space-y-6">
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="w-[96%] mx-auto bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-[#ff413d] 
         transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_10px_#ff413d] 
         group cursor-pointer"
        >
        <div class="flex items-center gap-4">
          <!-- Product Image -->
          <img :src="product.image" alt="product image" class="w-24 h-24 object-cover rounded-md group-hover:brightness-110 transition" />

          <!-- Product Info -->
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-yellow-300 font-orbitron tracking-wide">{{ product.name }}</h2>
            <p class="text-sm text-gray-400">{{ product.delivery }}</p>
            <p class="text-green-400 font-extrabold text-lg mt-2 font-orbitron tracking-wider drop-shadow-[0_0_3px_#00ff99]">
              {{ product.price }} €
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <p v-else class="text-center text-[#ff413d] font-orbitron text-lg mt-10 tracking-widest drop-shadow-[0_0_6px_#ff413d]">
      No results found.
    </p>
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
  