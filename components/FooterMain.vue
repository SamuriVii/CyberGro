<template>
    <footer class="bg-[#2a2a2a] text-white py-10 px-4">
      <div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
  
        <!-- Sekcje linków -->
        <div v-for="(section, index) in sections" :key="index">
          <h4 class="font-semibold mb-3">{{ section.title }}</h4>
          <ul class="space-y-1 text-gray-300">
            <li v-for="(link, idx) in section.links" :key="idx">
              <a href="#" class="hover:underline">{{ link }}</a>
            </li>
          </ul>
        </div>
  
        <!-- Ustawienia -->
        <div>
          <h4 class="font-semibold mb-3">Ustawienia wyświetlania</h4>
          <p class="text-gray-400 mb-4">🌙 Wygląd: <span class="text-white font-medium">Motyw urządzenia</span></p>
  
          <h4 class="font-semibold mb-2">Ustawienia lokalizacji</h4>
          <ul class="space-y-1 text-gray-300">
            <li>Kraj <span class="font-semibold text-white">Polska</span></li>
            <li>Kraj dostawy <span class="font-semibold text-white">Polska</span></li>
            <li>Język <span class="font-semibold text-white">polski</span></li>
            <li>Waluta <span class="font-semibold text-white">PLN</span></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  const sections = [
    {
      title: 'Allegro',
      links: ['O nas', 'Allegro Share', 'Reklama', 'Allegro Ads', 'Allegro API', 'Praca w Allegro', 'Zrównoważony rozwój', 'Mapa strony'],
    },
    {
      title: 'Centrum pomocy',
      links: ['Pomoc dla kupujących', 'Aktualności', 'Dla sprzedających', 'Zwrot zakupu', 'Polityka prywatności', 'Bezpieczeństwo'],
    },
    {
      title: 'Serwisy',
      links: ['Allegro Protect', 'Allegro Analytics', 'Allegro Pay', 'Allegro Smart!', 'Allegro One', 'Archiwum Allegro'],
    },
    {
      title: '',
      links: [],
    },
  ]
  </script>