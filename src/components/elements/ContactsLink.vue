<template>
  <RouterLink
    class="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
    :to="{ name: 'contact' }"
  >
    <slot />
  </RouterLink>
</template>
