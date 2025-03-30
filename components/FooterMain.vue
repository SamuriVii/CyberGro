<template>
  <footer class="bg-[#1a1a1a] text-white pt-12 pb-16 px-4 shadow-inner shadow-[#ff413d]/30 border-t-2 border-[#ff413d]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm">

      <!-- Links -->
      <div v-for="(section, index) in sections" :key="index" class="space-y-2">
        <h4 v-if="section.title" class="text-[#ff413d] font-orbitron font-semibold uppercase tracking-wider text-sm mb-3 text-center md:text-left">
          {{ section.title }}
        </h4>

        <ul class="space-y-1 text-yellow-300 text-center md:text-left">
          <li v-for="(link, idx) in section.links" :key="idx">
            <a href="#" class="hover:text-[#ff413d] transition-all duration-200 ease-in-out">
              {{ link }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Settings -->
      <div class="space-y-4">
        <div class="bg-black/30 rounded-md border border-[#ff413d] p-4 shadow-[0_0_6px_#ff413d]">
          <h4 class="text-[#ff413d] font-semibold mb-3 font-orbitron uppercase tracking-widest text-sm">
            Display Settings
          </h4>
          <p class="text-yellow-200 mb-4">🌙 Theme: <span class="text-white font-medium">System Default</span></p>
        </div>

        <div class="bg-black/30 rounded-md border border-[#ff413d] p-4 shadow-[0_0_6px_#ff413d]">
          <h4 class="text-[#ff413d] font-semibold mb-3 font-orbitron uppercase tracking-widest text-sm">
            Location Settings
          </h4>
          <ul class="space-y-1 text-yellow-200">
            <li>Country: <span class="text-white font-semibold">Poland</span></li>
            <li>Delivery: <span class="text-white font-semibold">Poland</span></li>
            <li>Language: <span class="text-white font-semibold">Polish</span></li>
            <li>Currency: <span class="text-white font-semibold">PLN</span></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Glitch Signature -->
    <div class="mt-12 text-center">
      <p class="text-yellow-200 text-xs font-orbitron glitch">
        © 2077 CyberGro Inc. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const sections = [
    {
      title: 'CyberGro',
      links: [
        'About Us',
        'Advertising',
        'Developer API',
        'Join the Team',
        'Cyber Sustainability',
        'Site Map',
      ],
    },
    {
      title: 'Help Center',
      links: [
        'Buyer Help',
        'News & Updates',
        'Seller Support',
        'Return Policy',
        'Privacy & Security',
      ],
    },
    {
      title: 'Services',
      links: [
        'CyberGro Protect',
        'CyberPay',
        'Loyalty Program',
        'Smart Shipping',
        'Legacy Archives',
      ],
    },
    {
      title: '',
      links: [],
    },
  ]
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');

  .font-orbitron {
    font-family: 'Orbitron', sans-serif;
  }

  .glitch {
    position: relative;
    display: inline-block;
    animation: glitch 2.5s infinite;
  }

  @keyframes glitch {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    20% {
      transform: translate(-1px, 1px);
      opacity: 0.9;
    }
    40% {
      transform: translate(1px, -1px);
      opacity: 0.95;
    }
    60% {
      transform: translate(-1px, -1px);
      opacity: 1;
    }
    80% {
      transform: translate(1px, 1px);
      opacity: 0.9;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
</style>
