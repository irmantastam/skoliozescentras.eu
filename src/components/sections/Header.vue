<template>
  <header class="bg-white bg-opacity-95 shadow-sm sticky top-0 z-50">
    <Contacts class="hidden md:block" />

    <div
      class="max-w-6xl mx-auto flex justify-between items-center py-2 md:py-5 px-5"
    >
      <Logo />

      <div class="flex items-center gap-5">
        <CtaLink class="hidden md:block" />

        <Menu />
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '../elements/Logo.vue'
import CtaLink from '../elements/CtaLink.vue'
import Contacts from './Contacts.vue'
import Menu from './Menu.vue'
</script>
