<template>
  <section
    class="max-w-6xl mx-auto my-5 w-full sm:w-[calc(100%-theme(spacing[12]))] box-border bg-white sm:rounded-lg sm:shadow-md sm:p-6 mb-6 flex flex-col items-center text-center gap-10 sm:gap-16"
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
})
</script>
