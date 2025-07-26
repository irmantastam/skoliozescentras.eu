<template>
  <div
    id="app-container"
    class="flex flex-col min-h-screen font-inter"
  >
    <AppHeader />

    <main class="flex-grow">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/sections/AppHeader.vue'
import AppFooter from './components/sections/AppFooter.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
</style>
