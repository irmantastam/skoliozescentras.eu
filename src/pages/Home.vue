<template>
  <Hero />

  <LayoutPage class="items-center text-center">
    <h2 class="text-3xl font-bold text-blue-600 mb-4">Skoliozė</h2>

    <p class="text-gray-800 leading-relaxed">
      <span class="text-red-500">Skoliozė</span> – tai stuburo iškrypimas į šoną
      trijose plokštumose. Skoliozė diagnozuojama tada, kai stuburo iškrypimas į
      šoną yra didesnis nei 10˚ pagal Kobo (angl. Cobb) kampą. Stuburas gali
      iškrypti keliose vietose, pavyzdžiui tik krūtininėje arba juosmeninėje
      dalyje arba abiejose ir įgauti C arba S raidės formą. Slanksteliai ne tik
      krypsta į šoną, bet ir sukasi taip deformuodami krūtinės ląstą bei
      suformuodami šonkaulinę kuprą. Esant skoliozei žmogus gali būti
      paveikiamas ne tik iš sveikatos pusės, gali sutrikti plaučių ar širdies
      veikla, tačiau tai taip pat opi ir rimta estetinė problema, kuri sukelia
      rimtas psichologines problemas.
    </p>

    <UspList />

    <ContactsLink variant="big"> Kontaktai </ContactsLink>
  </LayoutPage>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue'
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactsLink from '../components/elements/ContactsLink.vue'
import UspList from '../components/sections/UspList.vue'
</script>
