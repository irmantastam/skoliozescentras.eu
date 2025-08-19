<template>
  <div class="bg-sky-800 text-white text-sm">
    <div
      class="max-w-7xl mx-auto flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-3 px-5 py-2"
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

      <a
        href="https://maps.app.goo.gl/Q4osjx4RerfZewbe9"
        target="_blank"
        rel="nofollow"
      >
        <span
          class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
        >
          <IconMapPin />
          <span>Aušros g. 42, LT-44158 Kaunas</span>
        </span>
      </a>

      <a
        href="https://maps.app.goo.gl/nrEmjtXuuYZdvCbk6"
        target="_blank"
        rel="nofollow"
      >
        <span
          class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
        >
          <IconMapPin />
          <span>Konstitucijos pr. 23, LT-08105 Vilnius</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import IconPhone from '../icons/IconPhone.vue'
import IconEmail from '../icons/IconEmail.vue'
import IconMapPin from '../icons/IconMapPin.vue'
</script>
