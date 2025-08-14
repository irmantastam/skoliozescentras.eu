<template>
  <div class="p-6 rounded-lg shadow-md">
    <h3 class="text-2xl font-semibold text-sky-900 mb-4 text-center">
      Siųskite mums žinutę
    </h3>

    <form
      @submit.prevent="submit"
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
          class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
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
          class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
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
          class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 rounded-md"
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
</template>

<script setup>
import { ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = '8d02b911-63bf-4960-bd46-83440386765f'
const WEB3FORMS_ACCESS_KEY_SECONDARY = 'b8e04a4d-999a-4123-bca2-2778f213fd22'

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

const submitFormSecondary = async () => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY_SECONDARY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })

    const result = await response.json()
    if (result.success) {
      console.log(result)
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      throw new Error(result)
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}

const submit = async () => {
  await submitForm()
  await submitFormSecondary()
}
</script>

<style scoped></style>
