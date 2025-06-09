<template>
  <div>
    <!-- Banner Section -->
    <BasicSlider />

    <!-- Categories Section -->
    <CategoryScroller />

    <!-- Home Section 1 & 2 -->
    <HomeSection title="Need a Vehicle? We'll Fit You With One!" :products="products_1" />
    <HomeSection title="Militech Specials – Tactical Drones & Gear" :products="products_2" />

    <!-- Inspirations -->
    <InspirationBanner />

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

    const { data, pending, error } = await useFetch('/api/products')
    const products = computed(() => data.value?.products || [])
    
    const products_1 = computed(() => 
      products.value.filter(product => product.category === 'vehicles').slice(0, 5)
    )

    const products_2 = computed(() => 
      products.value.filter(product => product.category === 'armor & gear').slice(0, 5)
    ) 

    const products_3 = computed(() => 
      products.value.filter(product => product.category === 'augmentations').slice(0, 5)
    ) 

    const products_4 = computed(() => 
      products.value.filter(product => product.category === 'software licenses').slice(0, 5)
    )
</script>