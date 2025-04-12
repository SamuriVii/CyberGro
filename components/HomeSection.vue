<template>
  <section class="bg-[#1a1a1a] py-10 px-4">
    <div class="max-w-7xl mx-auto">

      <!-- Title -->
      <h2 class="text-xl sm:text-2xl font-orbitron text-yellow-300 uppercase tracking-wider mb-6 shadow-[0_0_6px_#ff413d] text-center sm:text-left sm:pl-2">
        {{ title }}
      </h2>

      <!-- Products -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :delivery="product.delivery"
          :slug="product.slug"
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
      slug: string
    }[]
  }>()

  const router = useRouter()
  const goToProduct = () => {
    router.push(`/product/${props.slug}`)
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }
</style>
