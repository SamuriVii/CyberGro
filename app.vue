<template>
  <div data-atr="tenDiv">
    <NuxtRouteAnnouncer />
    <!-- Navbar Section -->
    <Navbar/>
    <!-- Banner Section -->
    <BasicSlider/>
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
    
    <!-- Footer Section -->
    <FooterMain />
  </div>
</template>

<script setup lang="ts">

  import Navbar from "~/components/Navbar.vue";
  import BasicSlider from "~/components/BasicSlider.vue";


  // Categories
  const categories = [
    { image: 'images/circle_red_1.png', label: 'Augmentations' },
    { image: 'images/circle_red_2.png', label: 'Armor & Gear' },
    { image: 'images/circle_red_3.png', label: 'Vehicles' },
    { image: 'images/circle_red_4.png', label: 'Software Licenses' }
  ]

  // Inspirations
  const inspirations = [
    { image: '/images/inspirations/inspiration_1.jpg', title: 'Neural Enhancements' },
    { image: '/images/inspirations/inspiration_2.jpg', title: 'Reactive Armor Wear' },
    { image: '/images/inspirations/inspiration_3.jpg', title: 'Cyber Streetwear' },
    { image: '/images/inspirations/inspiration_4.jpg', title: 'Military Grade Implants' },
    { image: '/images/inspirations/inspiration_5.jpg', title: 'Combat Drones' },
    { image: '/images/inspirations/inspiration_6.jpg', title: 'Neon Cruisers' },
  ]

  // Products
  const products_1 = [
    { image: '/images/products/product_1_1.jpg', name: 'GhostRunner Hoverbike X9', price: '28499.00', delivery: 'delivers in 48h' },
    { image: '/images/products/product_1_2.jpg', name: 'Neon Drift Cruiser GT', price: '31750.00', delivery: 'ready tomorrow' },
    { image: '/images/products/product_1_3.jpg', name: 'Militech Armored Van C-Class', price: '44890.00', delivery: 'in 3 days' },
    { image: '/images/products/product_1_4.jpg', name: 'Quadra Nightblade XT', price: '39999.00', delivery: 'available now' },
    { image: '/images/products/product_1_5.jpg', name: 'UrbanCrawler Patrol Bike', price: '15490.00', delivery: 'in 24h' },
  ]

  const products_2 = [
    { image: '/images/products/product_2_1.jpg', name: 'Recon Stealth Drone V4', price: '8420.00', delivery: 'delivers in 2 days' },
    { image: '/images/products/product_2_2.jpg', name: 'Combat Bot SENTRY MkIII', price: '12999.00', delivery: 'tomorrow' },
    { image: '/images/products/product_2_3.jpg', name: 'EMP Pulse Grenade x3 Pack', price: '760.00', delivery: 'in 24h' },
    { image: '/images/products/product_2_4.jpg', name: 'Signal Jammer – CorpWave TX', price: '2699.00', delivery: 'in 2 days' },
  ]

  const products_3 = [
    { image: '/images/products/product_3_1.jpg', name: 'Kevlar-Lined Hoodie X-Tek', price: '289.00', delivery: 'ready tomorrow' },
    { image: '/images/products/product_3_2.jpg', name: 'Neon Visor Glasses 2077', price: '159.90', delivery: 'in 2 days' },
    { image: '/images/products/product_3_3.jpg', name: 'AR Reactive Jacket – GhostBlack', price: '469.00', delivery: 'in 2 days' },
    { image: '/images/products/product_3_4.jpg', name: 'CyberSneaks Pulse Vibe', price: '329.00', delivery: 'tomorrow' },
    { image: '/images/products/product_3_5.jpg', name: 'DigitalCam Urban Mask', price: '122.00', delivery: 'in 3 days' },
  ]

  const products_4 = [
    { image: '/images/products/product_4_1.jpg', name: 'Neural Boost Chip (Gen-5)', price: '899.00', delivery: 'ready now' },
    { image: '/images/products/product_4_2.jpg', name: 'OcuScan Smart Optics', price: '1120.00', delivery: 'in 48h' },
    { image: '/images/products/product_4_3.jpg', name: 'Kinetic Arm Servo – Titan-X', price: '2390.00', delivery: 'in 2 days' },
    { image: '/images/products/product_4_4.jpg', name: 'Subdermal Armor Grid (Lv2)', price: '1780.00', delivery: 'tomorrow' },
    { image: '/images/products/product_4_5.jpg', name: 'Memory Expander 128Tb XR', price: '655.00', delivery: 'in 3 days' },
  ]

 </script>
