<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600 text-center mb-10">
      Mūsų Komanda
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RouterLink
        :to="{ name: 'giedre-mikelioniene' }"
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2025/07/IMG_3249-300x300.jpg.webp"
          alt="Giedrė Mikelionienė"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Giedrė Mikelionienė
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestai:</strong> Vilnius ir Kaunas.
        </p>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuota
          ISST Schroth specialistė + ISST Schroth Refresher + ISICO SEAS Level
          I.
        </p>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">ISST laipsnis:</strong> Klinikinės
          praktikos vadovė.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Papildomos metodikos:</strong> DNS
          Pediatric.
        </p>
      </RouterLink>

      <RouterLink
        :to="{ name: 'tadas-mikelionis' }"
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2023/12/DSC08158-300x300.jpg.webp"
          alt="Tadas Mikelionis"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Tadas Mikelionis
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestai:</strong> Vilnius ir Kaunas.
        </p>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuotas
          ISST Schroth specialistas + ISICO SEAS Level I.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Papildomos metodikos:</strong> DNS
          medical, Maitland, Mulligan.
        </p>
      </RouterLink>

      <div
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2025/02/Vaida-Grabauske-300x300.jpg.webp"
          alt="Vaida Grabauskė"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Vaida Grabauskė
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestas:</strong> Kaunas.
        </p>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuota
          ISST Schroth specialistė + ISICO SEAS Level I.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Papildomos metodikos:</strong> DNS
          Pediatric.
        </p>
      </div>

      <div
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2025/07/2-300x300.jpg.webp"
          alt="Emilija Masevičienė"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Emilija Masevičienė
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestas:</strong> Vilnius.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuota
          ISST Schroth specialistė + ISST Schroth Refresher + ISICO SEAS Level
          I.
        </p>
      </div>

      <div
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2025/08/Dizainas-be-pavadinimo-2-300x300.jpg.webp"
          alt="Žygimantas Skinderis"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Žygimantas Skinderis
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestas:</strong> Vilnius.
        </p>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuotas
          ISST Schroth specialistas + ISICO SEAS Level I.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Papildomos metodikos:</strong> DNS
          Pediatric, Maitland.
        </p>
      </div>

      <div
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2025/07/1-1-300x300.jpg.webp"
          alt="Evita Budnikienė"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Evita Budnikienė
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestas:</strong> Vilnius.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuota
          ISST Schroth praktikė.
        </p>
      </div>

      <div
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2026/01/unnamed-1-300x300.jpg.webp"
          alt="Martynas Žilinskas"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Martynas Žilinskas
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestas:</strong> Kaunas.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Specializacija:</strong> Sertifikuotas
          ISST Schroth praktikas + ISICO SEAS Level I.
        </p>
      </div>

      <div
        class="bg-white p-6 sm:rounded-lg shadow-md flex flex-col items-center text-center"
      >
        <img
          src="https://innovamed.lt/wp-content/uploads/2025/09/Daina-Petroniene-e1757952803649-600x600.jpg.webp"
          alt="Daina Petronienė"
          class="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
        />
        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Daina Petronienė
        </h2>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Miestas:</strong> Kaunas.
        </p>
        <p class="text-gray-700 mb-1">
          <strong class="font-semibold">Specializacija:</strong> ISICO SEAS
          Level I.
        </p>
        <p class="text-gray-700">
          <strong class="font-semibold">Papildomos metodikos:</strong> DNS
          pediatric, DNS pilates ir DNS pelvic floor.
        </p>
      </div>
    </div>
  </LayoutPage>
</template>

<script setup>
import LayoutPage from '../layouts/LayoutPage.vue'
</script>
