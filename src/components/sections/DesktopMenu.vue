<template>
  <nav class="hidden lg:block">
    <!-- Top-level menu -->
    <ul class="flex items-end justify-center flex-wrap space-y-1.5">
      <!-- Apie mus menu -->
      <li
        class="relative group"
        @mouseenter="openDropdown('apie-mus')"
        @mouseleave="closeDropdownsDirectly()"
        @focusin="openDropdown('apie-mus')"
      >
        <button
          type="button"
          tabindex="0"
          class="text-sky-900 text-sm px-4 py-4 font-medium cursor-pointer hover:text-sky-600 transition-colors duration-300 hover:underline focus:outline-none focus:text-sky-600 focus:underline"
          @click="toggleDropdown('apie-mus')"
        >
          Apie mus
        </button>

        <ul
          v-if="activeDropdown === 'apie-mus'"
          class="absolute left-1/2 top-full p-3 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 -translate-x-1/2 text-center"
        >
          <li>
            <RouterLink
              :to="{ name: 'about' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Apie skoliozės centrą
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'success-stories' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Sėkmės istorijos
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'team' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Komanda
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'scoliteam' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              ScoliTeam
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'contact' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Kontaktai
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Single-item menu links -->
      <li>
        <RouterLink
          :to="{ name: 'treatment' }"
          class="block text-sky-900 text-sm px-4 py-4 font-medium hover:text-sky-600 transition-colors duration-300 hover:underline"
        >
          Gydymas Schroth metodu
        </RouterLink>
      </li>

      <li>
        <RouterLink
          :to="{ name: 'diagnostics' }"
          class="block text-sky-900 text-sm px-4 py-4 font-medium hover:text-sky-600 transition-colors duration-300 hover:underline"
        >
          Diagnostika
        </RouterLink>
      </li>

      <li>
        <RouterLink
          :to="{ name: 'testing' }"
          class="block text-sky-900 text-sm px-4 py-4 font-medium hover:text-sky-600 transition-colors duration-300 hover:underline"
        >
          Nemokamas laikysenos testavimas
        </RouterLink>
      </li>

      <!-- Edukacijos menu -->
      <li
        class="relative group"
        @mouseenter="openDropdown('edukacijos')"
        @mouseleave="closeDropdownsDirectly()"
        @focusin="openDropdown('edukacijos')"
      >
        <button
          type="button"
          tabindex="0"
          class="text-sky-900 text-sm px-4 py-4 font-medium cursor-pointer hover:text-sky-600 transition-colors duration-300 hover:underline focus:outline-none focus:text-sky-600 focus:underline"
          @click="toggleDropdown('edukacijos')"
        >
          Edukacijos
        </button>

        <ul
          v-if="activeDropdown === 'edukacijos'"
          class="absolute left-1/2 top-full p-3 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 -translate-x-1/2 text-center"
        >
          <li>
            <RouterLink
              :to="{ name: 'education' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Skoliozės edukacija mokykloms ir tėvams
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'camp' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Schroth skoliozės stovykla
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'supervision' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Schroth klinikinė supervizija
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'training' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              Skoliozės gydymo kursai Lietuvoje
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'schroth' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdownsDirectly"
            >
              ISST Schroth metodas ir organizacija
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const activeDropdown = ref(null)

let blurTimeout = null

function openDropdown(dropdownName) {
  clearTimeout(blurTimeout)
  activeDropdown.value = dropdownName
}

function toggleDropdown(dropdownName) {
  activeDropdown.value =
    activeDropdown.value === dropdownName ? null : dropdownName
}

function closeDropdownsDirectly() {
  activeDropdown.value = null
}
</script>

<style scoped></style>
