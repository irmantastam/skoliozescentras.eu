<template>
  <LayoutPage>
    <h1 class="text-3xl font-semibold text-sky-600">Susisiekime</h1>

    <p class="text-sky-900 max-w-3xl leading-relaxed">
      Turite klausimų ar norite užsiregistruoti konsultacijai? Susisiekite su
      mumis! Mūsų komanda pasiruošusi atsakyti į visus jūsų klausimus ir padėti
      rasti geriausią sprendimą jūsų stuburo sveikatai.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div>
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">
          Mūsų kontaktai
        </h3>

        <div class="flex flex-col gap-4">
          <p class="text-sky-900 mb-2 flex justify-center items-center gap-1">
            <IconPhone />

            <strong class="font-semibold">Telefonas:</strong>

            <a
              href="tel:+370 630 38885"
              class="hover:text-blue-800 transition-colors duration-200"
            >
              <span>+370 630 38885</span>
            </a>
          </p>

          <div class="text-sky-900 mb-2 flex justify-center items-center gap-1">
            <IconEmail />

            <strong class="font-semibold">El. paštas:</strong>

            <a
              href="mailto:info@innovamed.lt"
              class="hover:text-blue-800 transition-colors duration-200"
            >
              info@innovamed.lt
            </a>
          </div>

          <p class="text-sky-900 mb-2 flex justify-center items-center gap-1">
            <IconMapPin />

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

          <p class="text-sky-900 mb-2 flex justify-center items-center gap-1">
            <IconMapPin />

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
