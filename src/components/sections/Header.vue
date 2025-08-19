<template>
  <header class="bg-white bg-opacity-95 sticky top-0 shadow-md z-40">
    <ContactTop class="hidden xl:block" />

    <div
      class="max-w-7xl mx-auto flex justify-between items-center py-2 md:py-4 px-5 gap-4"
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
import ContactTop from './ContactTop.vue'
import Logo from '../elements/Logo.vue'
import ExternalCtaLink from '../elements/ExternalCtaLink.vue'
import DesktopMenu from './DesktopMenu.vue'
import MobileMenu from './MobileMenu.vue'
</script>
