<template>
  <header class="bg-white shadow-sm rounded-b-lg sticky top-0 z-50">
    <HeaderContacts class="hidden md:block" />

    <div
      class="max-w-6xl mx-auto flex justify-between items-center py-2 md:py-4 px-5"
    >
      <div class="logo flex items-center gap-5">
        <RouterLink
          to="/"
          class="flex flex-col gap-2 items-center no-underline text-inherit"
        >
          <img
            src="/logo.webp"
            alt="Skoliozės Centras Logo"
            class="h-8 md:h-12 shadow-sm"
          />

          <h1 class="text-xs md:text-base uppercase text-gray-800">
            Skoliozės Centras
          </h1>
        </RouterLink>
      </div>

      <div class="logo flex items-center gap-5">
        <a
          href="https://innovamed.lt/"
          target="_blank"
          class="hidden md:inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          INNOVAMED klinikos
        </a>

        <button
          class="menu-toggle bg-transparent border-none cursor-pointer p-2.5 z-50 relative w-10 h-10 flex flex-col justify-around items-center"
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
        >
          <span
            :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
            class="block w-7 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out"
          ></span>
          <span
            :class="{ 'opacity-0': isMobileMenuOpen }"
            class="block w-7 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out"
          ></span>
          <span
            :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"
            class="block w-7 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center overflow-y-auto"
    >
      <nav class="w-full text-center">
        <HeaderContacts class="block md:hidden py-6" />

        <ul class="list-none m-0 p-0 flex flex-col gap-6 py-6">
          <li>
            <a
              href="https://innovamed.lt/"
              target="_blank"
              class="inline-block md:hidden px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              INNOVAMED klinikos
            </a>
          </li>

          <li
            v-for="item in menuItems"
            :key="item.path"
          >
            <RouterLink
              :to="{ name: item.name }"
              @click="closeMobileMenu"
              class="block text-gray-800 text-xl font-semibold py-3 hover:text-blue-600 transition-colors duration-300"
            >
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import HeaderContacts from './HeaderContacts.vue'

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

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
