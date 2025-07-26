<template>
  <div
    id="app-container"
    class="flex flex-col min-h-screen font-inter"
  >
    <Header />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/sections/Header.vue'
import Footer from './components/sections/Footer.vue'
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
