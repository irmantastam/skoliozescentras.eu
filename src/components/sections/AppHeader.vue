<template>
  <header class="bg-white shadow-sm rounded-b-lg sticky top-0 z-50">
    <div class="bg-sky-700 text-white py-2 px-5 text-sm">
      <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center gap-3 md:gap-6"
      >
        <!-- Phone -->
        <a
          href="tel:+370 630 38885"
          class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
        >
          <!-- Phone Icon SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span>+370 630 38885</span>
        </a>

        <!-- Email -->
        <a
          href="mailto:info@innovamed.lt"
          class="flex items-center gap-1 hover:text-blue-200 transition-colors duration-200"
        >
          <!-- Mail Icon SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail"
          >
            <rect
              width="20"
              height="16"
              x="2"
              y="4"
              rx="2"
            />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>info@innovamed.lt</span>
        </a>

        <!-- Address -->
        <span class="flex items-center gap-1">
          <!-- Map Pin Icon SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin"
          >
            <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M12 22s8-4 8-10V7l-8-7-8 7v5c0 6 8 10 8 10z" />
          </svg>
          <span>Aušros g. 42, LT-44158 Kaunas</span>
        </span>

        <!-- Address -->
        <span class="flex items-center gap-1">
          <!-- Map Pin Icon SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin"
          >
            <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M12 22s8-4 8-10V7l-8-7-8 7v5c0 6 8 10 8 10z" />
          </svg>
          <span>Konstitucijos pr. 23, LT-08105 Vilnius</span>
        </span>
      </div>
    </div>

    <div class="max-w-6xl mx-auto flex justify-between items-center py-4 px-5">
      <div class="logo flex items-center gap-5">
        <RouterLink
          to="/"
          class="flex flex-col gap-2 items-center no-underline text-inherit"
        >
          <img
            src="/logo.webp"
            alt="Skoliozės Centras Logo"
            class="h-12 shadow-sm"
          />

          <h1 class="text-md uppercase text-gray-800">Skoliozės Centras</h1>
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

<style scoped>
/* Scoped styles for specific overrides or complex animations not easily done with Tailwind */
/* Active link indicator */
.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #2563eb; /* blue-600 */
  border-radius: 1px;
}
</style>
