<template>
  <LayoutPage class="px-6">
    <h1 class="text-3xl font-semibold text-sky-600 text-center">Susisiekime</h1>

    <p class="text-sky-900 leading-relaxed">
      Turite klausimų ar norite užsiregistruoti konsultacijai? Susisiekite su
      mumis! Mūsų komanda pasiruošusi atsakyti į visus jūsų klausimus ir padėti
      rasti geriausią sprendimą jūsų stuburo sveikatai.
    </p>

    <ContactSection />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactSection from '../components/sections/ContactSection.vue'
</script>
