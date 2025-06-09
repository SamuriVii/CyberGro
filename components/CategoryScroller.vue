<template>
  <div class="bg-[#1a1a1a] py-4">
    <div class="max-w-7xl mx-auto px-4 overflow-x-auto">
      <div class="flex flex-col sm:flex-row items-center justify-evenly gap-4 pt-2 overflow-hidden">

        <!-- Categories -->
        <div
          v-for="(category, index) in categories"
          :key="index"
          @click="handleSearch(category.label)"
          class="flex flex-col items-center min-w-[90px] cursor-pointer transform hover:scale-105 transition-all duration-300"
          >

          <!-- Background -->
          <div
            class="w-[70px] h-[70px] bg-no-repeat bg-contain bg-center border-2 border-[#ff413d] rounded-full shadow-[0_0_6px_#ff413d] flex items-center justify-center"
            :style="{ backgroundImage: `url('/${category.image}')` }"
          >
          </div>

          <!-- Name -->
          <span class="mt-2 text-yellow-300 text-xs font-orbitron uppercase tracking-wide text-center">
            {{ category.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const handleSearch = (label: string) => {
    if (label.trim().length > 0) {
      router.push({ path: '/search', query: { c: label } })
    }
  }
  const { data, error } = await useFetch('/api/categories')
  const categories = computed(() => data.value?.categories || [])

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }
</style>
