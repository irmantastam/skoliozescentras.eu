<template>
  <footer class="bg-gray-800 text-gray-300 py-10 px-5 mt-auto">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
      <div class="footer-section flex-1 min-w-[250px]">
        <h3 class="text-xl font-semibold text-blue-400 mb-4">
          Skoliozės Centras
        </h3>
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} Visos teisės saugomos.
        </p>
      </div>

      <div class="footer-section flex-1 min-w-[250px]">
        <h3 class="text-xl font-semibold text-blue-400 mb-4">Nuorodos</h3>

        <ul class="list-none p-0 m-0 text-sm">
          <li
            v-for="item in menuItems"
            :key="item.title"
            class="mb-1"
          >
            <RouterLink
              :to="{ name: item.name }"
              class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-section flex-1 min-w-[250px]">
        <h3 class="text-xl font-semibold text-blue-400 mb-4">Kontaktai</h3>

        <p class="text-sm mb-2">
          <strong>El. paštas: </strong>
          <a
            href="mailto:info@innovamed.lt"
            class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >info@innovamed.lt</a
          >
        </p>

        <p class="text-sm mb-2">
          <strong>Telefonas: </strong>
          <a
            href="tel:+370XXXXX"
            class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >+370 630 38885</a
          >
        </p>

        <p class="text-sm mb-2">
          <strong>Adresas Kaune: </strong> Aušros g. 42, LT-44158 Kaunas
        </p>

        <p class="text-sm">
          <strong>Adresas Vilniuje: </strong> Konstitucijos pr. 23, LT-08105
          Vilnius
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuItems = ref([
  { title: 'Nemokamas skoliozės testavimas', name: 'testing' },
  { title: 'Diagnostika', name: 'diagnostics' },
  { title: 'Gydymas', name: 'treatment' },
  {
    title: 'ISST Schroth metodas ir organizacija',
    name: 'schroth',
  },
  { title: 'Mokymai kineziterapeutams', name: 'training' },
  { title: 'Scoliteam', name: 'scoliteam' },
  { title: 'Sėkmės istorijos', name: 'success-stories' },
  { title: 'Klientų istorijos', name: 'client-stories' },
  { title: 'Edukacija', name: 'education' },
  { title: 'Schroth skoliozės stovykla', name: 'camp' },
  { title: 'Susisiekime', name: 'contact' },
])
</script>
