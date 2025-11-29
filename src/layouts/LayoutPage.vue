<template>
  <section
    class="max-w-7xl mx-auto my-5 w-full sm:w-[calc(100%-theme(spacing[12]))] box-border bg-white sm:rounded-lg sm:shadow-md pt-6 sm:p-6 mb-6 flex flex-col gap-4 sm:gap-8"
  >
    <slot />
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

const route = useRoute()

useHead({
  title: route.meta.title,
  meta: [
    {
      name: 'description',
      content: route.meta.description,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://www.skoliozescentras.eu${route.path}`,
    },
  ],
})
</script>
