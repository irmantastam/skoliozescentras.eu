<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 mx-6 text-center">
      Skoliozės edukacija mokykloms, tėvams
    </h1>

    <div class="p-6 bg-white sm:rounded-lg shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-2/3">
          <p class="text-sky-900 leading-relaxed">
            Tvari
            <RouterLink
              :to="{ name: 'straipsniai-skolioze' }"
              class="text-sky-600 hover:text-sky-500 transition-colors duration-300 hover:underline"
            >
              skoliozės prevencija ir gydymas</RouterLink
            >
            prasideda nuo žinojimo. Mūsų darbas – ne tik gydyti, bet ir šviesti.
            INNOVAMED komanda aktyviai prisideda prie visuomenės sveikatos
            raštingumo didinimo. Edukuojame vaikus, jų tėvus ir kitus
            kineziterapeutus, kad žinios apie laikyseną, fizinį aktyvumą ir
            skoliozės prevenciją taptų kasdienybės dalimi.
          </p>
        </div>

        <div class="flex gap-6 md:w-1/3">
          <img
            src="/images/education/school/Skoliozės edukacija mokykloms 1.webp"
            title="Skoliozės edukacija mokykloms INNOVAMED"
            alt="Skoliozės edukacija mokykloms INNOVAMED"
            class="w-[calc(50%-theme(spacing[3]))] object-cover rounded-md shadow-lg"
          />

          <img
            src="/images/education/school/Skoliozės edukacija mokykloms 2.webp"
            title="Skoliozės edukacija mokykloms INNOVAMED"
            alt="Skoliozės edukacija mokykloms INNOVAMED"
            class="w-[calc(50%-theme(spacing[3]))] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Edukacija vaikams
      </h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        Skatiname vaikų sveikos laikysenos ir aktyvumo įpročius nuo mažens. Tam
        rengiame:
      </p>

      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>
          Teminius edukacinius užsiėmimus (8–14 m. vaikams) mažose grupėse.
          Kiekvienas užsiėmimas apima teorinę dalį ir praktinę mankštą.
        </li>

        <li>
          Schroth skoliozės stovyklas, kuriose sertifikuoti specialistai
          intensyviai dirba su vaikais turinčiais skoliozę.
        </li>

        <li>
          Sveikatingumo stovyklas, kuriose vaikai per judesį, žaidimą ir žinias
          ugdo savo kūno suvokimą bei mokosi rūpintis sveikata.
        </li>

        <li>
          Edukacinius renginius mokyklose – kviečiame mokyklas bendradarbiauti,
          kad sveikos laikysenos žinios pasiektų daugiau vaikų.
        </li>
      </ul>
    </section>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">Edukacija tėvams</h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        Tėvų žinios – esminė grandis vaiko sveikatos kelyje. Padedame tėvams:
      </p>

      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>
          Atpažinti pirmuosius netaisyklingos laikysenos ar skoliozės požymius.
        </li>

        <li>Suprasti gydymo ir prevencijos galimybes.</li>

        <li>Palaikyti sveikus vaiko judėjimo įpročius kasdienybėje.</li>
      </ul>

      <p class="text-sky-900 leading-relaxed mb-2">Tai darome per:</p>

      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>
          Atviras paskaitas tėvams apie vaikų laikyseną, skoliozę, fizinį
          aktyvumą ir mitybą.
        </li>

        <li>
          Konsultacijas klinikoje, kur individualiai aptariame kiekvieno vaiko
          situaciją.
        </li>

        <li>
          Turinį socialiniuose tinkluose, kuriame dalijamės patarimais,
          pratimais, įžvalgomis ir atsakymais į tėvų dažniausiai užduodamus
          klausimus.
        </li>

        <li>
          TV laidų ir žiniasklaidos rubrikas, kur dalyvaujame kaip ekspertai,
          aptardami aktualias sveikatos temas.
        </li>
      </ul>
    </section>

    <section
      class="p-6 bg-white sm:rounded-lg shadow-sm border border-gray-200"
    >
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">
        Edukacija kineziterapeutams ir specialistams
      </h2>

      <p class="text-sky-900 leading-relaxed mb-4">
        Savo sukaupta patirtimi dalijamės ir su kitais specialistais – siekiame,
        kad šiuolaikinė, įrodymais grįsta skoliozės diagnostika ir gydymas taptų
        prieinami visoje Lietuvoje.
      </p>

      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
        <li>
          Skaitome pranešimus konferencijose, dalinamės naujausiais tyrimais ir
          praktika iš mūsų klinikos darbo.
        </li>

        <li>Organizuojame ISST Schroth mokymus kineziterapeutams.</li>

        <li>
          Vedame specializuotus susitikimus Schroth terapeutams, kuriuose
          aptariame konkrečias klinikines situacijas, tobuliname praktinius
          Schroth terapijos sugebėjimus, klinikiną mąstymą.
        </li>

        <li>
          Bendradarbiaujame su universitetais, prisidedame prie būsimų
          specialistų rengimo.
        </li>
      </ul>

      <p class="text-sky-900 leading-relaxed">
        Edukacija – mūsų ilgalaikė investicija į sveikesnę visuomenę. Tikime,
        kad žinios gali pakeisti gyvenimus.
      </p>
    </section>

    <section class="p-6 bg-white sm:rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-sky-900 mb-4">Susisiekime</h2>

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

<style scoped>
/* No specific custom styles needed, Tailwind handles it well. */
</style>
