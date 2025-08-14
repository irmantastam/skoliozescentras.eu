<template>
  <LayoutPage>
    <div
      class="text-center p-8 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <!-- Main heading for the error code -->
      <h1 class="text-7xl md:text-9xl font-extrabold text-sky-600 mb-4">404</h1>

      <!-- Subheading with a clear message -->
      <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Atsiprašome, puslapis nerastas.
      </h2>

      <!-- Explanatory paragraph -->
      <p class="text-gray-600 text-lg mb-8 leading-relaxed">
        Atrodo, kad puslapis, kurio ieškote, neegzistuoja arba buvo perkeltas.
        Galite grįžti į pradinį puslapį, kad rastumėte tai, ko jums reikia.
      </p>

      <!-- Call-to-action button -->
      <router-link
        to="/"
        class="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-full shadow-md hover:bg-sky-700 transition-colors duration-300"
      >
        <!-- SVG icon for a modern look -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Grįžti į pradinį puslapį
      </router-link>
    </div>
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
</script>
