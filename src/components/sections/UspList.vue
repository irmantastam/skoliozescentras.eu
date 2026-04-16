<template>
  <div>
    <h2 class="text-3xl font-semibold text-sky-900 mb-6">Mūsų paslaugos</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card 1: Laikysenos testavimas -->
      <div
        class="bg-white p-6 sm:rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div class="flex flex-col gap-4 items-center mb-4">
          <!-- Icon: Stethoscope -->
          <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-sky-800"
            >
              <path
                d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"
              />
              <path d="M8 15v1a6 6 0 0 0 6 6h2" />
              <circle
                cx="20"
                cy="22"
                r="2"
              />
            </svg>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-700">
              Laikysenos testavimas
            </h3>
            <p class="text-sky-900 leading-relaxed mt-2">
              Kviečiame pasinaudoti unikalia galimybe atlikti nemokamą
              laikysenos testavimą mūsų centre. Ankstyva diagnostika yra itin
              svarbi sėkmingam gydymui.
            </p>
          </div>
        </div>

        <RouterLink
          :to="{ name: 'testing' }"
          class="text-sky-800 font-semibold text-sm hover:underline mt-4 inline-block"
        >
          Sužinoti daugiau &rarr;
        </RouterLink>
      </div>

      <!-- Card 2: Diagnostika -->
      <div
        class="bg-white p-6 sm:rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div class="flex flex-col gap-4 items-center mb-4">
          <!-- Icon: Scan -->
          <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-scan text-sky-800"
            >
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
              <path
                d="M10 13.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"
              />
              <path d="M12 12v3" />
            </svg>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-700">Diagnostika</h3>
            <p class="text-sky-900 leading-relaxed mt-2">
              Skoliozės diagnostika mūsų centre atliekama naudojant
              pažangiausias technologijas ir metodikas, siekiant užtikrinti
              maksimalų tikslumą ir patikimumą.
            </p>
          </div>
        </div>

        <RouterLink
          :to="{ name: 'diagnostics' }"
          class="text-sky-800 font-semibold text-sm hover:underline mt-4 inline-block"
        >
          Sužinoti daugiau &rarr;
        </RouterLink>
      </div>

      <!-- Card 3: Gydymas -->
      <div
        class="bg-white p-6 sm:rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div class="flex flex-col gap-4 items-center mb-4">
          <!-- Icon: Heart Pulse -->
          <div class="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart-pulse text-sky-800"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
              <path d="M14 10h2l-2 5h2" />
            </svg>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-700">Gydymas</h3>
            <p class="text-sky-900 leading-relaxed mt-2">
              Skoliozės gydymas mūsų centre yra individualizuotas ir pagrįstas
              naujausiomis mokslinėmis žiniomis. Mes taikome kompleksinį
              požiūrį, derinantį kineziterapiją, specializuotus pratimus.
            </p>
          </div>
        </div>

        <RouterLink
          :to="{ name: 'treatment' }"
          class="text-sky-800 font-semibold text-sm hover:underline mt-4 inline-block"
        >
          Sužinoti daugiau &rarr;
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
