<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600">Susisiekime</h1>

    <p class="text-sky-900 max-w-3xl leading-relaxed">
      Turite klausimų ar norite užsiregistruoti konsultacijai? Susisiekite su
      mumis! Mūsų komanda pasiruošusi atsakyti į visus jūsų klausimus ir padėti
      rasti geriausią sprendimą jūsų stuburo sveikatai.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-semibold text-gray-700">Mūsų kontaktai</h3>

        <p class="text-sky-900 mb-2">
          <IconPhone class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">Telefonas:</strong>

          <a
            href="tel:+370 630 38885"
            class="hover:text-blue-800 transition-colors duration-200"
          >
            <span>+370 630 38885</span>
          </a>
        </p>

        <div class="text-sky-900 mb-2">
          <IconEmail class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">El. paštas:</strong>

          <a
            href="mailto:info@innovamed.lt"
            class="hover:text-blue-800 transition-colors duration-200"
          >
            info@innovamed.lt
          </a>
        </div>

        <p class="text-sky-900 mb-2">
          <IconMapPin class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">Kaune:</strong>

          <a
            href="https://maps.app.goo.gl/Q4osjx4RerfZewbe9"
            target="_blank"
            rel="nofollow"
            class="hover:text-blue-800 transition-colors duration-200"
            title="INNOVAMED klinikų adresas Kaune"
          >
            Aušros g. 42, LT-44158 Kaunas
          </a>
        </p>

        <p class="text-sky-900 mb-2">
          <IconMapPin class="inline-block align-middle mr-1 -mt-1" />

          <strong class="font-semibold">Vilniuje:</strong>

          <a
            href="https://maps.app.goo.gl/t46MKX63vi8N84vL6"
            target="_blank"
            rel="nofollow"
            class="hover:text-blue-800 transition-colors duration-200"
            title="INNOVAMED klinikų adresas Vilniuje"
          >
            Konstitucijos pr. 23, LT-08105 Vilnius
          </a>
        </p>

        <p class="text-sky-900 mb-2">
          <strong class="font-semibold">Darbo laikas:</strong>
          Pirmadienis-Penktadienis: 9:00 - 18:00
        </p>

        <!-- Socialinių tinklų skyrius -->
        <h3 class="text-2xl font-semibold text-gray-700">Sekite mus</h3>

        <div class="flex gap-4 justify-center">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/innovamed.lt"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
            class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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

      <div>
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">
          Siųskite mums žinutę
        </h3>

        <form
          @submit.prevent="submitForm"
          class="space-y-4"
        >
          <div>
            <label
              for="name"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              Vardas:
            </label>

            <input
              type="text"
              id="name"
              v-model="name"
              required
              class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:borderlue-500 rounded-md"
            />
          </div>

          <div>
            <label
              for="email"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              El. paštas:
            </label>

            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:borderlue-500 rounded-md"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              Žinutė:
            </label>

            <textarea
              id="message"
              v-model="message"
              rows="5"
              required
              class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:borderlue-500 rounded-md"
            >
            </textarea>
          </div>

          <button
            type="submit"
            class="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Siųsti žinutę
          </button>
        </form>

        <p
          v-if="formStatus"
          :class="{
            'text-green-600': formStatus === 'success',
            'text-red-600': formStatus === 'error',
          }"
          class="mt-4 text-center"
        >
          {{ formMessage }}
        </p>
      </div>
    </div>
  </LayoutPage>
</template>

<script setup>
import { ref } from 'vue'

import LayoutPage from '../layouts/LayoutPage.vue'
import IconPhone from '../components/icons/IconPhone.vue'
import IconEmail from '../components/icons/IconEmail.vue'
import IconMapPin from '../components/icons/IconMapPin.vue'

const WEB3FORMS_ACCESS_KEY = 'b8e04a4d-999a-4123-bca2-2778f213fd22'
const name = ref('')
const email = ref('')
const message = ref('')

const formStatus = ref(null)
const formMessage = ref('')

const submitForm = async () => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })

    const result = await response.json()

    if (result.success) {
      console.log(result)
      formStatus.value = 'success'
      formMessage.value = 'Jūsų žinutė sėkmingai išsiųsta!'

      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      throw new Error(result)
    }
  } catch (error) {
    console.error('Form submission error:', error)

    formStatus.value = 'error'
    formMessage.value =
      'Įvyko klaida siunčiant žinutę. Pabandykite susisiekti su mumis tiesiogiai šalia nurodytais kontaktais.'
  }
}
</script>
