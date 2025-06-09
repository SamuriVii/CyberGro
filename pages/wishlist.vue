<template>
  <div class="px-6 py-8 bg-[#1a1a1a] text-white min-h-[60vh]">
    <h1 class="text-2xl font-orbitron text-yellow-300 mb-6 tracking-wide drop-shadow-[0_0_6px_#ff413d]">
      Your Wishlist
    </h1>
    <div v-if="wishlistedProducts.length" class="space-y-6">
      <div v-for="(product, index) in wishlistedProducts" :key="index" @click="goToProduct(product.slug)"
        class="w-[96%] mx-auto bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-[#ff413d] 
               transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_10px_#ff413d] 
               group cursor-pointer"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-4 flex-1">
            <img :src="product.image" alt="product image" class="w-24 h-24 object-cover rounded-md group-hover:brightness-110 transition"/>
            <div>
              <h2 class="text-lg font-semibold text-yellow-300 font-orbitron tracking-wide">{{ product.name }}</h2>
              <p class="text-sm text-gray-400">{{ product.description }}</p>
              <p class="text-sm text-gray-200">Delivery: {{ product.delivery }}</p>
              <p class="text-green-400 font-extrabold text-lg mt-2 font-orbitron tracking-wider drop-shadow-[0_0_3px_#00ff99]">
                {{ product.price }} €
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3 items-center pt-4">
            <button class="relative inline-block transform hover:scale-105 transition w-[160px]"
                    :aria-label="'Remove from Wishlist ' + product.name"
                    @click.stop="removeFromWishlist(product.slug)">
              <img src="/images/button_red_empty.png" alt="Wishlist" class="block w-full h-[48px]" />
              <span class="absolute inset-0 flex items-center justify-center text-[#ff413d] font-bold text-2xl leading-none">♥</span>
            </button>
            <button class="relative inline-block transform hover:scale-105 transition w-[160px]" aria-label="Add to Cart">
              <img src="/images/button_red_buy.png" alt="Buy" class="block w-full h-[48px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-center text-[#ff413d] font-orbitron text-lg mt-10 tracking-widest drop-shadow-[0_0_6px_#ff413d]">
      No wishlisted items.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const { data, error } = await useFetch('/api/products')
const products = computed(() => data.value?.products || [])
const wishlist = ref<string[]>(JSON.parse(localStorage.getItem('wishlist') || '[]'))
const wishlistedProducts = computed(() =>
  products.value.filter(p => wishlist.value.includes(p.slug))
)
const router = useRouter()
const goToProduct = (slug: string) => {
  router.push(`/product/${slug}`)
}
function removeFromWishlist(slug: string) {
  const idx = wishlist.value.indexOf(slug)
  if (idx !== -1) {
    wishlist.value.splice(idx, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist.value))
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');
.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}
</style>
