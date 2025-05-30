<!-- app.vue -->
<template>
  <div data-atr="tenDiv">
    <VitePwaManifest/>
    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage />
    <FooterMain />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue"
import FooterMain from "~/components/FooterMain.vue"
</script>
