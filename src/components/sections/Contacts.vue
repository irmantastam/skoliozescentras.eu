<template>
  <div class="bg-sky-700 text-white text-sm">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 px-5 py-2"
    >
      <a
        href="tel:+370 630 38885"
        class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
      >
        <IconPhone />

        <span>+370 630 38885</span>
      </a>

      <a
        href="mailto:info@innovamed.lt"
        class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
      >
        <IconEmail />
        <span>info@innovamed.lt</span>
      </a>

      <span class="flex items-center gap-1">
        <IconMapPin />
        <span>Aušros g. 42, LT-44158 Kaunas</span>
      </span>

      <span class="flex items-center gap-1">
        <IconMapPin />
        <span>Konstitucijos pr. 23, LT-08105 Vilnius</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import IconPhone from '../icons/IconPhone.vue'
import IconEmail from '../icons/IconEmail.vue'
import IconMapPin from '../icons/IconMapPin.vue'
</script>
