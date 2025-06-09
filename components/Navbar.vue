<template>
  <header class="bg-[#1b1b1b] text-white text-sm w-full">

    <!-- Upper Section -->
    <div class="w-full bg-[#1a1a1a] px-4 py-3 flex flex-col lg:flex-row items-center justify-between gap-4">
 
      <!-- Logo -->
      <div class="w-full lg:w-auto flex justify-center lg:justify-start items-center h-full">
          <router-link to="/" class="block">
          <img
            src="/images/logo.png"
            alt="CyberGro Logo"
            class="block w-auto h-[52px] sm:h-[48px] md:h-[46px] lg:h-[44px]"
          />
        </router-link>
      </div>

      <!-- Search bar -->
      <form @submit.prevent="handleSearch" class="flex flex-col sm:flex-row flex-grow w-full lg:max-w-3xl gap-2 items-center">
        <!-- Search input -->
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="What are you looking for?"
            class="w-full h-[50px] bg-[#1a1a1a] text-yellow-300 placeholder-[#ff413d] px-4 text-sm rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-[#ff413d] hover:ring-2 hover:ring-[#ff413d] drop-shadow-md transition-all duration-300 ease-in-out"
          />
          <div class="absolute bottom-0 left-0 w-full h-2 bg-search-bar-bottom bg-no-repeat bg-contain bg-left"></div>
        </div>

        <!-- Category selector -->
        <select
          v-model="categoryQuery"
          class="h-[50px] bg-[#1a1a1a] text-yellow-300 border border-[#3a3a3a] px-3 text-sm rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#ff413d] hover:border-[#ff413d]
                transition-all duration-300 ease-in-out
                appearance-none [&>*]:bg-[#1a1a1a] [&>*]:text-yellow-300 [&>*]:py-2 [&>*]:px-2 [&>*]:text-sm"
          >
          <option>All Categories</option>
          <option>CyberTech</option>
          <option>Augmentations</option>
          <option>Armor & Gear</option>
          <option>Vehicles</option>
          <option>Software Licenses</option>
        </select>

        <!-- Search button -->
        <button @click="handleSearch" class="relative inline-block transform hover:scale-105 transition" aria-label="Szukaj">
          <div class="relative">
            <img
              src="/images/button_red_empty.png"
              alt="Szukaj"
              class="block w-auto h-[52px] sm:h-[48px] md:h-[46px] lg:h-[44px]"
            />
            <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-bold text-sm uppercase tracking-wide z-10">
              Search
            </span>
          </div>
        </button>
      </form>

      <!-- My Account Button -->
      <div class="w-full lg:w-auto flex justify-center lg:justify-end">
        <button @click="showPopup = true" class="relative inline-block transform hover:scale-105 transition" aria-label="Account">
          <img
            src="/images/button_red_empty.png"
            alt="Account"
            class="block w-auto h-[52px] sm:h-[48px] md:h-[46px] lg:h-[44px]"
          />
          <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-bold text-sm uppercase tracking-wide">
            Account
          </span>
        </button>
      </div>
    </div>

    <!-- Sections Divider -->
    <hr class="my-6 mx-8 border-t border-[#ff413d] opacity-60" />

    <!-- Lower Section -->
    <div class="w-full flex flex-col lg:flex-row items-center justify-between gap-4 px-4 pb-6">

      <!-- Basic Buttons -->
      <div class="w-full lg:w-[80%] flex justify-center lg:justify-between flex-wrap items-center gap-2">

        <router-link to="/search" class="block">
          <button class="inline-block transform hover:scale-105 transition" aria-label="Strefa Okazji">
            <div class="relative">
              <img
                src="/images/button_red_long.png"
                alt="Strefa Okazji"
                class="block w-auto h-[42px] sm:h-[38px] md:h-[36px] lg:h-[34px]"
              />
              <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-semibold text-xs sm:text-[11px] uppercase tracking-wider">
                Deal Zone
              </span>
            </div>
          </button>
        </router-link>

        <router-link to="/wishlist" class="block">
          <button class="inline-block transform hover:scale-105 transition" aria-label="Strefa Okazji">
            <div class="relative">
              <img
                src="/images/button_red_long.png"
                alt="Strefa Okazji"
                class="block w-auto h-[42px] sm:h-[38px] md:h-[36px] lg:h-[34px]"
              />
              <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-semibold text-xs sm:text-[11px] uppercase tracking-wider">
                Wishlisted
              </span>
            </div>
          </button>
        </router-link>

        <button @click="showPopup = true" class="inline-block transform hover:scale-105 transition" aria-label="CyberGro Protect">
          <div class="relative">
            <img
              src="/images/button_red_long.png"
              alt="CyberGro Protect"
              class="block w-auto h-[42px] sm:h-[38px] md:h-[36px] lg:h-[34px]"
            />
            <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-semibold text-xs sm:text-[11px] uppercase tracking-wider text-center">
              CyberGro Protect
            </span>
          </div>
        </button>

        <button @click="showPopup = true" class="inline-block transform hover:scale-105 transition" aria-label="Gwarancja">
          <div class="relative">
            <img
              src="/images/button_red_long.png"
              alt="Gwarancja najniższej ceny"
              class="block w-auto h-[42px] sm:h-[38px] md:h-[36px] lg:h-[34px]"
            />
            <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-semibold text-xs sm:text-[11px] uppercase tracking-wider text-center leading-tight">
              Best Price
            </span>
          </div>
        </button>

        <button @click="showPopup = true" class="inline-block transform hover:scale-105 transition" aria-label="Sprzedawaj">
          <div class="relative">
            <img
              src="/images/button_red_long.png"
              alt="Sprzedawaj na CyberGro"
              class="block w-auto h-[42px] sm:h-[38px] md:h-[36px] lg:h-[34px]"
            />
            <span class="absolute inset-0 flex items-center justify-center text-yellow-300 font-semibold text-xs sm:text-[11px] uppercase tracking-wider text-center leading-tight">
              Sell on CyberGro
            </span>
          </div>
        </button>
      </div>

      <!-- Premium Button -->
      <div @click="showPopup = true" class="w-full lg:w-auto flex justify-center lg:justify-end">
        <button class="inline-block transform hover:scale-110 transition" aria-label="Bądź Cyber!">
          <div class="relative">
            <img
              src="/images/button_red_be_cyber.png"
              alt="Be Cyber!"
              class="block w-auto h-[52px] sm:h-[48px] md:h-[46px] lg:h-[44px]"
            />
            <span class="absolute inset-0 flex items-center items-end pt-[12px] justify-center text-yellow-300 font-extrabold text-sm uppercase tracking-widest">
              Be Cyber!
            </span>
          </div>
        </button>
      </div>
    </div>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div class="bg-[#1a1a1a] border border-[#ff413d] rounded-lg p-6 max-w-sm w-full text-center shadow-lg text-yellow-300">
        <h2 class="text-sm mb-4">Currently unavailable!</h2>
        <button
          @click="showPopup = false"
          class="px-4 py-2 bg-[#ff413d] text-white rounded-md hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const searchQuery = ref('')
  const categoryQuery = ref('')
  const showPopup = ref(false)

  const handleSearch = () => {
  router.push({ path: '/search', query: { q: searchQuery.value, c: categoryQuery.value } })
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }
</style>
