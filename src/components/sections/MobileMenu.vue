<template>
  <button
    class="menu-toggle bg-transparent border-none cursor-pointer p-2.5 z-50 relative w-10 h-10 flex flex-col justify-around items-center"
    :class="!isMenuOpen && 'lg:hidden'"
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
    class="fixed inset-0 bg-white z-40 flex flex-col overflow-y-auto"
  >
    <ContactTop class="block w-full py-4 xl:py-0" />

    <Logo
      class="hidden xl:block my-6"
      @click="closeMobileMenu"
    />

    <nav class="flex flex-col items-center p-6">
      <ExternalCtaLink class="block mb-6 xl:hidden" />

      <ul class="w-full list-none m-0 p-0 flex flex-col gap-2">
        <li class="border-b border-gray-100">
          <button
            @click="toggleSubmenu('about')"
            class="w-full flex justify-between items-center py-4 text-xl font-semibold text-sky-900 focus:outline-none"
          >
            Apie mus
            <span
              class="transition-transform duration-300"
              :class="{ 'rotate-180': activeSubmenu === 'about' }"
            >
              <IconChevron />
            </span>
          </button>

          <transition name="expand">
            <ul
              v-if="activeSubmenu === 'about'"
              class="bg-sky-50 rounded-lg mb-2 overflow-hidden"
            >
              <li
                v-for="link in aboutLinks"
                :key="link.name"
              >
                <RouterLink
                  :to="{ name: link.name }"
                  @click="closeMobileMenu"
                  class="block px-6 py-3 text-lg text-gray-700 hover:text-sky-600"
                >
                  {{ link.title }}
                </RouterLink>
              </li>
            </ul>
          </transition>
        </li>

        <li class="border-b border-gray-100">
          <button
            @click="toggleSubmenu('treatment')"
            class="w-full flex justify-between items-center py-4 text-xl font-semibold text-sky-900 focus:outline-none"
          >
            Skoliozės gydymas
            <span
              class="transition-transform duration-300"
              :class="{ 'rotate-180': activeSubmenu === 'treatment' }"
            >
              <IconChevron />
            </span>
          </button>

          <transition name="expand">
            <ul
              v-if="activeSubmenu === 'treatment'"
              class="bg-sky-50 rounded-lg mb-2 overflow-hidden"
            >
              <li
                v-for="link in treatmentLinks"
                :key="link.name"
              >
                <RouterLink
                  :to="{ name: link.name }"
                  @click="closeMobileMenu"
                  class="block px-6 py-3 text-lg text-gray-700 hover:text-sky-600"
                >
                  {{ link.title }}
                </RouterLink>
              </li>
            </ul>
          </transition>
        </li>

        <li class="border-b border-gray-100">
          <button
            @click="toggleSubmenu('education')"
            class="w-full flex justify-between items-center py-4 text-xl font-semibold text-sky-900 focus:outline-none"
          >
            Edukacijos
            <span
              class="transition-transform duration-300"
              :class="{ 'rotate-180': activeSubmenu === 'education' }"
            >
              <IconChevron />
            </span>
          </button>

          <transition name="expand">
            <ul
              v-if="activeSubmenu === 'education'"
              class="bg-sky-50 rounded-lg mb-2 overflow-hidden"
            >
              <li
                v-for="link in educationLinks"
                :key="link.name"
              >
                <RouterLink
                  :to="{ name: link.name }"
                  @click="closeMobileMenu"
                  class="block px-6 py-3 text-md text-gray-700 border-b border-white last:border-none"
                >
                  {{ link.title }}
                </RouterLink>
              </li>
            </ul>
          </transition>
        </li>

        <li class="border-b border-gray-100">
          <button
            @click="toggleSubmenu('blog')"
            class="w-full flex justify-between items-center py-4 text-xl font-semibold text-sky-900 focus:outline-none"
          >
            Straipsniai
            <span
              class="transition-transform duration-300"
              :class="{ 'rotate-180': activeSubmenu === 'blog' }"
            >
              <IconChevron />
            </span>
          </button>

          <transition name="expand">
            <ul
              v-if="activeSubmenu === 'blog'"
              class="bg-sky-50 rounded-lg mb-2 overflow-hidden"
            >
              <li
                v-for="link in blogLinks"
                :key="link.name"
              >
                <RouterLink
                  :to="{ name: link.name }"
                  @click="closeMobileMenu"
                  class="block px-6 py-3 text-lg text-gray-700 hover:text-sky-600"
                >
                  {{ link.title }}
                </RouterLink>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import ContactTop from './ContactTop.vue'
import Logo from '../elements/Logo.vue'
import IconChevron from '../icons/IconChevron.vue'
import ExternalCtaLink from '../elements/ExternalCtaLink.vue'

const isMenuOpen = ref(false)
const activeSubmenu = ref(null)

const aboutLinks = [
  { name: 'about', title: 'Apie skoliozės centrą' },
  { name: 'success-stories', title: 'Sėkmės istorijos' },
  { name: 'team', title: 'Komanda' },
  { name: 'scoliteam', title: 'ScoliTeam' },
  { name: 'contact', title: 'Kontaktai' },
]

const treatmentLinks = [
  { name: 'diagnostics', title: 'Diagnostika' },
  { name: 'treatment', title: 'Gydymas Schroth metodu' },
  { name: 'testing', title: 'Nemokamas laikysenos testavimas' },
]

const educationLinks = [
  { name: 'education', title: 'Skoliozės edukacija mokykloms ir tėvams' },
  { name: 'camp', title: 'Schroth skoliozės stovykla' },
  { name: 'supervision', title: 'Schroth klinikinė supervizija' },
  { name: 'training', title: 'Skoliozės gydymo kursai Lietuvoje' },
  { name: 'schroth', title: 'ISST Schroth metodas ir organizacija' },
  { name: 'seas', title: 'SEAS metodas ir ISICO organizacija' },
  { name: 'sosort', title: 'Tarptautinė SOSORT organizacija' },
  { name: 'psse', title: 'Tarptautinė PSSE asociacija' },
]

const blogLinks = [
  { name: 'straipsniai-skolioze', title: 'Skoliozė' },
  { name: 'straipsniai-kaklo-skolioze', title: 'Sėkmės istorijos' },
  { name: 'straipsniai-idiopatine-skolioze', title: 'Idiopatinė skoliozė' },
  {
    name: 'straipsniai-reabilitacija-po-skoliozes-operacijos',
    title: 'Reabilitacija po skoliozės operacijos',
  },
]

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleSubmenu = (name) => {
  activeSubmenu.value = activeSubmenu.value === name ? null : name
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
  activeSubmenu.value = null
}
</script>
