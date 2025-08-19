<template>
  <nav class="hidden xl:block">
    <!-- Top-level menu -->
    <ul class="flex items-end justify-center flex-wrap space-y-1.5">
      <!-- Apie mus menu -->
      <li
        class="relative group"
        @mouseenter="toggleDropdown('apie-mus')"
        @mouseleave="closeDropdowns()"
      >
        <div
          class="text-sky-900 text-sm px-4 py-4 font-medium cursor-pointer hover:text-sky-600 transition-colors duration-300 hover:underline"
          @click="toggleDropdown('apie-mus')"
        >
          Apie mus
        </div>

        <ul
          v-if="activeDropdown === 'apie-mus'"
          class="absolute left-1/2 top-full p-3 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 -translate-x-1/2 text-center"
        >
          <li>
            <RouterLink
              :to="{ name: 'about' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Apie skoliozės centrą
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'success-stories' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Sėkmės istorijos
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'team' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Komanda
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'scoliteam' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              ScoliTeam
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'contact' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
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
          Nemokamas skoliozės testavimas
        </RouterLink>
      </li>

      <!-- Edukacijos menu -->
      <li
        class="relative group"
        @mouseenter="toggleDropdown('edukacijos')"
        @mouseleave="closeDropdowns()"
      >
        <div
          class="text-sky-900 text-sm px-4 py-4 font-medium cursor-pointer hover:text-sky-600 transition-colors duration-300 hover:underline"
          @click="toggleDropdown('edukacijos')"
        >
          Edukacijos
        </div>

        <ul
          v-if="activeDropdown === 'edukacijos'"
          class="absolute left-1/2 top-full p-3 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 -translate-x-1/2 text-center"
        >
          <li>
            <RouterLink
              :to="{ name: 'education' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Skoliozės edukacija mokykloms ir tėvams
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'camp' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Schroth skoliozės stovykla
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'supervision' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Schroth klinikinė supervizija
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'training' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
            >
              Skoliozės gydymo kursai Lietuvoje
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'schroth' }"
              class="block px-4 py-4 text-sm rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              @click="closeDropdowns"
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

function toggleDropdown(dropdownName) {
  activeDropdown.value =
    activeDropdown.value === dropdownName ? null : dropdownName
}

function closeDropdowns() {
  activeDropdown.value = null
}
</script>

<style scoped></style>
