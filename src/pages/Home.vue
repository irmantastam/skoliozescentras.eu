<template>
  <Hero />

  <LayoutPage class="items-center text-center gap-8">
    <!-- Mūsų paslaugos Section with UspList -->
    <UspList />

    <!-- Apie Skoliozę Section -->
    <section class="p-6 bg-white rounded-lg shadow-sm mb-6">
      <h2 class="text-3xl font-semibold text-sky-900 mb-4 text-center">
        Apie skoliozę
      </h2>

      <p class="text-sky-900 leading-relaxed">
        <span class="font-semibold text-blue-800">Skoliozė</span> – tai
        sudėtingas stuburo išlinkimas į šoną, apimantis tris plokštumas.
        Diagnozė nustatoma, kai stuburo iškrypimas viršija 10˚ pagal Kobbo
        kampą. Dėl šio iškrypimo stuburas gali įgauti C arba S formą, o
        slanksteliai ne tik krypsta į šoną, bet ir sukasi, deformuodami krūtinės
        ląstą. Tai sukuria ne tik fizinių problemų, tokių kaip plaučių ar
        širdies veiklos sutrikimai, bet ir rimtų estetinių bei psichologinių
        iššūkių.
      </p>
    </section>

    <!-- Kas yra Schroth metodas? Section -->
    <section class="p-6 bg-white rounded-lg shadow-sm mb-6">
      <h2 class="text-3xl font-semibold text-sky-900 mb-4 text-center">
        Kas yra Schroth metodas?
      </h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        <span class="font-semibold text-blue-800">Schroth metodas</span> yra
        efektyvus nechirurginis skoliozės gydymo būdas, kurį 1927 m. Vokietijoje
        sukūrė kineziterapeutė Katherina Schroth. Metodo esmė – asimetriniai
        pratimai, derinami su korekciniu kvėpavimu, kurie yra pritaikomi
        specifinėms stuburo išgaubtoms ir įdubusioms sritims.
      </p>
      <p class="text-sky-900 leading-relaxed">
        Šios metodikos tikslas – išmokyti pacientą teisingų korekcinių pratimų
        ir padėčių. Gydymas remiasi blokų principu, apimančiu pečių juostos,
        krūtininės, juosmeninės dalies ir dubens-klubų sritis.
      </p>
    </section>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import Hero from '../components/sections/Hero.vue'
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactsLink from '../components/elements/ContactsLink.vue'
import UspList from '../components/sections/UspList.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>

<style scoped></style>
