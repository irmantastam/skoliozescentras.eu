<template>
  <div
    class="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
  >
    <iframe
      src="https://www.youtube.com/embed/R9Nz87tNqjI?autoplay=1&mute=1&playlist=R9Nz87tNqjI&loop=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="youtube-background-iframe absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    ></iframe>

    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div
      class="relative z-10 text-center p-6 max-w-3xl mx-auto bg-white bg-opacity-80 rounded-2xl shadow-xl md:p-10"
    >
      <h2
        class="text-3xl md:text-4xl uppercase font-semibold text-sky-800 mb-4"
      >
        Skoliozės gydymo centras
      </h2>

      <hr />

      <h1
        class="text-3xl md:text-4xl font-semibold text-sky-600 mt-4 mb-5 leading-tight"
      >
        INNOVAMED
      </h1>

      <p class="text-gray-900 text-lg leading-relaxed mb-4">
        Kviečiame pasinaudoti unikalia galimybe atlikti nemokamą skoliozės
        testavimą mūsų centre. Ankstyva diagnostika yra itin svarbi sėkmingam
        gydymui. Mūsų specialistai atidžiai įvertins jūsų laikyseną ir stuburo
        būklę, suteiks pirminę konsultaciją ir atsakys į visus rūpimus
        klausimus.
      </p>

      <p class="text-gray-900 text-lg leading-relaxed mb-6">
        Testavimas yra greitas ir neskausmingas. Jo metu naudojame modernią
        įrangą, leidžiančią tiksliai nustatyti galimus nukrypimus. Po testavimo
        gausite išsamią ataskaitą ir rekomendacijas dėl tolesnių veiksmų, jei
        tai bus reikalinga.
      </p>

      <RouterLink
        class="mt-5 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block transform hover:scale-105"
        :to="{ name: 'contact' }"
      >
        Registruotis nemokamam testavimui
      </RouterLink>
    </div>
  </div>

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

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">
          Nemokamas skoliozės testavimas
        </h3>

        <p class="text-gray-800 leading-relaxed">
          Kviečiame pasinaudoti unikalia galimybe atlikti nemokamą skoliozės
          testavimą mūsų centre. Ankstyva diagnostika yra itin svarbi sėkmingam
          gydymui.
        </p>

        <RouterLink
          :to="{ name: 'testing' }"
          class="text-gray-600 text-sm italic mt-3 inline-block"
        >
          Sužinoti daugiau
        </RouterLink>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Diagnostika</h3>

        <p class="text-gray-800 leading-relaxed">
          Skoliozės diagnostika mūsų centre atliekama naudojant pažangiausias
          technologijas ir metodikas, siekiant užtikrinti maksimalų tikslumą ir
          patikimumą.
        </p>

        <RouterLink
          :to="{ name: 'diagnostics' }"
          class="text-gray-600 text-sm italic mt-3 inline-block"
        >
          Sužinoti daugiau
        </RouterLink>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Gydymas</h3>

        <p class="text-gray-800 leading-relaxed">
          Skoliozės gydymas mūsų centre yra individualizuotas ir pagrįstas
          naujausiomis mokslinėmis žiniomis. Mes taikome kompleksinį požiūrį,
          derinantį kineziterapiją, specializuotus pratimus
        </p>

        <RouterLink
          :to="{ name: 'treatment' }"
          class="text-gray-600 text-sm italic mt-3 inline-block"
        >
          Sužinoti daugiau
        </RouterLink>
      </div>
    </div>

    <RouterLink
      class="mt-5 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block transform hover:scale-105"
      :to="{ name: 'contact' }"
    >
      Kontaktai
    </RouterLink>
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
</script>

<style scoped>
.youtube-background-iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: calc(100vw * 9 / 16);
  transform: translate(-50%, -50%);
  min-height: 100vh;
  min-width: calc(100vh * 16 / 9);
}
</style>
