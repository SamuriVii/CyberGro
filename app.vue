<template>
  <div data-atr="tenDiv">
    <NuxtRouteAnnouncer />
    <Navbar/>
    <BasicSlider/>

    <!-- Pasek kategorii -->
    <CategoryScroller :categories="categories" />

    <!-- Sekcja 1 -->
    <HomeSection title="Jak niskie ceny, to czas na wiosenne zakupy" :products="produkty1" />

    <!-- Sekcja 2 -->
    <HomeSection title="Na czasie" :products="produkty2" />

    <!-- Sekcja z inspiracjami -->
    <InspirationBanner :items="inspiracje" />
    <HomeSection title="Gwarancja najniższej ceny w Domu i ogrodzie" :products="produkty3" />
    <HomeSection title="Kupuj z szybką dostawą" :products="produkty4" />

    <FooterArticles />
    <FooterMain />
  </div>
</template>



<script setup lang="ts">

  import Navbar from "~/components/Navbar.vue";
  import BasicSlider from "~/components/BasicSlider.vue";


  // Kategorie
  const categories = [
    { image: 'https://placehold.co/80x80?text=Wiosna', label: 'Hity na wiosnę' },
    { image: 'https://placehold.co/80x80?text=Kwiaty', label: 'Florystyka' },
    { image: 'https://placehold.co/80x80?text=Sport', label: 'Buty sportowe' },
    { image: 'https://placehold.co/80x80?text=Moda', label: 'Moda' },
    { image: 'https://placehold.co/80x80?text=Auto', label: 'Motoryzacja' },
  ]

  // Produkty
  const produkty1 = [
    { image: 'https://picsum.photos/seed/blender/180/180', name: 'Blender KitchenMix 2000', price: '368,89', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/koszyk/180/180', name: 'Koszyk wielkanocny z kwiatami', price: '65,00', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/baby/180/180', name: 'Ochraniacz dla dzieci CARIBOO', price: '79,90', delivery: 'w środę' },
    { image: 'https://picsum.photos/seed/kosmetyki/180/180', name: 'Zestaw kosmetyków pielęgnacyjnych', price: '278,00', delivery: 'w poniedziałek' },
    { image: 'https://picsum.photos/seed/grill/180/180', name: 'Grill ogrodowy RUSZTY', price: '329,00', delivery: 'we wtorek' },
  ]

  const produkty2 = [
    { image: 'https://picsum.photos/seed/trawa/180/180', name: 'Trawa ogrodowa dekoracyjna', price: '5,99', delivery: 'w środę' },
    { image: 'https://picsum.photos/seed/doniczka/180/180', name: 'Doniczka SMART', price: '12,47', delivery: 'jutro' },
    { image: 'https://picsum.photos/seed/truskawka/180/180', name: 'Truskawka CAŁOROCZNA', price: '28,20', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/lampa/180/180', name: 'Lampa solarna LED ogród', price: '78,90', delivery: 'w 2 dni' },
  ]

  const produkty3 = [
    { image: 'https://picsum.photos/seed/trawa2/180/180', name: 'Trawa NASIONA SKG', price: '69,99', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/nawoz/180/180', name: 'Nawóz 20kg OBORNIK', price: '68,05', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/obuwie/180/180', name: 'Obuwie robocze NEO', price: '64,99', delivery: 'jutro' },
    { image: 'https://picsum.photos/seed/kredki/180/180', name: 'Zestaw 100 kredek kolorowych', price: '59,90', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/ozdoba/180/180', name: 'Ozdoba do ogrodu – zestaw', price: '45,00', delivery: 'we wtorek' },
  ]

  const produkty4 = [
    { image: 'https://picsum.photos/seed/garnek/180/180', name: 'Garnek ceramiczny TADAR', price: '128,90', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/kawa/180/180', name: 'Kawa Tchibo Exclusive 1kg', price: '25,90', delivery: 'jutro' },
    { image: 'https://picsum.photos/seed/rower/180/180', name: 'Rower dziecięcy z kółkami', price: '549,00', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/fotelik/180/180', name: 'Fotelik samochodowy Summer Baby', price: '179,00', delivery: 'we wtorek' },
    { image: 'https://picsum.photos/seed/buty/180/180', name: 'Buty sportowe Puma', price: '268,90', delivery: 'we wtorek' },
  ]

  // Inspiracje
  const inspiracje = [
    { image: 'https://picsum.photos/seed/moda1/300/200', title: 'Galanteria i dodatki męskie' },
    { image: 'https://picsum.photos/seed/slub/300/200', title: 'Ślub i wesele' },
    { image: 'https://picsum.photos/seed/bielizna/300/200', title: 'Bielizna damska' },
    { image: 'https://picsum.photos/seed/bagaz/300/200', title: 'Bagaż' },
    { image: 'https://picsum.photos/seed/odziez/300/200', title: 'Odzież męska' },
    { image: 'https://picsum.photos/seed/extra/300/200', title: 'Styl casual' },
  ]

 </script>
