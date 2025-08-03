<template>
  <button
    class="menu-toggle bg-transparent border-none cursor-pointer p-2.5 z-50 relative w-10 h-10 flex flex-col justify-around items-center"
    aria-label="Toggle navigation menu"
    @click="toggleMobileMenu"
  >
    <span
      :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"
      class="block w-7 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out"
    />

    <span
      :class="{ 'opacity-0': isMenuOpen }"
      class="block w-7 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out"
    />

    <span
      :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"
      class="block w-7 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out"
    />
  </button>

  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center overflow-y-auto"
    @click="closeMobileMenu"
  >
    <nav class="w-full text-center flex flex-col items-center gap-6">
      <Logo
        class="hidden md:block mt-6"
        @click="closeMobileMenu"
      />

      <Contacts class="block w-full md:hidden py-4" />

      <ExternalCtaLink class="block md:hidden" />

      <ul class="list-none m-0 p-0 flex flex-col gap-6">
        <li
          v-for="item in menuItems"
          :key="item.path"
        >
          <RouterLink
            :to="{ name: item.name }"
            @click="closeMobileMenu"
            class="block text-sky-900 text-xl font-semibold py-3 hover:text-sky-600 hover:underline transition-colors duration-300"
          >
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import Logo from '../elements/Logo.vue'
import ExternalCtaLink from '../elements/ExternalCtaLink.vue'
import Contacts from './Contacts.vue'

const menuItems = ref([
  { title: 'Komanda', name: 'team' },
  { title: 'Diagnostika', name: 'diagnostics' },
  { title: 'Nemokamas skoliozės testavimas', name: 'testing' },
  { title: 'Gydymas Schroth metodu', name: 'treatment' },
  { title: 'Sėkmės istorijos', name: 'success-stories' },
  { title: 'ISST Schroth organizacija', name: 'schroth' },
  { title: 'Skoliozės gydymo kursai Lietuvoje', name: 'training' },
  { title: 'Klinikės praktikos supervizija', name: 'supervision' },
  { title: 'ScoliTeam', name: 'scoliteam' },
  { title: 'Edukacija mokykloms, tėvams', name: 'education' },
  { title: 'Schroth skoliozės stovykla', name: 'camp' },
  { title: 'Susisiekime', name: 'contact' },
])

const isMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
}
</script>
