<template>
    <section class="bg-[#111111] text-white py-6 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(column, i) in sections" :key="i">
            <h3 class="font-semibold mb-2">{{ column.title }}</h3>
            <ul class="text-sm text-teal-400 space-y-1">
              <li v-for="(item, j) in column.links" :key="j">
                <a href="#" class="hover:underline">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="text-center mt-6 text-gray-400 text-sm">
          <button class="hover:underline">POKAŻ WIĘCEJ</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const sections = [
    {
      title: 'Rankingi',
      links: [
        'Ranking skarpetek i rękawiczek z preparatami',
        'Ranking skarpetek złuszczających',
        'Ranking soli do stóp',
        'Ranking soli i kul do kąpieli',
        'Ranking suchych szamponów do włosów',
        'Ranking szamponów do włosów',
      ],
    },
    {
      title: 'Ostatnio dodane',
      links: [
        'TOP 10 dysków SSD, które musisz rozważyć',
        'Najlepsze prezenty na Dzień Ojca',
        'Najlepsze wózki spacerowe',
        'TOP 7 kosiarek spalinowych',
      ],
    },
    {
      title: 'Najczęściej czytane',
      links: [
        'Pozbądź się cellulitu – 12 hitów',
        'Jak wybrać deskę do prasowania?',
        'Najlepszy zegarek męski do 1500 zł',
      ],
    },
    {
      title: 'Wyjątkowe okazje',
      links: [
        'Ozdoby wielkanocne',
        'Prezent na komunię',
        'Air fryer ranking',
        'Napoje letnie',
      ],
    },
  ]
  </script>