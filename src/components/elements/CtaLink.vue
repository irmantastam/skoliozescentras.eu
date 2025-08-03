<template>
  <RouterLink
    :to="{ name: route }"
    class="inline-block px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
    :class="{
      'rounded-md shadow-md': variant === 'small',
      'font-semibold md:text-lg rounded-full shadow-lg hover:scale-105 md:px-8 md:py-4':
        variant === 'big',
    }"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: false,
    default: 'small',
  },
  route: {
    type: String,
    required: false,
    default: 'contact',
  },
})
</script>
