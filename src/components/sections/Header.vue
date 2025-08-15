<template>
  <header class="bg-white bg-opacity-95 shadow-sm sticky top-0 z-50">
    <Contacts class="hidden md:block" />

    <div
      class="max-w-6xl mx-auto flex justify-between items-center py-2 md:py-5 px-5 gap-4"
    >
      <Logo />

      <DesktopMenu />

      <div class="flex items-center gap-5 flex-shrink-0">
        <ExternalCtaLink class="hidden md:block" />

        <MobileMenu />
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '../elements/Logo.vue'
import ExternalCtaLink from '../elements/ExternalCtaLink.vue'
import Contacts from './Contacts.vue'
import DesktopMenu from './DesktopMenu.vue'
import MobileMenu from './MobileMenu.vue'
</script>
