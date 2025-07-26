<template>
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
</template>
