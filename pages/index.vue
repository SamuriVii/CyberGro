<!-- pages/index.vue -->
<template>
    <div>
      <!-- Banner Section -->
      <BasicSlider />
  
      <!-- Categories Section -->
      <CategoryScroller :categories="categories" />
  
      <!-- Home Section 1 & 2 -->
      <HomeSection title="Need a Vehicle? We'll Fit You With One!" :products="products_1" />
      <HomeSection title="Militech Specials – Tactical Drones & Gear" :products="products_2" />
  
      <!-- Inspirations -->
      <InspirationBanner :items="inspirations" />
  
      <!-- Home Section 3 & 4 -->
      <HomeSection title="Neon-Infused Streetwear Drops" :products="products_3" />
      <HomeSection title="Boost Your System – Top Rated Implants" :products="products_4" />
    </div>
  </template>
  
  <script setup lang="ts">
  import BasicSlider from "~/components/BasicSlider.vue"
  import CategoryScroller from "~/components/CategoryScroller.vue"
  import HomeSection from "~/components/HomeSection.vue"
  import InspirationBanner from "~/components/InspirationBanner.vue"
  import { products_1, products_2, products_3, products_4 } from '@/data/products'
  
  const categories = [
    { image: 'images/circle_red_1.png', label: 'Augmentations' },
    { image: 'images/circle_red_2.png', label: 'Armor & Gear' },
    { image: 'images/circle_red_3.png', label: 'Vehicles' },
    { image: 'images/circle_red_4.png', label: 'Software Licenses' }
  ]
  
  const inspirations = [
    { image: '/images/inspirations/inspiration_1.jpg', title: 'Neural Enhancements' },
    { image: '/images/inspirations/inspiration_2.jpg', title: 'Reactive Armor Wear' },
    { image: '/images/inspirations/inspiration_3.jpg', title: 'Cyber Streetwear' },
    { image: '/images/inspirations/inspiration_4.jpg', title: 'Military Grade Implants' },
    { image: '/images/inspirations/inspiration_5.jpg', title: 'Combat Drones' },
    { image: '/images/inspirations/inspiration_6.jpg', title: 'Neon Cruisers' },
  ]
  </script>
  