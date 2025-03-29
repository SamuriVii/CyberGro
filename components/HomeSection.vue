<template>
    <!-- Sekcja z tłem #222 -->
    <section class="bg-[#222222] py-6 px-4">
      <!-- Kontener wyśrodkowany -->
      <div class="max-w-screen-xl mx-auto">
        <!-- Tytuł -->
        <h2 class="text-white text-xl font-semibold mb-4">{{ title }}</h2>
  
        <!-- Produkty w gridzie -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <ProductCard
              v-for="(product, index) in products"
              :key="index"
              :image="product.image"
              :name="product.name"
              :price="product.price"
              :delivery="product.delivery"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import ProductCard from './ProductCard.vue'
  
  defineProps<{
    title: string
    products: {
      image: string
      name: string
      price: string | number
      delivery: string
    }[]
  }>()
  </script>