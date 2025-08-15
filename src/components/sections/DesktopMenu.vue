<template>
  <nav class="hidden xl:block">
    <!-- Top-level menu -->
    <ul class="flex items-end justify-center flex-wrap space-x-3 space-y-1.5">
      <template
        v-for="route in routes"
        :key="route.name"
      >
        <li v-if="!route.meta?.excludeFromMenu">
          <RouterLink
            :to="{ name: route.name }"
            class="text-sky-900 text-sm font-semibold hover:text-sky-600 transition-colors duration-300 hover:underline"
          >
            {{ route.meta?.menuTitle || route.meta?.title }}
          </RouterLink>
        </li>

        <p
          v-if="
            !route.meta?.excludeFromMenu &&
            route.name !== 'testing' &&
            route.name !== 'schroth' &&
            route.name !== 'scoliteam' &&
            route.name !== 'contact'
          "
          class="text-blue-300 font-light text-xs self-center"
        >
          |
        </p>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { routes } from '../../routes'
</script>
