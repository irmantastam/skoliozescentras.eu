<template>
  <footer class="bg-gray-800 text-gray-300 py-10 px-5 mt-auto">
    <div class="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
      <div class="footer-section flex-1 min-w-[250px]">
        <h3 class="text-xl font-semibold text-blue-400 mb-4">
          Skoliozės Centras
        </h3>

        <RouterLink
          :to="{ name: 'home' }"
          class="block text-sm mb-4 hover:text-blue-400 transition-colors duration-300"
        >
          skoliozescentras.eu
        </RouterLink>

        <!-- Socialinių tinklų skyrius -->
        <div class="footer-section flex-1 min-w-[250px] mb-4">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Sekite mus</h3>

          <div class="flex space-x-4">
            <!-- Facebook -->
            <a
              href="https://www.facebook.com/innovamed.lt"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3h-2.412c-3.15 0-4.588 1.457-4.588 4.667v1.333z"
                />
              </svg>
            </a>
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/innovamed.lt/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.068-1.644-.068-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <!-- TikTok - Patikslinta piktograma -->
            <a
              href="https://www.tiktok.com/@innovamedas"
              target="_blank"
              rel="noopener noreferrer"
              title="TikTok"
              class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z"
                />
              </svg>
            </a>
          </div>
        </div>

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

      <div class="footer-section flex-1 min-w-[250px] flex flex-col gap-4">
        <h3 class="text-xl font-semibold text-blue-400">Kontaktai</h3>

        <p class="text-sm">
          <IconPhone class="inline-block align-middle mr-1 -mt-1" />

          <strong>Telefonas: </strong>
          <a
            href="tel:+37063038885"
            class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            +370 630 38885
          </a>
        </p>

        <p class="text-sm">
          <IconEmail class="inline-block align-middle mr-1 -mt-1" />

          <strong>El. paštas: </strong>

          <a
            href="mailto:info@innovamed.lt"
            class="text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            info@innovamed.lt
          </a>
        </p>

        <p class="text-sm">
          <IconMapPin class="inline-block align-middle mr-1 -mt-1" />

          <strong>Kaune: </strong>

          <a
            href="https://maps.app.goo.gl/Q4osjx4RerfZewbe9"
            target="_blank"
            rel="nofollow"
            class="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            title="INNOVAMED klinikų adresas Kaune"
          >
            Aušros g. 42, LT-44158 Kaunas
          </a>
        </p>

        <p class="text-sm">
          <IconMapPin class="inline-block align-middle mr-1 -mt-1" />

          <strong>Vilniuje: </strong>

          <a
            href="https://maps.app.goo.gl/t46MKX63vi8N84vL6"
            target="_blank"
            rel="nofollow"
            class="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            title="INNOVAMED klinikų adresas Vilniuje"
          >
            Konstitucijos pr. 23, LT-08105 Vilnius
          </a>
        </p>

        <p class="text-sm">
          <strong>Darbo laikas: </strong> Pirmadienis-Penktadienis: 9:00 - 18:00
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import IconPhone from '../icons/IconPhone.vue'
import IconEmail from '../icons/IconEmail.vue'
import IconMapPin from '../icons/IconMapPin.vue'

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
</script>

<style scoped></style>
