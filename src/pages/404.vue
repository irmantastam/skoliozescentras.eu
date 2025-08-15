<template>
  <LayoutPage class="px-6">
    <div class="max-w-2xl">
      <h1 class="text-7xl md:text-9xl font-extrabold text-sky-600 mb-4">404</h1>

      <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Atsiprašome, puslapis nerastas.
      </h2>

      <p class="text-gray-600 text-lg mb-8 leading-relaxed">
        Atrodo, kad puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.
        Galite grįžti į pradinį puslapį, kad rastumėte tai, ko jums reikia.
      </p>

      <router-link
        to="/"
        class="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-full shadow-md hover:bg-sky-700 transition-colors duration-300"
      >
        <IconHome class="mr-2" />

        Grįžti į pradinį puslapį
      </router-link>
    </div>
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import IconHome from '../components/icons/IconHome.vue'
</script>
