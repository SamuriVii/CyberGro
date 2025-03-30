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
    <HomeSection title="Jak niskie ceny, to czas na wiosenne zakupy" :products="produkty1" />
    <HomeSection title="Na czasie" :products="produkty2" />

    <!-- Inspirations -->
    <InspirationBanner :items="inspirations" />

    <!-- Home Section 3 & 4 -->
    <HomeSection title="Gwarancja najniższej ceny w Domu i ogrodzie" :products="produkty3" />
    <HomeSection title="Kupuj z szybką dostawą" :products="produkty4" />
    
    <!-- Footer Section -->
    <FooterMain />
  </div>
</template>

<script setup lang="ts">

  import Navbar from "~/components/Navbar.vue";
  import BasicSlider from "~/components/BasicSlider.vue";


  // Categories
  const categories = [
    { image: 'circle_red_1.png', label: 'Augmentations' },
    { image: 'circle_red_2.png', label: 'Armor & Gear' },
    { image: 'circle_red_3.png', label: 'Vehicles' },
    { image: 'circle_red_4.png', label: 'Software Licenses' }
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
  const produkty1 = [
    { image: 'https://picsum.photos/seed/blender/180/180', name: 'Blender KitchenMix 2000', price: '368,89', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/koszyk/180/180', name: 'Koszyk wielkanocny z kwiatami', price: '65,00', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/baby/180/180', name: 'Ochraniacz dla dzieci CARIBOO', price: '79,90', delivery: 'w środę' },
    { image: 'https://picsum.photos/seed/kosmetyki/180/180', name: 'Zestaw kosmetyków pielęgnacyjnych', price: '278,00', delivery: 'w poniedziałek' },
    { image: 'https://picsum.photos/seed/grill/180/180', name: 'Grill ogrodowy RUSZTY', price: '329,00', delivery: 'we wtorek' },
  ]

  const produkty2 = [
    { image: 'https://picsum.photos/seed/trawa/180/180', name: 'Trawa ogrodowa dekoracyjna', price: '5,99', delivery: 'w środę' },
    { image: 'https://picsum.photos/seed/doniczka/180/180', name: 'Doniczka SMART', price: '12,47', delivery: 'jutro' },
    { image: 'https://picsum.photos/seed/truskawka/180/180', name: 'Truskawka CAŁOROCZNA', price: '28,20', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/lampa/180/180', name: 'Lampa solarna LED ogród', price: '78,90', delivery: 'w 2 dni' },
  ]

  const produkty3 = [
    { image: 'https://picsum.photos/seed/trawa2/180/180', name: 'Trawa NASIONA SKG', price: '69,99', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/nawoz/180/180', name: 'Nawóz 20kg OBORNIK', price: '68,05', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/obuwie/180/180', name: 'Obuwie robocze NEO', price: '64,99', delivery: 'jutro' },
    { image: 'https://picsum.photos/seed/kredki/180/180', name: 'Zestaw 100 kredek kolorowych', price: '59,90', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/ozdoba/180/180', name: 'Ozdoba do ogrodu – zestaw', price: '45,00', delivery: 'we wtorek' },
  ]

  const produkty4 = [
    { image: 'https://picsum.photos/seed/garnek/180/180', name: 'Garnek ceramiczny TADAR', price: '128,90', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/kawa/180/180', name: 'Kawa Tchibo Exclusive 1kg', price: '25,90', delivery: 'jutro' },
    { image: 'https://picsum.photos/seed/rower/180/180', name: 'Rower dziecięcy z kółkami', price: '549,00', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/fotelik/180/180', name: 'Fotelik samochodowy Summer Baby', price: '179,00', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/buty/180/180', name: 'Buty sportowe Puma', price: '268,90', delivery: 'we wtorek' },
  ]

 </script>
