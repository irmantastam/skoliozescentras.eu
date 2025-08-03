<template>
  <section
    class="py-12 px-4 sm:px-6 lg:px-8 bg-blue-100 text-center w-full rounded-md shadow-md"
  >
    <h3 class="text-2xl font-semibold text-blue-800 mb-4">
      {{ heading }}
    </h3>

    <p class="text-sky-900 text-lg mb-6">
      {{ subHeading }}
    </p>

    <div
      class="space-y-3 md:space-y-0 md:flex md:justify-center md:space-x-6 mb-8"
    >
      <div class="flex items-center justify-center">
        <svg
          class="w-6 h-6 text-sky-800 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.9 5.3C11.5 13.9 12.5 13.9 14.1 13.3L22 8M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z"
          ></path>
        </svg>
        <a
          href="mailto:info@innovamed.lt"
          class="text-lg text-sky-700 hover:underline"
          >info@innovamed.lt</a
        >
      </div>

      <div class="flex items-center justify-center">
        <svg
          class="w-6 h-6 text-sky-800 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>

        <a
          href="tel:+37063038885"
          class="text-lg text-sky-700 hover:underline"
          >+370 630 38885</a
        >
      </div>
    </div>

    <CtaLink variant="big"> Susisiekime </CtaLink>
  </section>
</template>

<script setup>
import CtaLink from '../elements/CtaLink.vue'

defineProps({
  heading: {
    type: String,
    default: 'Turite klausimų? Jums reikia pagalbos? Norite užsiregistruoti?',
  },
  subHeading: {
    type: String,
    default:
      'Susisiekite su mumis ir mūsų specialistai atsakys į visus Jūsų klausimus.',
  },
})
</script>
