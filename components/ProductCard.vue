<template>
  <div
    @click="goToProduct"
    class="bg-[#1a1a1a] border-2 border-[#ff413d] rounded-md p-3 text-white shadow-[0_0_10px_#ff413d40] hover:shadow-[0_0_15px_#ff413d] transition-all duration-300 group cursor-pointer"
  >
    <!-- Image -->
    <img
      :src="image"
      alt="Product Image"
      class="rounded mb-3 w-full h-40 object-cover border border-[#3a3a3a] group-hover:brightness-110 transition"
      loading="lazy"
    />

    <!-- Name -->
    <p class="text-sm font-orbitron font-semibold min-h-[48px] text-yellow-300 tracking-wide leading-snug">
      {{ name }}
    </p>

    <!-- Price -->
    <p class="text-green-400 font-extrabold text-lg mt-2 font-orbitron tracking-wider drop-shadow-[0_0_3px_#00ff99]">
      {{ price }} $
    </p>

    <!-- Delivery -->
    <p class="text-xs text-[#aaaaaa] mt-1 font-mono tracking-tight opacity-80">
      Delivery: {{ delivery }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    image: string
    name: string
    price: string | number
    delivery: string
    slug: string
  }>()

  const router = useRouter()
  const goToProduct = () => {
    router.push(`/product/${props.slug}`)
  }
</script>
