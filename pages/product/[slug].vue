<template>
    <section class="px-6 py-6 bg-[#1a1a1a] text-white min-h-[40vh]">
        <div
            v-if="product"
            class="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start border border-[#ff413d] rounded-lg p-6 shadow-[0_0_20px_#ff413d40] bg-[#1b1b1b]"
        >
            <!-- Image -->
            <div class="w-full md:w-1/2">
                <img
                    :src="product.image"
                    alt="Product image"
                    class="w-full rounded-lg border border-[#ff413d] shadow-[0_0_10px_#ff413d50]"
                />
            </div>
  
            <!-- Data -->
            <div class="flex-1 space-y-4 bg-[#111111] bg-opacity-70 p-6 rounded-md shadow-inner border border-[#3a3a3a]">
                <!-- Name -->
                <h1 class="text-3xl font-orbitron text-yellow-300 tracking-wide drop-shadow-[0_0_6px_#ff413d]">
                    {{ product.name }}
                </h1>
    
                <!-- Description -->
                <p class="text-gray-400 leading-relaxed">{{ product.description }}</p>
        
                <!-- Additional Information -->
                <p class="text-xs text-[#888888] italic border-l-2 border-[#ff413d] pl-4">
                    Note: CyberGro doesn't take responsibility for neural overloads caused
                    by unauthorized upgrades.
                </p>
    
                <!-- Delivery -->
                <p class="text-sm text-gray-500">
                    Delivery: <span class="text-white">{{ product.delivery }}</span>
                </p>
        
                <!-- Price -->
                <p class="text-green-400 text-2xl font-bold font-orbitron drop-shadow-[0_0_4px_#00ff99]">
                    {{ product.price }} €
                </p>
    
                <!-- Przycisk -->
                <div class="flex flex-col gap-3 items-center pt-4">
                    <button class="relative inline-block transform hover:scale-105 transition w-[160px]" aria-label="Add to Wishlist">
                        <img
                            src="/images/button_red_empty.png"
                            alt="Wishlist"
                            class="block w-full h-[48px]"
                        />
                        <span class="absolute inset-0 flex items-center justify-center text-[#ff413d] font-bold text-2xl leading-none">
                            ♡
                        </span>
                    </button>
        
                    <button class="relative inline-block transform hover:scale-105 transition w-[160px]" aria-label="Add to Cart">
                        <img
                            src="/images/button_red_buy.png"
                            alt="Buy"
                            class="block w-full h-[48px]"
                        />
                    </button>
                </div>
            </div>
        </div>
  
        <div v-else class="text-center text-[#ff413d] font-orbitron text-lg mt-10 tracking-widest">
            Product not found.
        </div>
    </section>
</template>
  
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    const { data, pending, error } = await useFetch('/api/products')
    const products_1 = computed(() => data.value?.products_1 || [])
    const products_2 = computed(() => data.value?.products_2 || [])
    const products_3 = computed(() => data.value?.products_3 || [])
    const products_4 = computed(() => data.value?.products_4 || [])
    const allProducts = computed(() => [
        ...products_1.value,
        ...products_2.value,
        ...products_3.value,
        ...products_4.value
    ])

    const route = useRoute()
    const slug = route.params.slug as string
    const product = allProducts.value.find(p => p.slug === slug)
</script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');
  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }
</style>
  