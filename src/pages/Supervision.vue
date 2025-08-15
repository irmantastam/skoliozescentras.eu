<template>
  <LayoutPage>
    <div class="p-6 bg-white rounded-lg shadow-sm">
      <h1 class="text-2xl font-semibold text-sky-900 mb-4">
        Schroth klinikinė supervizija
      </h1>

      <p class="text-sky-900 leading-relaxed mb-4">
        Giedrei Mikelionienei ir Tadui Mikelioniui ISST suteikti Schroth
        klinikinės praktikos vadovo laipsniai. Šis statusas reiškia, kad šie
        specialistai yra įgalioti ne tik prižiūrėti Schroth metodikos lygį
        šalyje, bet ir aktyviai padėti kitiems Schroth terapeutams gilinti savo
        žinias, tobulinti įgūdžius bei augti profesiškai.
      </p>

      <h2 class="text-xl font-medium text-sky-700 mb-2">
        Vadovo vaidmuo apima:
      </h2>

      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>
          Asmeninę klinikinę superviziją – pagalbą sprendžiant sudėtingus
          klinikinius atvejus, individualias konsultacijas dėl gydymo
          strategijos.
        </li>

        <li>Praktinių įgūdžių vertinimą ir struktūruotą grįžtamąjį ryšį.</li>

        <li>
          Mokymų organizavimą, kvalifikacijos kėlimo seminarus, teminius
          praktikumus.
        </li>

        <li>
          Nuolatinį palaikymą naujiems ir jau dirbantiems terapeutams – lydėjimą
          nuo pirmųjų žingsnių iki pažengusio lygio.
        </li>
      </ul>

      <p class="text-sky-900 leading-relaxed mb-4">
        Schroth klinikinės praktikos vadovo statusas žymi ypatingai aukštą ISST
        pasitikėjimą terapeuto kompetencija, profesine etika ir gebėjimu
        dalintis žiniomis, taip pat atstovauti ISST vertybes tarptautinėje
        bendruomenėje. Tai reikšmingas profesinis įvertinimas Schroth 3D
        skoliozės terapijos srityje.
      </p>
    </div>

    <section
      class="p-6 bg-white rounded-lg shadow-sm border border-gray-200 w-full"
    >
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Kviečiame kreiptis
      </h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        Jei esate mokymus baigęs Schroth terapeutas ir:
      </p>

      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>Norite pasitikrinti savo žinias.</li>
        <li>Siekiate patobulinti klinikinius įgūdžius.</li>
        <li>Ieškote individualios pagalbos ar konsultacijos.</li>
        <li>Sprendžiate klinikinius iššūkius praktikoje.</li>
      </ul>

      <p class="text-sky-900 leading-relaxed mb-4">kreipkitės į mus drąsiai.</p>

      <h3 class="text-xl font-medium text-sky-700 mb-2">Kontaktai</h3>

      <p class="text-sky-900 leading-relaxed mb-2">
        <span class="font-semibold">El. paštas:</span>
        <a
          href="mailto:info@innovamed.lt"
          class="text-sky-800 hover:underline ml-2"
        >
          info@innovamed.lt
        </a>
      </p>

      <p class="text-sky-900 leading-relaxed">
        <span class="font-semibold">Telefonas:</span>

        <a
          href="tel:+37063038885"
          class="text-sky-800 hover:underline ml-2"
        >
          +370 630 38885
        </a>
      </p>
    </section>

    <ContactTeaser />
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
import ContactTeaser from '../components/sections/ContactTeaser.vue'
</script>
